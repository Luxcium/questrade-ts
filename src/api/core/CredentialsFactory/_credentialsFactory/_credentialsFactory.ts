import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../..';
import {
  AcountNumberString,
  IAccount,
  IAccounts,
  ITime,
} from '../../../typescript';
import { _oAuthCredentials } from '../_oAuthCredentials';
import { Credentials } from './typescript';

const _getServerTime = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async () => _axiosGetApi(_axios)(credentials)<Promise<ITime>>('/time')();

const _getAccounts = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async () =>
  _axiosGetApi(_axios)(credentials)<Promise<IAccounts>>('/accounts')();

// # _credentialsFactory
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = (_axios: AxiosStatic = axios) => async (
  token: string
) => {
  if (!token) throw new Error('Missing Token');
  const mock = token.length === 8 ? true : false;

  const credentials = await _oAuthCredentials()(token);

  try {
    const allAccounts = _getAccounts(_axios)(credentials);
    const serverTimeNow = _getServerTime(_axios)(credentials);
    const { accounts } = await allAccounts();
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

    if (credentials.accountNumber === '00000000' && mock) {
      console.info(
        '🤡 🧐  LOCAL Time:',
        new Date().toISOString(),
        '\n 🍦 🤨  Status: !!!!00000000!!!!  \n'
      );
    } else {
      if (credentials.accountNumber === '00000000') {
        throw Error("Account should not be '00000000'");
      }
      console.info('Questrade Server Time:', time, '\nStatus: ready\n');
    }
  } catch (error) {
    console.log(error.message);
    console.info(credentials);
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};

/** PROVIDE: IAccount[] THEN GET:  a 'primaryAccountNumber string'  */
export const _getPrimaryAccountNumber = (
  accounts: IAccount[]
): AcountNumberString => {
  if (!accounts || accounts.length < 1) {
    console.warn(
      "WARNING('No account number found') will default to '00000000' "
    );

    return '00000000';
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter(account => account.isPrimary);
  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
};

export const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '',
  apiServer: '',
  apiUrl: '',
  apiVersion: 'v1',
  authUrl: '',
  expiresAt: undefined,
  tokenExpiration: undefined,
  expiresIn: 0,
  keyDir: './keys',
  keyFile: '',
  practice: false,
  refreshToken: '',
  seedToken: '',
  serverTime: undefined,
  tokenType: '',
  toValue() {
    return {
      ...this,
      accessToken: '[string:PRIVATE]',
      keyFile: './keys/[PRIVATE]',
      refreshToken: '[string:PRIVATE]',
      seedToken: '[string:PRIVATE]',
    }.toString();
  },
  toString() {
    return {
      ...this,
      accessToken: ' [ PRIVATE ] ',
      keyFile: './keys/[ PRIVATE ] ',
      refreshToken: ' [ PRIVATE ] ',
      seedToken: ' [ PRIVATE ] ',
    }.toString();
  },
};
