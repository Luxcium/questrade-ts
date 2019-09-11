import { ApiGet } from '../libraries/ApiGet';
import { Credentials } from '../libraries/Credentials';
import { apiGet } from './apiGet';
import { oAuthLogic } from './oAuthLogic';

export const questradeAPI = async (
  options: any,
  cb?: (error: any, credentials: Credentials | null) => Credentials | null
) => {
  const credentials: Credentials = (await oAuthLogic(
    options,
    cb
  )) as Credentials;
  return [apiGet(credentials), credentials] as [ApiGet, Credentials];
};
