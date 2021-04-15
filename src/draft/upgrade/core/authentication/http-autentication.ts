import {
  _getAccounts,
  _getServerTime
} from '../../../../private/api/accounts-calls';
import { ApiCallQ_ } from '../../../../private/core/next-rate-limiter/queue';
import { _clientGetApi } from '../../../../private/routes';
import { sideEffects } from '../../../../resources';
import type {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic
} from '../../../../resources/side-effects/types';
import type {
  AcountNumberString,
  ApiOptions,
  Credentials,
  IAccount,
  IRefreshCreds,
  ProxyFactory_
} from '../../../../typescript';

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

  const { infoLog } = sideEffects;
  try {
    //
    const accounts = await _getAccounts(
      _clientGetApi(credentials, apiCallQ, proxy),
    )();

    const time = await _getServerTime(
      _clientGetApi(credentials, apiCallQ, proxy),
    )();

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
    const { errorLog } = sideEffects;

    void errorLog('Credentials Factory', error);
    void infoLog<unknown>('Credentials Factory', credentials.toValue());
    throw new Error('_oAuth Error getting credentials in _credentialsFactory');
  }

  return credentials;
}

export async function _oAuthHttp(
  apiOptions: ApiOptions,
  proxy?: ProxyFactory_ | null,
) {
  const { validateToken, writeToken } = sideEffects.auth;
  const creds = await validateToken(apiOptions);
  const conf = configs(creds);
  const httpClient = httpClientGet(proxy);
  const response = httpClient(conf.config);
  const validatedResponse = await validateResponse(response);

  return writeToken(conf.credentials, validatedResponse);
}

export function httpClientGet(proxy?: ProxyFactory_ | null): ClientStatic {
  if (proxy?.oAuthHttpCredentials && proxy.activate) {
    const { echo } = sideEffects;

    echo('Warning: A Proxy is used in oAuth Connector!');

    return proxy.activate({});
  }

  const { getHttpClient } = sideEffects;

  return getHttpClient();
}

export function configs(arg: {
  refreshToken: string;
  credentials: Credentials;
}): { config: ClientRequestConfig; credentials: Credentials } {
  // const { refreshToken, credentials } = validateToken(apiOptions);
  return {
    config: {
      method: 'GET',
      params: {
        grant_type: 'refresh_token',
        refresh_token: arg.refreshToken,
      },
      url: `${arg.credentials.authUrl}/oauth2/token`,
    },
    credentials: arg.credentials,
  };
}

export function _getPrimaryAccountNumber(
  accounts: IAccount[],
): AcountNumberString {
  if (!accounts || accounts.length === 0) {
    // void ;
    const { warnLog } = sideEffects;

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

export async function validateResponse(
  _response: Promise<ClientResponse>,
): Promise<ClientResponse<IRefreshCreds>> {
  const response = await _response;

  if (!response.data) {
    if (response) {
      const { echo } = sideEffects;

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
