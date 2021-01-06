import { ClientProxyHandler, Credentials, ITime } from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getServerTime
/** _getTime */
export const _getServerTime = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (): Promise<Date> =>
  new Date((await _clientGetApi(credentials, proxy)<ITime>('/time')()).time);
