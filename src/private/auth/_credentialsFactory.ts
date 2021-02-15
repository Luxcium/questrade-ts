import { echo, errorlog, infolog } from '../../resources/side-effects';
import { ApiOptions, Credentials, ProxyFactory_ } from '../../typescript';
import { _getAccounts } from '../api/AccountsCalls/_getAccounts/_getAccounts';
import { _getServerTime } from '../api/AccountsCalls/_getServerTime/_getServerTime';
import { ApiCallQ_ } from '../core/next-rate-limiter/queue';
import { _clientGetApi } from '../routes';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';
import { _oAuthHttp } from './xx-http-auth-xx';

/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
async function _credentialsFactory(
  apiOptions: ApiOptions,
  apiCallQ: ApiCallQ_,

  proxyFactory?: (() => ProxyFactory_) | null,
) {
  let proxy: ProxyFactory_ | null;
  let credentials: Credentials;

  if (proxyFactory != null) {
    proxy = proxyFactory();
    credentials = await (proxy.oAuthHttpCredentials === true
      ? _oAuthHttp(apiOptions, proxy)
      : _oAuthHttp(apiOptions, null));
  } else {
    // Proxy does not exist (is undefined or null) will use undefined
    proxy = null;
    credentials = await _oAuthHttp(apiOptions);
  }

  try {
    //
    const accounts = await _getAccounts(
      _clientGetApi(credentials, apiCallQ, proxy),
    )();

    const time = await _getServerTime(
      _clientGetApi(credentials, apiCallQ, proxy),
    )();

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
      void infolog<unknown>(
        ` Questrade Server ${time}\n`,
        { Status: 'ready', time },
        '\n\n',
      );
    } else {
      void infolog<unknown>(
        '\n🧐\n🤡 MOCK Server Time:   ',
        new Date().toISOString(),

        '\n🍦 Status: MOCKING!!!\n🤨',
      );
    }
  } catch (error) {
    void errorlog(error.message);
    void infolog<unknown>(credentials.toValue());
    throw new Error('_oAuth Error getting credentials in _credentialsFactory');
  }

  return credentials;
}

export { _credentialsFactory };

echo(`${__dirname}:${__filename}`);
