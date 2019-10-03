import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (credentials: Credentials) => async (
  prefix: string,
  offset: number = 0
) => {
  /* return */
  const { symbols } = await _axiosGetApi(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )(); // .symbols[offset];
  const count = symbols.length;
  const result = symbols[offset];
  result.count = count;
  return result;
};
