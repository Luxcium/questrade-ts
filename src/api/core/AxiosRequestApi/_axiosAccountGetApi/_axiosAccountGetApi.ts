import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi, _endpointFormatAccount } from '..';
import { Credentials } from '../../typescript';

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountGetApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => <R>(accountEndpoint: string) => async () =>
  _axiosGetApi(_axios)(credentials)<R>(
    _endpointFormatAccount(credentials)(accountEndpoint)
  )();
