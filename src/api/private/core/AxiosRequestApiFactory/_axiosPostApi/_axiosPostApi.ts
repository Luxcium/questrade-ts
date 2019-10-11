import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../../../../typescript';
import { _coreApiFunction } from '../_coreApiFunction';

// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosPostApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => _coreApiFunction(_axios)(credentials)('POST');
