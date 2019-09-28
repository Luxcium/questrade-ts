import { _oAuthLogic } from '.';
import { _rawApiGet } from '../';
import { ITime } from '../../../libraries';
import { QuestradeAPIOptions } from '../../../types';

export const _oAuth = async (options: QuestradeAPIOptions) => {
  const credentials = await _oAuthLogic(options);
  try {
    const { time } = await _rawApiGet(credentials)<Promise<ITime>>('/time');

    const timZoneOffset = new Date(time).getTimezoneOffset();
    const timZone = -1 * 60 * 1000 * timZoneOffset;
    const serverTime = new Date(time).getTime();
    const expireAt = serverTime + credentials.expiresIn * 1000;

    credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
    credentials.tokenExpiration = new Date(timZone + expireAt);
    credentials.expiresAtRaw = expireAt;
    credentials.serverTime = new Date(timZone + serverTime);
    credentials.serverTimeRaw = serverTime;

    console.info('Questrade Server Time:', time, '\nStatus: ready\n');
    return credentials;
  } catch (error) {
    console.log(error.message);
    throw new Error('_oAuth Error getting credentials');
  }
};
