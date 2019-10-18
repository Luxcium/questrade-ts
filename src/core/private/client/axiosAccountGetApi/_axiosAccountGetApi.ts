import { Credentials } from '../../../typescript';
import { _coreApiFunction } from '../coreApiFunction_AXIOS';
import { _endpointFormatAccount } from '../endpointFormatAccount';

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountGetApi = (credentials: Credentials) => <R>(
  accountEndpoint: string
) =>
  _coreApiFunction(credentials)('GET')(null)<R>(
    _endpointFormatAccount(credentials)(accountEndpoint)
  );
