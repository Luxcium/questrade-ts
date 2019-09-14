import { Credentials, RawApiGet } from '../../libraries';
import { axiosApi } from './axiosApi';

export const rawApiGet: RawApiGet = (crendentials: Credentials) => {
  return <T>(endpoint: string) =>
    axiosApi(crendentials)('GET', null)<T>(endpoint);
};
