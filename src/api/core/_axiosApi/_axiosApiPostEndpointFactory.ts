import { Credentials } from '../typescript';
import { _axiosApiPost } from './';

// # _axiosApiPostEndpointFactory !!!
/** PROVIDE: endpoint string with R return type, postData with D data type and credentials THEN GET: a Promise<R> */
export const _axiosApiPostEndpointFactory = <R>(endpoint: string) => <D = any>(
  postData: D
) => (credentials: Credentials) =>
  _axiosApiPost(credentials)<D>(postData)<R>(endpoint);
