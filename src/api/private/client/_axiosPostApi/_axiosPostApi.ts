import { Credentials } from '../../../../typescript';
import { _coreApiFunction } from '../_coreApiFunction_AXIOS';

// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosPostApi = (credentials: Credentials) =>
  _coreApiFunction(credentials)('POST');
