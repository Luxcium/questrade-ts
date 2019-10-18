import { Credentials } from '../../../typescript';
import { _coreApiFunction } from '../_coreApiFunction_AXIOS';

// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosGetApi = (credentials: Credentials) =>
  _coreApiFunction(credentials)('GET')(null);
