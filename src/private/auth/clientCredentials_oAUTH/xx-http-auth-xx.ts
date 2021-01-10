import {
  echo,
  getHttpClient,
  validateToken,
  writeToken,
} from '../../../resources/side-effects/default-behaviour';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/typescript';
import {
  // AuthApiConfig,
  ClientProxyHandler,
  Credentials,
  IRefreshCreds,
  QuestradeAPIOptions,
} from '../../../typescript';

// const { getHttpClient, writeToken, validateToken, echo } = sideEffects;

export const _oAuthHttpCredentials = async (
  options: QuestradeAPIOptions,
  proxy?: ClientProxyHandler,
): Promise<Credentials> => {
  const { refreshToken, credentials } = validateToken(options);
  const _config: ClientRequestConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  let httpClient: ClientStatic = getHttpClient();
  if (proxy) {
    httpClient = proxy;
  }
  let response: ClientResponse<IRefreshCreds>;
  response = (await httpClient(_config)) as any;

  if (!response.data) {
    if (response) {
      void echo<unknown>('________________________________________________');
      void echo<unknown>(response.status, response.statusText);
      void echo<unknown>(response.headers);
      void echo<unknown>(response.request);
      void echo<unknown>(response.status, response.statusText);
      void echo<unknown>('________________________________________________');
      void echo<unknown>('++++++++++++++++++++++++++++++++++++++++++++++++');
    }
    throw new Error(
      '!! validate credntials Invalid data back from http client',
    );
  }

  return writeToken(credentials, response);
};
