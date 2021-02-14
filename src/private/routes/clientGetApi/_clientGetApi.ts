import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';

// # _clientGetApi !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=\> Promise<R>
 */
export const _clientGetApi = (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => _coreApiFunction(credentials, proxy)('GET')(null);
