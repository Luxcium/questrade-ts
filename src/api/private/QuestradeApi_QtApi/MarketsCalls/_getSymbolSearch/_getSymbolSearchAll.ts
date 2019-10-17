import {
  Credentials,
  ISymbolSearchResult,
  ISymbolSearchResults,
} from '../../../../../typescript';
import { void0 } from '../../../../utils';
import { _axiosGetApi } from '../../../core/API_Request_AXIOS';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (credentials: Credentials) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult[]> => {
  const results = await _axiosGetApi(credentials)<ISymbolSearchResults>(
    `/symbols/search?prefix=${prefix.toUpperCase()}` // &offset=${offset}`
  )();
  // /symbols/search?prefix=BMO
  // /symbols/search?prefix=aapl offset &offset=0',
  // /symbols/search?prefix=aapl',
  void0(offset);

  return results.symbols.map(result => {
    result.count = results.symbols.length;
    return result;
  });
};
