import { sideEffects } from '../../../resources/side-effects/default-behaviour';
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
import { _validateToken } from './_validateToken';
import { _writeToken } from './_writeToken';

const { echo, getAxiosLikeClient } = sideEffects;

// void function clientReversStaticConverter(specimen: ClientStatic):AxiosStatic  {
//   return specimen;
// }

export const _oAuthAxiosCredentials = async (
  options: QuestradeAPIOptions,
  proxy?: ClientProxyHandler,
): Promise<Credentials> => {
  // TODO: remove dependencies to file system making it optional ...
  const { refreshToken, credentials } = _validateToken(options);
  const _config: ClientRequestConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  let axiosClient: ClientStatic = getAxiosLikeClient();
  if (proxy) {
    axiosClient = proxy;
  }
  let response: ClientResponse<IRefreshCreds>;
  response = (await axiosClient(_config)) as any;

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
      '!! validate credntials Invalid data back from axios client',
    );
  }

  // TODO: remove dependencies to file system making it optional ...
  return _writeToken(credentials, response);
};
