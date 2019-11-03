import {
  Credentials,
  ISymbolSearchResult,
  ISymbolSearchResults,
} from '../../../../typescript';
import { void0 } from '../../../../utils';
import { _axiosGetApi } from '../../../routes';
// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (credentials: Credentials) => async (
  prefix: string,
  offset: number = 0
): Promise<ISymbolSearchResult[]> => {
  try {
    const results = await _axiosGetApi(credentials)<ISymbolSearchResults>(
      `/symbols/search?prefix=${prefix.toUpperCase()}&offset=${offset}`
    )();
    // https://api01.iq.questrade.com/v1

    // /symbols/search?prefix=AAPL
    // /symbols/search?prefix=BMO
    // /symbols/search?prefix=aapl offset &offset=0',
    // /symbols/search?prefix=aapl',
    if (results && results.symbols) {
      return results.symbols.map(result => {
        result.count = results.symbols.length;
        return result;
      });
    }
    return results.symbols;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
void0(void0);
