import { Credentials, RawApiPost } from '../libraries';
import { _axiosApi } from './_axiosApi';

/** RawApiPost need to get credentials to be ready to be used */
export const _rawApiPost: RawApiPost = (crendentials: Credentials) => {
  return <T, P = any>(endpoint: string, postData: P) =>
    _axiosApi(crendentials)<P>('POST', postData)<T>(endpoint);
};
