import { Credentials } from '../libraries';
import { _apiGet, _apiGetAccount } from './apiGet';
import { oAuth } from './oAuth/oAuth';

export const api = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await oAuth(options, cb)) as Credentials;
  const { accountNumber } = credentials;
  return {
    get: (endpoint: string) => _apiGet(credentials)(endpoint),
    getAccount: (endpoint: string) =>
      _apiGetAccount(credentials)(`/account/${accountNumber}${endpoint}`),
    credentials,
    accountNumber,
  };
};
