import { _axiosGetApi } from '../..';
import { Credentials, ISymbols } from '../../../typescript';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (credentials: Credentials) => async (
  prefix: string
) => {
  return (await _axiosGetApi(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )()).symbols.length;
};
