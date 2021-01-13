import { ClientStaticHandlerFactory, Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core/_coreApiFunction';

// # _clientGetApi !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 */
export const _clientGetApi = (
  credentials: Credentials,
  proxy?: ClientStaticHandlerFactory,
) => _coreApiFunction(credentials, proxy)('GET')(null);
