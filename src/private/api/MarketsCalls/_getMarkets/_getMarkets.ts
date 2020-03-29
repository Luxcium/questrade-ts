import { Credentials, IMarket, IMarkets } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (credentials: Credentials) => async (): Promise<
  IMarket[]
> => {
  try {
    return (await _axiosGetApi(credentials)<IMarkets>('/markets')()).markets;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
