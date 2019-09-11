import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import { AxiosClient } from '../libraries/AxiosClient';
import { Credentials, qtDefaultCreds } from '../libraries/Credentials';
import { ICreds, QuestradeAPIOptions } from '../types';
import { sync } from '../utils/mkdirp';
import { apiGet } from './apiGet';
import { axiosClient } from './axiosClient';

export const oAuthLogic = (() => {
  return async function getTime(
    options: QuestradeAPIOptions,
    cb: (error: any, creds: Credentials | null) => Credentials | null = (
      _: any,
      creds: Credentials | null
    ) => creds
  ) {
    const credentials = await _oAuthLogic(options);
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

const _oAuthLogic = async (options: any): Promise<Credentials> => {
  const _axiosClient: AxiosClient<ICreds> = axiosClient;
  const credentials: Credentials = qtDefaultCreds;
  credentials.accountNumber = '';
  credentials.apiVersion = 'v1';
  credentials.keyDir = './keys';
  credentials.keyFile = '';
  credentials.practice = false;
  credentials.seedToken = '';
  credentials.expiresIn = 0;
  credentials.tokenType = '';
  credentials.refreshToken = '';
  credentials.accessToken = '';
  credentials.apiUrl = '';
  credentials.apiServer = '';

  if (typeof options === 'undefined' || options === undefined) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof options === 'string' && options.indexOf('/') !== -1) {
    credentials.keyFile = options;
  }
  if (typeof options === 'string' && options.indexOf('/') === -1) {
    credentials.seedToken = options;
  }
  if (typeof options === 'object') {
    credentials.practice =
      options.practiceAccount === undefined ? false : !!options.practiceAccount;
    credentials.keyDir = options.keyDir || './keys';
    credentials.apiVersion = options.apiVersion || 'v1';
    credentials.keyFile = options.keyFile || '';
    credentials.seedToken = options.seedToken || '';
    credentials.accountNumber = `${options.account}` || '';
  }
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  let refreshToken: string = credentials.seedToken || '';
  try {
    if (!!credentials.keyFile) {
      sync(dirname(credentials.keyFile));
    } else {
      sync(credentials.keyDir);
    }
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch (_) {
    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    access(credentials.keyFile, constants.F_OK, async none => {
      if (none) {
        writeFileSync(credentials.keyFile, credentials.seedToken, {
          encoding: 'utf8',
        });
      }
    });
  }
  try {
    const { data: refreshCreds } = await _axiosClient({
      url: `${credentials.authUrl}/oauth2/token`,
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    });
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
    writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
  } catch (authError) {
    console.error('Authentication error:', authError.message);
  }
  return credentials;
};
