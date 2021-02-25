import { writeFileSync } from 'fs';

import type { Credentials, IRefreshCreds } from '../../../typescript';
import type { ClientResponse } from '../types';

export const writeToken = (
  credentials: Credentials,
  response: ClientResponse<IRefreshCreds>,
): Credentials => {
  const { data: refreshCreds } = response;

  // const apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;
  credentials.accessToken = refreshCreds.access_token;
  credentials.apiServer = refreshCreds.api_server;
  credentials.expiresIn = refreshCreds.expires_in;
  credentials.refreshToken = refreshCreds.refresh_token;
  credentials.tokenType = refreshCreds.token_type;
  credentials.apiUrl = `${credentials.apiServer}${credentials.apiVersion}`;

  writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');

  return credentials;
};
