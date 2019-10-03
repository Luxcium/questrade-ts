import { _axiosGetApi } from '../../..';
import { Credentials, Time } from '../../../../typescript';

// + _getServerTime
/** _getTime */
export const _getServerTime = (credentials: Credentials) => async () =>
  new Date((await _axiosGetApi(credentials)<Time>('/time')()).time);
