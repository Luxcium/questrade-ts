import { Credentials, ITime } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getServerTime
/** _getTime */
export const _getServerTime =
  (credentials: Credentials) => async (): Promise<Date> =>
    new Date((await _axiosGetApi(credentials)<ITime>('/time')()).time);
