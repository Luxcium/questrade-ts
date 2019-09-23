import { Credentials, RawApiGet } from '../libraries';
import { _axiosApi } from './_axiosApi';

export const _rawApiGet: RawApiGet = (crendentials: Credentials) => {
  return async <T>(endpoint: string) => {
    return _axiosApi(crendentials)('GET', null)<T>(endpoint);
  };
};
