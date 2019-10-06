import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { Credentials } from '../../../typescript';
import { ISymbolSearchResult, ISymbolSearchResults } from './typescript';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult[]> => {
  const results = await _axiosGetApi(_axios)(credentials)<ISymbolSearchResults>(
    `/symbols/search?prefix=${prefix}&offset=${offset}`
  )();

  return results.symbols.map(result => {
    result.count = results.length;
    return result;
  });
};
