import { default as axios } from 'axios';
import { AxiosIntrospectRes, Credentials } from '../../../../../typescript';
import { _validateToken } from './_validateToken';
import { IRefreshCreds, _writeToken } from './_writeToken';
export const _oAuthAxiosCredentials = async (
  token: string
): Promise<Credentials> => {
  const { refreshToken, credentials } = _validateToken(token);
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

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }

  return _writeToken(credentials, response);
};
