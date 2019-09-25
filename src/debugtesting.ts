// import { _genericEndPoint } from '..';
import { AxiosResponse, default as axios } from 'axios';
import { access, constants, readFileSync, writeFileSync } from 'fs';
import { dirname } from 'path';
// import { _oAuthLogic } from './core/api';
import {
  ApiGet,
  Credentials,
  defaultCredentials,
  ITime,
  QtApi,
  RawApiPost,
} from './core/libraries';
import { QuestradeAPIOptions } from './core/types';
import { sync } from './core/utils/mkdirp';
const myRefreshToken = 'qd0AJcnxOGOKpXzvqzIbzKwgHy3Rm3XJ0';
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

export const buildCredentialsFromToken = (token: any) => {
  const credentials = emptyCredentials();

  if (typeof token === 'undefined' || token === undefined) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof token === 'string' && token.indexOf('/') !== -1) {
    credentials.keyFile = token;
  }
  if (typeof token === 'string' && token.indexOf('/') === -1) {
    credentials.seedToken = token;
  }
  if (typeof token === 'object') {
    credentials.practice =
      token.practiceAccount === undefined ? false : !!token.practiceAccount;
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

export const validateToken = (options: any) => {
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

export const axiosConfigBuilder = (token: any) => {
  const { refreshToken, credentials } = validateToken(token);
  return {
    axiosConfig: {
      url: `${credentials.authUrl}/oauth2/token`,
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
    },
    credentials,
  };
};
export const writeToken = (
  credentials: Credentials,
  response: AxiosResponse<any>
) => {
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

// export const _oAuthLogic = async (token: any): Promise<Credentials> => {
//   const { axiosConfig, credentials }: any = axiosConfigBuilder(token);

//   const response: AxiosResponse<any> = await axios(axiosConfig);

//   if (!response.data) {
//     throw new Error(
//       '!! validate credntials Invalid data back from axios client'
//     );
//   }
//  return  writeToken(credentials, response);
// };

export const _oAuth = async (options: QuestradeAPIOptions) => {
  // const credentials = await _oAuthLogic(options);
  const { axiosConfig, credentials: creds }: any = axiosConfigBuilder(options);

  const response: AxiosResponse<any> = await axios(axiosConfig);

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  const credentials = writeToken(creds, response);
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
  } catch (error) {
    console.log(error.message);
    throw new Error('_oAuth Error getting credentials');
  }
  return credentials;
};

/** RawApiPost need to get credentials to be ready to be used */
export const _rawApiPost: RawApiPost = (crendentials: Credentials) => <
  T,
  P = any
>(
  endpoint: string
) => (postData: P) => _axiosApi(crendentials)<P>('POST', postData)<T>(endpoint);

export const _apiGetErrorLogin = (apiError: any) => {
  try {
    console.error(
      '\nAPI error in call to api:\n',
      `\n${apiError.message}`,
      `\nError code: ${apiError.response.data.code}`,
      `\n${apiError.response.data.message}`
    );
  } catch (dataError) {
    console.error(
      '\nAPI error in the response from the api:',
      `\n${dataError.message}`
    );
  }
  return apiError;
};

export const _generateHeader = (
  endpoint: string,
  credentials: Credentials,
  methode: string = 'GET',
  postData?: any
) => {
  const data: any = postData || '';

  return {
    url: credentials.apiUrl + endpoint,
    methode,
    headers: {
      Authorization: `Bearer ${credentials.accessToken}`,
      location: credentials.accountNumber,
    },
    data,
  };
};

// const token = 'cxU1AJbSZGxVNIeusUWKtesI0Tk5mvTD0';
export const _axiosApi = (crendentials: Credentials) => <P>(
  VERB: string,
  postData?: P
) => async <T>(endpoint: string): Promise<T> => {
  let data: T;
  try {
    let response: AxiosResponse<T>;

    try {
      response = await axios(
        _generateHeader(endpoint, crendentials, VERB, postData)
      );
    } catch (e) {
      console.log(e.message);
      throw new Error(e.message);
    }

    if (!response.data) {
      throw new Error();
    }
    data = response.data;
  } catch (apiError) {
    throw _apiGetErrorLogin(apiError);
  }
  return data;
};

export const newFunct = (crendentials: Credentials) => (verb: string) => (
  postData: any
) => (endpoint: string) => {
  return { crendentials, verb, postData, endpoint };
};

// export const _rawApiGet: RawApiGet = (crendentials: Credentials) => {
//   return async <T>(endpoint: string) => {
//     return _axiosApi(crendentials)('GET', null)<T>(endpoint);
//   };
// };

export const _genericEndPoint = <Type = any>(get: ApiGet) => <T = Type>(
  endpoint: string
) => /* _rawApiGet(credentials)<T>(endpoint); */ get<T>(endpoint);

export const _accountEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: QtApi
) => {
  return qtApi.accountGet<T>(endpoint);
};

// export const _getActivities = (qtApi: QtApi) => (startDate: string) => async (
//   endDate: string
// ) /* : Promise<IAccountActivity[]> */ => {
//   return qtApi.accountGet<IActivities>(
//     `/activities?startTime=${new Date(
//       startDate
//     ).toISOString()}&endTime=${new Date(endDate).toISOString()}`
//   );
//   // ) /* .activities; */;
// };

// export const _qtApiFactory = async (options: any): Promise<QtApi> => {
//   const credentials: Credentials | null = await _oAuth(options);
//   if (!credentials) {
//     console.log('credentials is null or undefined');
//     throw new Error('credentials is null or undefined');
//   }

//   /**
//    * apiGet as get  will be exported out to serve s the main apiGet method of
//    * connection
//    */
//   const get = <T>(endpoint: string) => _rawApiGet(credentials)<T>(endpoint);

//   /**
//    * apiPost as post  will be exported out to serve
//    * the main apiPost method of connection
//    */
//   const post = <T, P = any>(endpoint: string) => <D = P>(postData: D) =>
//     _rawApiPost(credentials)<T>(endpoint)<D>(postData);

//   /**
//    *  get the requests requiring account number
//    *  to transact with tge api server
//    */
//   const accountGet = <T>(endpoint: string) =>
//     _apiAccountGet(credentials)<T>(
//       `/accounts/${credentials.accountNumber}${endpoint}`
//     );

//   const getPrimaryAccountNumber = async (): Promise<AcountNumber> => {
//     const { accounts } = await _genericEndPoint<IAccounts>(get)('/accounts');

//     if (accounts.length < 1) {
//       throw new Error('No account number found');
//     }

//     if (accounts.length === 1) {
//       return accounts[0].number;
//     }

//     const primary = accounts.filter((account: any) => account.isPrimary);
//     if (primary.length > 0) {
//       return primary[0].number;
//     }

//     return accounts[0].number;
//   };
//   // qtApi
//   credentials.accountNumber = await getPrimaryAccountNumber();

//   /**
//    * accountNumber return the curently selected account number from
//    * the credentials
//    */
//   const accountNumber = credentials.accountNumber;
//   // Will return what is used in the package as qtApi => QtApi
//   return {
//     accountGet,
//     accountNumber,
//     credentials,
//     get,
//     getPrimaryAccountNumber,
//     post,
//   };
// };

export const _apiAccountGet = (credentials: Credentials) => <T = any>(
  endpoint: string
) => _axiosApi(credentials)('GET', null)<T>(endpoint);

export const _getActivities = (cred: Credentials) => (startDate: string) => (
  endDate: string
) => {
  const endpoint: string = `/activities?startTime=${new Date(
    startDate
  ).toISOString()}&endTime=${new Date(endDate).toISOString()}`;
  _apiAccountGet(cred)(endpoint); // { cred, endpoint };
};

export const _credentialsFactory = async (options: any) => {
  return _oAuth(options); // const credentials: Credentials | null = await _oAuth(options);
};

const log = console.log;

(async () => {
  const starDate = new Date(Date.now()).toISOString();
  const endDate = new Date(Date.now() - 32 * 24 * 60 * 1000).toISOString();
  // const qtApi = await _qtApiFactory(myRefreshToken);
  const cred = await _credentialsFactory(myRefreshToken);
  // const qt = new QuestradeBase(qtApi);

  // const accountsApiCalls = qt.accountsApiCalls;

  log('description', _getActivities(cred)(starDate)(endDate));
  // log('description', await accountsApiCalls.balances());
  // log('description', await accountsApiCalls.executions());
  // log('description', await accountsApiCalls.listAccounts());
  // log('description', await accountsApiCalls.orders(starDate)(endDate)());
  // log('description', accountsApiCalls.positions());
  // log('description', accountsApiCalls.time());
  // log('description', 'object');
  return { starDate, endDate };
})().catch(error =>
  console.log('error message in debugtesting:', error.message)
);
