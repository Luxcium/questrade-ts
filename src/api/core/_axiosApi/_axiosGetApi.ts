import { Credentials } from '../../typescript';
import { _axiosApi } from './';

// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosGetApi = (credentials: Credentials) => <R>(
  endpoint: string
) => async () => _axiosApi(credentials)()()<R>(endpoint);
