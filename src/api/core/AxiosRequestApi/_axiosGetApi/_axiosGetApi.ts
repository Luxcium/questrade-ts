import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../typescript';
import { _coreApiFunction } from '../_coreApiFunction';
// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosGetApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => _coreApiFunction(_axios)(credentials)('get')(null);
