import { _axiosApi } from '../../core/api';
import { Credentials, RawApiGet } from '../../core/libraries';

export const _rawApiGet: RawApiGet = (crendentials: Credentials) => {
  return async <T>(endpoint: string) => {
    return _axiosApi(crendentials)('GET', null)<T>(endpoint);
  };
};
