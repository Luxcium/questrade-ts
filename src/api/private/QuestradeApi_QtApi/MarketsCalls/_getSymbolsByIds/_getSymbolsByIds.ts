import { AxiosStatic, default as axios } from 'axios';
import { Credentials, ISymbol, ISymbols } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_RequestFactory_AXIOS';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (stockId: number[]): Promise<ISymbol[]> =>
  (await _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols?ids=${stockId.join()}`
  )()).symbols;
