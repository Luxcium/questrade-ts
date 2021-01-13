import { ClientStaticHandlerFactory, Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core/_coreApiFunction';

// # _clientApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
export const _clientPostApi = (
  credentials: Credentials,
  proxy?: ClientStaticHandlerFactory,
) => _coreApiFunction(credentials, proxy)('POST');
