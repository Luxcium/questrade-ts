import { access, constants, readFileSync, writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import { dirname } from 'path';

import { ApiCallQ_ } from '../../../../private/core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../../private/routes';
import { errorLog, infoLog, mkDirP } from '../../../../resources/side-effects';
import { _emptyCredentials } from '../../../../resources/side-effects/auth/_emptyCredentials';
// import { apiOptionsCredentialsFactory } from '../../../../resources/side-effects/auth/api-options-credentials-factory';
import type { ClientRequestConfig } from '../../../../resources/side-effects/types';
import type {
  ApiOptions,
  Credentials,
  IAccounts,
  ICreds,
  IRefreshCreds,
  ITime,
  ProxyFactory_,
} from '../../../../typescript';
import { preValidateToken } from '../../../../utils';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';
import { httpClientGet } from './httpClientGet';

/*
creds: {
    credentials: Credentials;
    refreshToken: string;
}
 */
async function getConf(
  creds: Promise<{
    credentials: Credentials;
    refreshToken: string;
  }>,
): Promise<{
  config: ClientRequestConfig;
  credentials: Credentials;
}> {
  const cred = await creds;

  return {
    config: oAuthConfig(cred.refreshToken, cred.credentials.authUrl),
    credentials: cred.credentials,
  };
}

async function write(
  apiOptions: ApiOptions,
  responseCreds: ICreds,
  credentials: Credentials,
) {
  writeFile(
    apiOptions.keyFile ||
      `${apiOptions.keyDir}/${preValidateToken(apiOptions) ?? 'ERROR'}`,
    responseCreds.refreshToken,
    'utf8',
  );

  return {
    ...credentials,
    ...responseCreds,
  };
}

export async function _oAuthHttp(
  apiOptions: ApiOptions,
  proxy?: ProxyFactory_ | null,
) {
  const httpClient = httpClientGet(proxy);
  const creds = validateToken(apiOptions);
  const conf = await getConf(creds);
  const response = await httpClient(conf.config);
  const responseCreds = convertToCreds(response.data as IRefreshCreds);

  return write(apiOptions, responseCreds, conf.credentials);
}

function oAuthConfig(
  refreshToken: string,
  authUrl: string,
): ClientRequestConfig {
  return {
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    url: `${authUrl}/oauth2/token`,
  };
}

/*
  {
    "access_token": "C3lTUKuNQrAAmSD/TPjuV/HI7aNrAwDp",
    "token_type": "Bearer" ,
    "expires_in":  300 ,
    "refresh_token":  "aSBe7wAAdx88QTbwut0tiu3SYic3ox8F",
    "api_server":  https://api01.iq.questrade.com"
  }
*/
// const writeToken = (
//   apiVersion: string,
//   response: ClientResponse<IRefreshCreds>,
// )  => {
//   const cred  = {
//     // ...credentials,
//     ...response.data,
//     apiUrl: makeApiUrl({ apiVersion, ...response.data }),
//   };

//   writeFileSync(cred.keyFile, cred.refreshToken, 'utf8');

//   return cred;
// };

export function makeApiUrl({
  api_server,
  apiVersion,
}: {
  api_server: string;
  apiVersion: string;
}) {
  return `${api_server}${apiVersion}`;
}

export async function validateToken(options: ApiOptions) {
  const credentials = apiOptionsCredentialsFactory(options);
  let refreshToken: string = credentials.seedToken;

  try {
    await (credentials.keyFile
      ? mkDirP(dirname(credentials.keyFile))
      : mkDirP(credentials.keyDir));

    credentials.keyFile =
      credentials.keyFile || `${credentials.keyDir}/${credentials.seedToken}`;
    refreshToken = readFileSync(credentials.keyFile, 'utf8');
  } catch {
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

  return { credentials, refreshToken };
}

export async function _credentialsFactory(
  apiOptions: ApiOptions,
  apiCallQ: ApiCallQ_,

  proxyFactory?: (() => ProxyFactory_) | null,
) {
  let credentials: Credentials, proxy: ProxyFactory_ | null;

  if (proxyFactory != null) {
    proxy = proxyFactory();
    credentials = await (proxy.oAuthHttpCredentials === true
      ? _oAuthHttp(apiOptions, proxy)
      : _oAuthHttp(apiOptions, null));
  } else {
    // proxy does not exist (is undefined or null) will use undefined
    proxy = null;
    credentials = await _oAuthHttp(apiOptions);
  }

  try {
    const getAccounts = _clientGetApi(credentials, apiCallQ, proxy);
    const accounts_ = getAccounts<IAccounts>('/accounts', { noCaching: true });
    const data_ = await accounts_();
    const accounts = data_.accounts ?? [];
    const getTime = _clientGetApi(credentials, apiCallQ, proxy);
    const time =
      (await getTime<ITime>('/time', { noCaching: true })()).time ?? new Date();

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

    if (credentials.accountNumber !== '00000000') {
      void infoLog<unknown>(
        ` Questrade Server ${time}\n`,
        { Status: 'ready', time },
        '\n\n',
      );
    }
    // else {
    //   void infoLog<unknown>(
    //     '\n🧐\n🤡 MOCK Server Time:   ',
    //     new Date().toISOString(),

    //     '\n🍦 Status: MOCKING!!!\n🤨',
    //   );
    // }
  } catch (error) {
    void errorLog('Credentials Factory', error);
    void infoLog<unknown>('Credentials Factory', credentials.toValue());
    throw new Error('_oAuth Error getting credentials in _credentialsFactory');
  }

  return credentials;
}

export const apiOptionsCredentialsFactory = (
  apiOptions: ApiOptions,
): Credentials => {
  const practiceAccount = Boolean(apiOptions.practiceAccount) ?? false;

  return {
    ..._emptyCredentials(),
    accountCallsPerHour: apiOptions.accountCallsPerHour ?? 0,
    accountCallsPerSecond: apiOptions.accountCallsPerSecond ?? 0,
    accountNumber: `${apiOptions.accountNumber}` ?? '',
    apiVersion: apiOptions.apiVersion ?? 'v1',
    authUrl: practiceAccount
      ? 'https://practicelogin.q.com'
      : 'https://login.questrade.com',
    caching: apiOptions.caching ?? true,
    debugVebosity: apiOptions.debugVebosity ?? 1,
    errorloger: apiOptions.errorloger ?? errorLog,
    fromCache: apiOptions.fromCache ?? true,
    keyDir: apiOptions.keyDir ?? './keys',
    keyFile: apiOptions.keyFile ?? '',
    marketCallsPerHour: apiOptions.marketCallsPerHour ?? 0,
    marketCallsPerSecond: apiOptions.marketCallsPerSecond ?? 0,
    practiceAccount,
    proxyFactory: apiOptions.proxyFactory,
    seedToken: preValidateToken(apiOptions) ?? 'ERROR',
    testing: apiOptions.testing ?? false,
  };
};

export function convertToCreds(refreshCreds: IRefreshCreds): ICreds {
  if (refreshCreds) {
    return {
      accessToken: refreshCreds.access_token,
      apiServer: refreshCreds.api_server,
      expiresIn: refreshCreds.expires_in,
      refreshToken: refreshCreds.refresh_token,
      tokenType: refreshCreds.token_type,
    };
  }

  throw new Error(
    '!!! validate credntials Invalid data back from http client !!!',
  );
}
// const { infoLog } = sideEffects;
// const { errorLog } = sideEffects;
// const { echo } = sideEffects;
// const { getHttpClient } = sideEffects;
// const { warnLog } = sideEffects;
// const { echo } = sideEffects;
// const { validateToken, writeToken } = sideEffects.auth;
// const { refreshToken, credentials } = validateToken(apiOptions);

// export function configs(arg: {
//   refreshToken: string;
//   credentials: Credentials;
// }): { config: ClientRequestConfig; credentials: Credentials } {
//   return {
//     config: {
//       method: 'GET',
//       params: {
//         grant_type: 'refresh_token',
//         refresh_token: arg.refreshToken,
//       },
//       url: `${arg.credentials.authUrl}/oauth2/token`,
//     },
//     credentials: arg.credentials,
//   };
// }

// : Promise<ClientResponse<IRefreshCreds>>
/*
  export async function validateResponse(
  _response: Promise<ClientResponse>,
): Promise<ClientResponse<IRefreshCreds>> {
  const response = await _response;

  if (!response.data) {
    if (response) {
      echo('________________________________________________');
      echo(response.status, response.statusText);
      echo(response.headers);
      echo(response.request);
      echo(response.status, response.statusText);
      echo('________________________________________________');
      echo('++++++++++++++++++++++++++++++++++++++++++++++++');
    }

    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return response;
}
  */

// export async function validateResponse(
//   _response: Promise<ClientResponse>,
// ): Promise<ClientResponse<IRefreshCreds>> {
//   const response = await _response;

//   if (!response.data) {
//     if (response) {
//       echo('________________________________________________');
//       echo(response.status, response.statusText);
//       echo(response.headers);
//       echo(response.request);
//       echo(response.status, response.statusText);
//       echo('________________________________________________');
//       echo('++++++++++++++++++++++++++++++++++++++++++++++++');
//     }

//     throw new Error(
//       '!!! validate credntials Invalid data back from http client !!!',
//     );
//   }

//   return response;
// }

// export function _getAccounts(
//   getAccounts: <R>(
//     endpoint: string,
//     handlerOptions: ProxyHandlerOptions,
//   ) => () => Promise<R>,
// ) {
//   return async (): Promise<IAccount[]> => {
//     const accounts = getAccounts<IAccounts>('/accounts', { noCaching: true });
//     const data = await accounts();

//     return data.accounts ?? [];
//   };
// }

// const time = await _getServerTime(
//   _clientGetApi(credentials, apiCallQ, proxy),
// )();

// void getTime, time_;
/*

export function _getServerTime(
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,

) {
  return async (): Promise<Date> => {
    try {
      return new Date(
        (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
      );

  };
}
     */

//     export function _getServerTime(
//   clientGetApi: <R>(
//     endpoint: string,
//     handlerOptions: ProxyHandlerOptions,
//   ) => () => Promise<R>,
//   errorlog: Logger = (error: any) => error /* logger */,
// ) {
//   return async (): Promise<Date> => {
//     try {
//       return new Date(
//         (await clientGetApi<ITime>('/time', { noCaching: true })()).time,
//       );
//     } catch (error) {
//       void errorlog(`calling '/time' endpoint ${error.message}`);

//       return new Date();
//     }
//   };
// }
