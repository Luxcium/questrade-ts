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
  proxy?: AxiosProxyHandler
): Promise<Credentials> => {
  const { refreshToken, credentials } = _validateToken(options);
  const _config: AuthApiConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    method: 'GET',
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };

  void proxy; // TODO: Implement usage of proxy
  let axiosClient: AxiosStatic = axios;
  if (proxy) {
    axiosClient = proxy;
  }
  let response: AxiosIntrospectRes<IRefreshCreds>;
  response = (await axiosClient(_config)) as any;

  if (!response.data) {
    if (response) {
      console.log('________________________________________________');
      console.log(response.status, response.statusText);
      console.log(response.headers);
      console.log(response.request);
      console.log(response.status, response.statusText);
      console.log('________________________________________________');
      console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
    }
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }

  return _writeToken(credentials, response);
};
