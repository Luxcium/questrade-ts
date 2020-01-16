import { default as axios } from 'axios';
import {
  AxiosIntrospectRes,
  Credentials,
  IRefreshCreds,
  QuestradeAPIOptions,
} from '../../../typescript';
import { _validateToken } from './_validateToken';
import { _writeToken } from './_writeToken';
export const _oAuthAxiosCredentials = async (
  options: QuestradeAPIOptions
): Promise<Credentials> => {
  const { refreshToken, credentials } = _validateToken(options);
  const axiosConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };
  const response = (await axios(axiosConfig)) as AxiosIntrospectRes<
    IRefreshCreds
  >;

  console.log('________________________________________________');
  console.log(response.status, response.statusText);
  console.log(response.data);
  console.log(response.headers);
  console.log(response.status, response.statusText);
  console.log('________________________________________________');
  console.log('++++++++++++++++++++++++++++++++++++++++++++++++');

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }

  return _writeToken(credentials, response);
};
