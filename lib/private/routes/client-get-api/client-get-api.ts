import type { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/core-api-function';
import type { ApiCallQ_ } from '../../core/next-rate-limiter/queue';

// # _clientGetApi !!!
/**
 * yOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=\> Promise<R>
 */
export const _clientGetApi = (
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ProxyFactory_ | null,
) => _coreApiFunction(credentials, apiCallQ, proxy)('GET')(null);
