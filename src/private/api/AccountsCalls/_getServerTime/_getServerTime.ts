import { Credentials, IProxy, ITime } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getServerTime
/** _getTime */
export const _getServerTime = (
  credentials: Credentials,
  proxy?: IProxy
) => async (): Promise<Date> =>
  new Date((await _axiosGetApi(credentials, proxy)<ITime>('/time')()).time);
