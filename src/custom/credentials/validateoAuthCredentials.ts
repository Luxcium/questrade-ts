import { _rawApiGet } from '../../core/api';
import { Credentials, ITime } from '../../core/libraries';
import { IAccounts } from '../../core/types';
import { getPrimaryAccountNumber } from './getPrimaryAccountNumber';
export const validateoAuthCredentials = async (credentials: Credentials) => {
  try {
    const { time } = await _rawApiGet(credentials)<Promise<ITime>>('/time');
    const { accounts } = await _rawApiGet(credentials)<Promise<IAccounts>>(
      '/accounts'
    );
    const timZoneOffset = new Date(time).getTimezoneOffset();
    const timZone = -1 * 60 * 1000 * timZoneOffset;
    const serverTime = new Date(time).getTime();
    const expireAt = serverTime + credentials.expiresIn * 1000;

    credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
    credentials.tokenExpiration = new Date(timZone + expireAt);
    credentials.expiresAtRaw = expireAt;
    credentials.serverTime = new Date(timZone + serverTime);
    credentials.serverTimeRaw = serverTime;

    credentials.accountNumber = await getPrimaryAccountNumber(accounts);

    console.info('Questrade Server Time:', time, '\nStatus: ready\n');
  } catch (error) {
    console.log(error.message);
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};
