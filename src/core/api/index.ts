import { Credentials } from '../libraries';
import { apiGet } from './apiGet/apiGet';
import { oAuth } from './oAuth/oAuth';

export const questradeAPI = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await oAuth(options, cb)) as Credentials;
  return {
    get: apiGet(credentials),
    credentials,
  };
};
