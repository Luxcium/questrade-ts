import { _axiosGetApi } from '../..';
import { Credentials, IMarkets } from '../../../typescript';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (credentials: Credentials) => async () =>
  (await _axiosGetApi(credentials)<IMarkets>('/markets')()).markets;
