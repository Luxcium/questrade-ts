import { _axiosGetApi } from '../../..';
import { ISymbols } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (credentials: Credentials) => async (
  prefix: string
) => {
  return (await _axiosGetApi()(credentials)<ISymbols>(
    `/symbols/search?prefix=${prefix}`
  )()).symbols.length;
};
