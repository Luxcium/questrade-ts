import { echo, getHttpClient, writeToken } from '../../resources/side-effects';
import {
  ClientResponse,
  ClientStatic,
} from '../../resources/side-effects/typescript';
import { ApiOptions, IRefreshCreds, ProxyFactory_ } from '../../typescript';
import { config } from './config';

async function _oAuthHttp(apiOptions: ApiOptions, proxy?: ProxyFactory_) {
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
}

export { _oAuthHttp };
