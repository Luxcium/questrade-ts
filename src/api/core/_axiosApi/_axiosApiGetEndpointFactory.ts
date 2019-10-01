import { Credentials } from '../typescript';
import { _axiosGetApi } from './';

// # _axiosApiGetEndpointFactory !!!
/** PROVIDE: endpoint string with R return type and credentials THEN GET: a Promise<R> */
export const _axiosApiGetEndpointFactory = <R>(endpoint: string) => (
  credentials: Credentials
) => _axiosGetApi(credentials)<R>(endpoint);
