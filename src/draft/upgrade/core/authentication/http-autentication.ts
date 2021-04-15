import { ApiCallQ_ } from '../../../../private/core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../../private/routes';
import {
  errorLog,
  infoLog,
  validateToken,
  writeToken,
} from '../../../../resources/side-effects';
import type {
  ClientRequestConfig,
  ClientResponse,
} from '../../../../resources/side-effects/types';
import type {
  ApiOptions,
  Credentials,
  IAccounts,
  IRefreshCreds,
  ITime,
  ProxyFactory_,
} from '../../../../typescript';
import { _getPrimaryAccountNumber } from './_getPrimaryAccountNumber';
import { httpClientGet } from './httpClientGet';

export async function _oAuthHttp(
  apiOptions: ApiOptions,
  proxy?: ProxyFactory_ | null,
) {
  const creds = await validateToken(apiOptions);
  const conf: {
    config: ClientRequestConfig;
    credentials: Credentials;
  } = {
    config: {
      method: 'GET',
      params: {
        grant_type: 'refresh_token',
        refresh_token: creds.refreshToken,
      },
      url: `${creds.credentials.authUrl}/oauth2/token`,
    },
    credentials: creds.credentials,
  };

  const httpClient = httpClientGet(proxy);
  const response = await httpClient(conf.config);
  if (!response.data) {
    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  const validatedResponse = (await response.data) as ClientResponse<IRefreshCreds>;

  return writeToken(conf.credentials, validatedResponse);
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
