import {
  echo,
  getHttpClient,
  validateToken,
  writeToken,
} from '../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../resources/side-effects/typescript';
import {
  ApiOptions,
  Credentials,
  IRefreshCreds,
  ProxyFactory_,
} from '../../typescript';

const _oAuthHttp = async (apiOptions: ApiOptions, proxy?: ProxyFactory_) => {
  const [_config, credentials] = config(apiOptions);

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
      void echo<any>('________________________________________________');
      void echo<any>(response.status, response.statusText);
      void echo<any>(response.headers);
      void echo<any>(response.request);
      void echo<any>(response.status, response.statusText);
      void echo<any>('________________________________________________');
      void echo<any>('++++++++++++++++++++++++++++++++++++++++++++++++');
    }
    throw new Error(
      '!!! validate credntials Invalid data back from http client !!!',
    );
  }

  return writeToken(credentials, response);
};

export { _oAuthHttp };

function config(apiOptions: ApiOptions): [ClientRequestConfig, Credentials] {
  const { refreshToken, credentials } = validateToken(apiOptions);
  return [
    {
      method: 'GET',
      params: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      url: `${credentials.authUrl}/oauth2/token`,
    },
    credentials,
  ];
}

/*

 */
