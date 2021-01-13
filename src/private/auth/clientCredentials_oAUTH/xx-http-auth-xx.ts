import {
  echo,
  getHttpClient,
  validateToken,
  writeToken,
} from '../../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/typescript';
import {
  ClientStaticHandlerFactory,
  Credentials,
  IRefreshCreds,
  QuestradeAPIOptions,
} from '../../../typescript';

export const _oAuthHttpCredentials = async (
  apiOptions: QuestradeAPIOptions,
  proxy?: ClientStaticHandlerFactory,
): Promise<Credentials> => {
  const { refreshToken, credentials } = validateToken(apiOptions);
  const _config: ClientRequestConfig = {
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    url: `${credentials.authUrl}/oauth2/token`,
  };

  let httpClient: ClientStatic = getHttpClient();
  if (proxy?.oAuthHttpCredentials && proxy?.activate) {
    echo('using proxy in oAuth connector');

    httpClient = proxy.activate({});
  }

  const response: ClientResponse<IRefreshCreds> = (await httpClient(
    _config,
  )) as any;

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
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return writeToken(credentials, response);
};
