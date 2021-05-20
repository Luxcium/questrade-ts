import { ApiCallQ_ } from '../../../../private/core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../../private/routes';
import {
  echo,
  errorLog,
  getHttpClient,
  infoLog,
  warnLog,
} from '../../../../resources/side-effects';
import { _emptyCredentials } from '../../../../resources/side-effects/auth/_emptyCredentials';
import type {
  ClientPromise,
  ClientRequestConfig,
  ClientStatic,
} from '../../../../resources/side-effects/types';
import type {
  AcountNumberString,
  ApiOptions,
  Credentials,
  IAccount,
  IAccounts,
  ICreds,
  IRefreshCreds,
  ITime,
  ProxyFactory_,
} from '../../../../typescript';
import { _oAuthHttp } from './o_auth-http';

export async function getConf(
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

export async function confHttpClient(
  conf: Promise<{
    config: ClientRequestConfig;
    credentials: Credentials;
  }>,
  proxy?: ProxyFactory_ | null,
) {
  const { config } = await conf;

  return httpClientGet(proxy)(config);
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

export function makeApiUrl({
  api_server,
  apiVersion,
}: {
  api_server: string;
  apiVersion: string;
}) {
  return `${api_server}${apiVersion}`;
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

export async function responseToCreds(
  response: ClientPromise<IRefreshCreds>,
): Promise<ICreds> {
  //  ClientPromise<IRefreshCreds> (await response).data as IRefreshCreds
  const refreshCreds = (await response).data as IRefreshCreds;
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

export function httpClientGet(proxy?: ProxyFactory_ | null): ClientStatic {
  if (proxy?.oAuthHttpCredentials && proxy.activate) {
    echo('Warning: A Proxy is used in oAuth Connector!');

    return proxy.activate({});
  }

  return getHttpClient();
}

// type Token = { token: SeedToken | KeyFile | GetToken };
export function preValidateToken({ token }: ApiOptions): string {
  return typeof token === 'function'
    ? token()
    : typeof token === 'string'
    ? token
    : 'ERROR';
}

export function _getPrimaryAccountNumber(
  accounts: IAccount[],
): AcountNumberString {
  if (!accounts || accounts.length === 0) {
    // void ;
    return warnLog(
      "('No account number found') will default to 11111111:",
      '11111111',
    );
  }

  if (accounts.length === 1) {
    return accounts[0].number;
  }

  const primary = accounts.filter(account => account.isPrimary);

  if (primary.length > 0) {
    return primary[0].number;
  }

  return accounts[0].number;
}

/*
creds: {
    credentials: Credentials;
    refreshToken: string;
}
 */

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
