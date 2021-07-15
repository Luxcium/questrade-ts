import { ICreds, IRefreshCreds } from '../typescript';

export function convertToCreds(refreshCreds: IRefreshCreds): ICreds {
  return {
    accessToken: refreshCreds.access_token,
    apiServer: refreshCreds.api_server,
    expiresIn: refreshCreds.expires_in,
    refreshToken: refreshCreds.refresh_token,
    tokenType: refreshCreds.token_type,
  };
}
