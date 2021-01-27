import { _endpointFormatAccount } from '..';
import { Credentials, ProxyFactory_ } from '../../../typescript';
import { _coreApiFunction } from '../../core/end-point-connector/_coreApiFunction';

// # _clientAccountGetApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
export const _clientAccountGetApi = (
  credentials: Credentials,
  proxy?: ProxyFactory_,
) => <R>(accountEndpoint: string) =>
  _coreApiFunction(credentials, proxy)('GET')(null)<R>(
    _endpointFormatAccount(credentials, proxy)(accountEndpoint),
    { noCaching: true },
  );
