import { AxiosStatic, default as axios } from 'axios';
import { _axiosApi } from '..';
import { Credentials } from '../../typescript';

// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosApiPost = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => <D = any>(postData: D) =>
  _axiosApi(_axios)(credentials)<D>(postData, 'POST');
