import { writeFileSync } from 'fs';

import type { Credentials, IRefreshCreds } from '../../../typescript';
import type { ClientResponse } from '../types';

export const writeToken = (
  credentials: Credentials,
  response: ClientResponse<IRefreshCreds>,
): Credentials => {
  const { data: refreshCreds } = response;
  const { api_server } = refreshCreds;
  const { apiVersion } = credentials;
  const apiUrl = `${api_server}${apiVersion}`;
  const cred = {
    ...credentials,
    accessToken: refreshCreds.access_token,
    apiServer: refreshCreds.api_server,
    apiUrl,
    expiresIn: refreshCreds.expires_in,
    refreshToken: refreshCreds.refresh_token,
    tokenType: refreshCreds.token_type,
  };

  writeFileSync(cred.keyFile, cred.refreshToken, 'utf8');

  return cred;
};
