import { AxiosResponse, AxiosStatic, default as axios } from 'axios';
import { validateToken, writeToken } from '../_credentialsFactory';
import { Credentials } from '../_credentialsFactory/typescript';

export const _oAuthCredentials = (_axios: AxiosStatic = axios) => async (
  token: string
): Promise<Credentials> => {
  const { refreshToken, credentials } = validateToken(token);
  const axiosConfig = {
    url: `${credentials.authUrl}/oauth2/token`,
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
  };
  const response: AxiosResponse<any> = await _axios(axiosConfig);

  if (!response.data) {
    throw new Error(
      '!! validate credntials Invalid data back from axios client'
    );
  }
  return writeToken(credentials, response);
};
