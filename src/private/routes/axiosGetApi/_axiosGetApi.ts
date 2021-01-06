import { ClientProxyHandler, Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core';

// # _axiosApiGet !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 */
export const _axiosGetApi = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => _coreApiFunction(credentials, proxy)('GET')(null);
