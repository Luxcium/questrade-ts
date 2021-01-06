import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IMarket,
  IMarkets,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (): Promise<IMarket[]> => {
  try {
    return (await _axiosGetApi(credentials, proxy)<IMarkets>('/markets')())
      .markets;
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
