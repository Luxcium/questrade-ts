import { Credentials, RawApiPost } from '../libraries';
import { axiosApi } from './axiosApi';

/** RawApiPost need to get credentials to be ready to be used */
export const rawApiPost: RawApiPost = (crendentials: Credentials) => {
  return <T, P = any>(endpoint: string, postData: P) =>
    axiosApi(crendentials)<P>('POST', postData)<T>(endpoint);
};
