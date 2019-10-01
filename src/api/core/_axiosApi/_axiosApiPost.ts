import { Credentials } from '../typescript';
import { _axiosApi } from './';

// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosApiPost = (credentials: Credentials) => <D = any>(
  postData: D
) => _axiosApi(credentials)('POST')<D>(postData);
