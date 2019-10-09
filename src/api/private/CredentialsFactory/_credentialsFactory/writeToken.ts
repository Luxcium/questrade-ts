import { AxiosResponse } from 'axios';
import { writeFileSync } from 'fs';
import { Credentials } from '../../../typescript';

export const writeToken = (
  credentials: Credentials,
  response: AxiosResponse<any>
): Credentials => {
  const { data: refreshCreds } = response;
  credentials.accessToken = refreshCreds.access_token;
  credentials.apiServer = refreshCreds.api_server;
  credentials.expiresIn = refreshCreds.expires_in;
  credentials.refreshToken = refreshCreds.refresh_token;
  credentials.tokenType = refreshCreds.token_type;
  credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
  writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');

  return credentials;
};
