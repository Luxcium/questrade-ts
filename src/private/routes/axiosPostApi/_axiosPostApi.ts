import { Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core';

// # _axiosApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
export const _axiosPostApi = (credentials: Credentials) =>
  _coreApiFunction(credentials)('POST');
