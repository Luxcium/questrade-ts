import { Credentials } from '../libraries';
import { _apiAccountGet, _apiGet } from './apiGet';
import { oAuth } from './oAuth/oAuth';

export const api = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await oAuth(options, cb)) as Credentials;
  return {
    get: <T>(endpoint: string) => _apiGet(credentials)<T>(endpoint),
    accountGet: <T>(endpoint: string) =>
      _apiAccountGet(credentials)<T>(
        `/account/${credentials.accountNumber}${endpoint}`
      ),
    credentials,
    accountNumber: credentials.accountNumber,
  };
};
