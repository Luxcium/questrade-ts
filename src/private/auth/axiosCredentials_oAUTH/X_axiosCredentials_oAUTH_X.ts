import axios, { AxiosStatic } from 'axios';

import {
  AuthApiConfig,
  AxiosIntrospectRes,
  AxiosProxyHandler,
  Credentials,
  IRefreshCreds,
  QuestradeAPIOptions,
} from '../../../typescript';
import { _validateToken } from './_validateToken';
import { _writeToken } from './_writeToken';

export const _oAuthAxiosCredentials = async (
  options: QuestradeAPIOptions,
  proxy?: AxiosProxyHandler,
): Promise<Credentials> => {
  // TODO: remove dependencies to file system making it optional ...
  const { refreshToken, credentials } = _validateToken(options);
  const _config: AuthApiConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  let axiosClient: AxiosStatic = axios;
  if (proxy) {
    axiosClient = proxy;
  }
  let response: AxiosIntrospectRes<IRefreshCreds>;
  response = (await axiosClient(_config)) as any;

  if (!response.data) {
    if (response) {
      console.log('________________________________________________'); // CONSOLE: List the side effects
      console.log(response.status, response.statusText); // CONSOLE: List the side effects
      console.log(response.headers); // CONSOLE: List the side effects
      console.log(response.request); // CONSOLE: List the side effects
      console.log(response.status, response.statusText); // CONSOLE: List the side effects
      console.log('________________________________________________'); // CONSOLE: List the side effects
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++'); // CONSOLE: List the side effects
    }
    throw new Error(
      '!! validate credntials Invalid data back from axios client',
    );
  }

  // TODO: remove dependencies to file system making it optional ...
  return _writeToken(credentials, response);
};
