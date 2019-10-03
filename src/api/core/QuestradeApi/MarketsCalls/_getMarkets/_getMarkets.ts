import { _axiosGetApi } from '../../..';
import { IMarkets } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (credentials: Credentials) => async () =>
  (await _axiosGetApi(credentials)<IMarkets>('/markets')()).markets;
