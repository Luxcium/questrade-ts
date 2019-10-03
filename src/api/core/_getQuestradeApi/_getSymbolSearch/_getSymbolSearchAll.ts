import { _axiosGetApi } from '../..';
import { Credentials, ISymbols } from '../../../typescript';

// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (credentials: Credentials) => async (
  prefix: string,
  offset: number = 0
) => {
  return (await _axiosGetApi(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}&offset=${offset}`
  )()).symbols;
};
