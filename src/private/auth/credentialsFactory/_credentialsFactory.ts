import { errorlog, infolog } from '../../../resources/side-effects';
import { ClientProxyHandler, QuestradeAPIOptions } from '../../../typescript';
import { _getAccounts, _getServerTime } from '../../api/AccountsCalls';
import { _oAuthHttpCredentials } from '../clientCredentials_oAUTH';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';

// !!!
// XXX: const { infolog, errorlog } = sideEffects;

/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = async (
  options: QuestradeAPIOptions,
  proxy?: ClientProxyHandler,
) => {
  const credentials = await _oAuthHttpCredentials(options, proxy);

  try {
    const accounts = await _getAccounts(credentials, proxy)();
    const time = await _getServerTime(credentials, proxy)();

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

    if (credentials.accountNumber === '00000000') {
      void infolog<unknown>(
        '\n🧐\n🤡 MOCK Server Time:   ',
        new Date().toISOString(),

        '\n🍦 Status: MOCKING!!!\n🤨',
      );
    } else {
      void infolog<unknown>(
        'Questrade Server Time:',
        time,
        '\nStatus: ready\n',
      );
    }
  } catch (error) {
    void errorlog(error.message);
    void infolog<unknown>(credentials.toValue());
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};
