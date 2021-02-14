import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';
import { ApiCallQ_ } from '../../core/next-rate-limiter/queue';
import { _endpointFormatAccount } from '..';

// # _clientAccountGetApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) =\> Promise<R>
 */
export const _clientAccountGetApi = (
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy?: ProxyFactory_,
) => <R>(accountEndpoint: string) =>
  _coreApiFunction(credentials, apiCallQ, proxy)('GET')(null)<R>(
    _endpointFormatAccount(credentials, proxy)(accountEndpoint),
    { noCaching: true },
  );
