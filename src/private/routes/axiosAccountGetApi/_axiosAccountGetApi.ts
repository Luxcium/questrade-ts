import { AxiosProxyHandler, Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core';
import { _endpointFormatAccount } from './endpointFormatAccount';

// # _axiosAccountApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
export const _axiosAccountGetApi = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => <R>(accountEndpoint: string) =>
  _coreApiFunction(credentials, proxy)('GET')(null)<R>(
    _endpointFormatAccount(credentials, proxy)(accountEndpoint)
  );
