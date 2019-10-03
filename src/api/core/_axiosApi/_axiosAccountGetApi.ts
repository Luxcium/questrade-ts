import { Credentials } from '../../typescript';
import { _axiosGetApi, _endpointFormatAccount } from './';

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountGetApi = (credentials: Credentials) => <R>(
  accountEndpoint: string
) => async () =>
  _axiosGetApi(credentials)<R>(
    _endpointFormatAccount(credentials)(accountEndpoint)
  )();
