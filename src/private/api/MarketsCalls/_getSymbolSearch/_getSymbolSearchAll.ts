// import { errorlog } from '../../../../resources/side-effects';
import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import {
  ISymbolSearchResult,
  ISymbolSearchResults,
  Logger,
} from '../../../../typescript';
import { void0 } from '../../../../utils';

// + _getSymbolSearchAll
/** _getSymbolSearch */
export const _getSymbolSearchAll = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (
  prefix: string,
  offset: number = 0,
): Promise<ISymbolSearchResult[]> => {
  try {
    const results = await clientGetApi<ISymbolSearchResults>(
      `/symbols/search?prefix=${prefix.toUpperCase()}&offset=${offset}`,
      { noCaching: true },
    )();
    if (results && results.symbols) {
      return results.symbols.map(result => {
        result.count = results.symbols.length || 0;
        return result;
      });
    }
    return results.symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
void0(void0);
