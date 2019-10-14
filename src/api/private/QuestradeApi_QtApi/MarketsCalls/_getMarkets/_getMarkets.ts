import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IMarket, IMarkets } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_RequestFactory_AXIOS';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (): Promise<IMarket[]> =>
  (await _axiosGetApi(_axios)(credentials)<IMarkets>('/markets')()).markets;
