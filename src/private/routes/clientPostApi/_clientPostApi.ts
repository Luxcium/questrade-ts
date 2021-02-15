import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';
import { ApiCallQ_ } from '../../core/next-rate-limiter/queue';

// # _clientApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) =\> Promise<R>
 */
export const _clientPostApi = (
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ProxyFactory_ | null,
) => _coreApiFunction(credentials, apiCallQ, proxy)('POST');
