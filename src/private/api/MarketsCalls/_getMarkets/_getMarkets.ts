import { Credentials, IMarket, IMarkets, IProxy } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (
  credentials: Credentials,
  proxy?: IProxy
) => async (): Promise<IMarket[]> => {
  try {
    return (await _axiosGetApi(credentials, proxy)<IMarkets>('/markets')())
      .markets;
  } catch (error) {
    console.error(error);
    return [];
  }
};
