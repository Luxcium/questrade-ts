import { ApiCallQ_ } from '../../../../../private/core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../../../private/routes';
import { errorLog, infoLog } from '../../../../../resources/side-effects';
import type {
  ApiOptions,
  Credentials,
  IAccounts,
  ITime,
  ProxyFactory_,
} from '../../../../../typescript';
import { _oAuthHttp } from '../o_auth-http';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';

export async function _credentialsFactory(
  apiOptions: ApiOptions,
  apiCallQ: ApiCallQ_,

  proxyFactory?: (() => ProxyFactory_) | null,
) {
  let credentials: Credentials, proxy: ProxyFactory_ | null;

  if (proxyFactory != null) {
    proxy = proxyFactory();
    credentials = await (proxy.oAuthHttpCredentials === true
      ? _oAuthHttp({ apiOptions, proxy })
      : _oAuthHttp({ apiOptions }));
  } else {
    // proxy does not exist (is undefined or null) will use undefined
    proxy = null;
    credentials = await _oAuthHttp({ apiOptions });
  }

  try {
    const getAccounts = _clientGetApi(credentials, apiCallQ, proxy);
    const accounts_ = getAccounts<IAccounts>('/accounts', { noCaching: true });
    const data_ = await accounts_();
    const accounts = data_.accounts ?? [];
    const getTime = _clientGetApi(credentials, apiCallQ, proxy);
    const time =
      (await getTime<ITime>('/time', { noCaching: true })()).time ?? new Date();

    const timZoneOffset = new Date(time).getTimezoneOffset();
    const timZone = -1 * 60 * 1000 * timZoneOffset;
    const serverTime = new Date(time).getTime();
    const expireAt = serverTime + credentials.expiresIn * 1000;

    credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
    credentials.tokenExpiration = new Date(timZone + expireAt);
    credentials.expiresAtRaw = expireAt;
    credentials.serverTime = new Date(timZone + serverTime);
    credentials.serverTimeRaw = serverTime;
    credentials.accountNumber = _getPrimaryAccountNumber(accounts);
    credentials.expiresAt_ = new Date(
      credentials.expiresAtRaw ?? 0,
    ).toLocaleTimeString();
    credentials.serverTime_ = new Date(
      credentials.serverTimeRaw ?? 0,
    ).toLocaleTimeString();

    if (credentials.accountNumber !== '00000000') {
      void infoLog<unknown>(
        ` Questrade Server ${time}\n`,
        { Status: 'ready', time },
        '\n\n',
      );
    }
    // else {
    //   void infoLog<unknown>(
    //     '\n🧐\n🤡 MOCK Server Time:   ',
    //     new Date().toISOString(),
    //     '\n🍦 Status: MOCKING!!!\n🤨',
    //   );
    // }
  } catch (error) {
    void errorLog('Credentials Factory', error);
    void infoLog<unknown>('Credentials Factory', credentials.toValue());
    throw new Error('_oAuth Error getting credentials in _credentialsFactory');
  }

  return credentials;
}
