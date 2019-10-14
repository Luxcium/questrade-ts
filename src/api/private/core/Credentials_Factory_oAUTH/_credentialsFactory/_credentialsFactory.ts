import { AxiosStatic, default as axios } from 'axios';
import {
  _getAccounts,
  _getServerTime,
} from '../../../QuestradeApi_QtApi/AccountsCalls';
import { _oAuthAxiosCredentials } from '../_axiosCredentials_oAUTH';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';
// const _getServerTime = (_axios: AxiosStatic = axios) => (
//   credentials: Credentials
// ) => async () => _axiosGetApi(_axios)(credentials)<ITime>('/time')();

// const _getAccounts = (_axios: AxiosStatic = axios) => (
//   credentials: Credentials
// ) => async () => _axiosGetApi(_axios)(credentials)<IAccounts>('/accounts')();

// # _credentialsFactory
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
export const _credentialsFactory = (_axios: AxiosStatic = axios) => async (
  token: string
) => {
  if (!token) throw new Error('Missing Token');
  const mock = token.length === 8 ? true : false;

  const credentials = await _oAuthAxiosCredentials(_axios)(token);

  try {
    const accounts = await _getAccounts(_axios)(credentials)();
    const time = await _getServerTime(_axios)(credentials)();

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
