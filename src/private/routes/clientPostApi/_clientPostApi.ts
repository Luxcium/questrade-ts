import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';

// # _clientApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) =\> Promise<R>
 */
export const _clientPostApi = (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => _coreApiFunction(credentials, proxy)('POST');
