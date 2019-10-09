import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { ISymbol, ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (symbolId: number[]): Promise<ISymbol[]> =>
  (await _axiosGetApi(_axios)(credentials)<ISymbols>(
    `/symbols?ids=${symbolId.join()}`
  )()).symbols;
