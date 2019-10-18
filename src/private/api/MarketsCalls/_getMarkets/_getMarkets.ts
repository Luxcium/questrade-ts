import { Credentials, IMarket, IMarkets } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (credentials: Credentials) => async (): Promise<
  IMarket[]
> => (await _axiosGetApi(credentials)<IMarkets>('/markets')()).markets;
