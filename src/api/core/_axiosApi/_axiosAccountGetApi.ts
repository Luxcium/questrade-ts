import { Credentials } from '../typescript';
import { _axiosGetApi } from './';

// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosAccountGetApi = (credentials: Credentials) => <R>(
  accountEndpoint: string
) => async () =>
  _axiosGetApi(credentials)<R>(
    endpointFormatAccount(credentials)(accountEndpoint)
  )();

// % endpointFormatAccount
/** PROVIDE: credentials and accountEndpoint string, THEN GET: a endpoint string */
const endpointFormatAccount = (credentials: Credentials) => (
  accountEndpoint: string
): string => `/accounts/${credentials.accountNumber}${accountEndpoint}`;
