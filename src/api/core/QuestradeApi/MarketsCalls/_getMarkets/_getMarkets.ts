import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { IMarket, IMarkets } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getMarkets
/** _getMarkets */
export const _getMarkets = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (): Promise<IMarket[]> =>
  (await _axiosGetApi(_axios)(credentials)<IMarkets>('/markets')()).markets;
