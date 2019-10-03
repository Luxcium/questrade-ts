import { _axiosApi } from '..';
import { Credentials } from '../../typescript';

// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
export const _axiosGetApi = (credentials: Credentials) => <R>(
  endpoint: string
) => async () => _axiosApi(credentials)()()<R>(endpoint);
