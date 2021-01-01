import { QuestradeAPIOptions } from '../../../typescript';
import { _getAccounts, _getServerTime } from '../../api/AccountsCalls';
import { _oAuthAxiosCredentials } from '../axiosCredentials_oAUTH';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';

/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = async (options: QuestradeAPIOptions) => {
  const credentials = await _oAuthAxiosCredentials(options);

  try {
    const accounts = await _getAccounts(credentials)();
    const time = await _getServerTime(credentials)();

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
      credentials.expiresAtRaw ?? 0
    ).toLocaleTimeString();
    credentials.serverTime_ = new Date(
      credentials.serverTimeRaw ?? 0
    ).toLocaleTimeString();

    if (credentials.accountNumber === '00000000') {
      console.info(
        '\n🧐\n🤡 MOCK Server Time:   ',
        new Date().toISOString(),

        '\n🍦 Status: MOCKING!!!\n🤨'
      );
    } else {
      console.info('Questrade Server Time:', time, '\nStatus: ready\n');
    }
  } catch (error) {
    console.error(error.message);
    console.info(credentials.toValue());
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};
