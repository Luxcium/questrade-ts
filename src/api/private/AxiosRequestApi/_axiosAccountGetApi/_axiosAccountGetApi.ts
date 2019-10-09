import { AxiosStatic, default as axios } from 'axios';
import { _endpointFormatAccount } from '../../AxiosRequestApi';
import { Credentials } from '../../typescript';
import { _coreApiFunction } from '../_coreApiFunction';

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountGetApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => <R>(accountEndpoint: string) =>
  _coreApiFunction(_axios)(credentials)('GET')(null)<R>(
    _endpointFormatAccount(credentials)(accountEndpoint)
  );
