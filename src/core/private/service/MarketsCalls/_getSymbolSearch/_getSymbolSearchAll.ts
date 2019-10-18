import { void0 } from '../../../../../utils';
import {
  Credentials,
  ISymbolSearchResult,
  ISymbolSearchResults,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../client';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (credentials: Credentials) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult[]> => {
  const results = await _axiosGetApi(credentials)<ISymbolSearchResults>(
    `/symbols/search?prefix=${prefix.toUpperCase()}&offset=${offset}`
  )();
  // https://api01.iq.questrade.com/v1

  // /symbols/search?prefix=AAPL
  // /symbols/search?prefix=BMO
  // /symbols/search?prefix=aapl offset &offset=0',
  // /symbols/search?prefix=aapl',
  void0(offset);

  return results.symbols.map(result => {
    result.count = results.symbols.length;
    return result;
  });
};
