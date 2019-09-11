import { Credentials } from '../../libraries';
import { QuestradeAPIOptions } from '../../types';
import { apiGet } from '../apiGet/apiGet';
import { oAuthLogic } from './oAuthLogic';
export const oAuth = (() => {
  return async (
    options: QuestradeAPIOptions,
    cb: (error: any, creds: Credentials | null) => Credentials | null = (
      _: any,
      creds: Credentials | null
    ) => creds
  ) => {
    const credentials = await oAuthLogic(options);
    try {
      const { time } = await apiGet(credentials)<any>('/time');
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
    } catch (error) {
      console.log(error.message);
      return cb(error as any, null as null);
    }
    return cb(null as null, credentials as Credentials);
  };
})();
