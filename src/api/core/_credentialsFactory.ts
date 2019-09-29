import { AxiosResponse, default as axios } from 'axios';
import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
import {
  AcountNumberString,
  Credentials,
  defaultCredentials,
  IAccount,
  IAccounts,
  ITime,
  QuestradeAPIOptions,
} from '../../libraries';
import { sync } from '../../utils/mkdirp';
import { _axiosApiGet } from './_axiosApi';

const _getServerTime = (credentials: Credentials) => async () =>
  _axiosApiGet(credentials)<Promise<ITime>>('/time')();

const _getAccounts = (credentials: Credentials) => async () =>
  _axiosApiGet(credentials)<Promise<IAccounts>>('/accounts')();

// # _credentialsFactory
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = async (token: string) => {
  const credentials = await _oAuthCredentials(token);

  try {
    const allAccounts = _getAccounts(credentials);
    const serverTimeNow = _getServerTime(credentials);

    const { accounts } = await allAccounts(); // _rawApiGet(credentials)<Promise<IAccounts>>(
    const { time } = await serverTimeNow();

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

    console.info('Questrade Server Time:', time, '\nStatus: ready\n');
  } catch (error) {
    console.log(error.message);
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};

const _oAuthCredentials = async (token: string): Promise<Credentials> => {
  const { refreshToken, credentials } = validateToken(token);
  const axiosConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  const response: AxiosResponse<any> = await axios(axiosConfig);

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  return writeToken(credentials, response);
};

const writeToken = (
  credentials: Credentials,
  response: AxiosResponse<any>
): Credentials => {
  const { data: refreshCreds } = response;
  credentials.accessToken = refreshCreds.access_token;
  credentials.apiServer = refreshCreds.api_server;
  credentials.expiresIn = refreshCreds.expires_in;
  credentials.refreshToken = refreshCreds.refresh_token;
  credentials.tokenType = refreshCreds.token_type;
  credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
  writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');

  return credentials;
};

const validateToken = (options: any) => {
  const credentials = buildCredentialsFromToken(options);
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
  return { refreshToken, credentials };
};

const buildCredentialsFromToken = (token: QuestradeAPIOptions) => {
  const credentials = emptyCredentials();

  if (typeof token === 'undefined' || !token) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof token === 'string' && token.indexOf('/') !== -1) {
    credentials.keyFile = token;
  }
  if (typeof token === 'string' && token.indexOf('/') === -1) {
    credentials.seedToken = token;
  }
  if (typeof token === 'object') {
    credentials.practice = !!token.practiceAccount;
    credentials.keyDir = token.keyDir || './keys';
    credentials.apiVersion = token.apiVersion || 'v1';
    credentials.keyFile = token.keyFile || '';
    credentials.seedToken = token.seedToken || '';
    credentials.accountNumber = `${token.account}` || '';
  }
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
};

const emptyCredentials = () => {
  const credentials: Credentials = defaultCredentials;
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
  return credentials;
};

/** PROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
export const _getPrimaryAccountNumber = (
  accounts: IAccount[]
): AcountNumberString => {
  if (accounts.length < 1) {
    throw new Error('No account number found');
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter((account: any) => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
};
