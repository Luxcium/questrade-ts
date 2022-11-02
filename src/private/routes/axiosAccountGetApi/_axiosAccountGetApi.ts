import { Credentials } from '../../../typescript';
import { _coreApiFunction } from '../../core';
import { _endpointFormatAccount } from './endpointFormatAccount';

// # _axiosAccountApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
export const _axiosAccountGetApi =
  (credentials: Credentials) =>
  <R>(accountEndpoint: string) =>
    _coreApiFunction(credentials)('GET')(null)<R>(
      _endpointFormatAccount(credentials)(accountEndpoint)
    );
