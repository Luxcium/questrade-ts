// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbolSearchResult, Logger } from '../../../../typescript';
import { _getSymbolSearchAll } from './_getSymbolSearchAll';

// + _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (prefix: string, offset = 0): Promise<ISymbolSearchResult[]> => {
  try {
    //
    const symbols = await _getSymbolSearchAll(clientGetApi)(prefix, offset);
    const count = symbols.length;
    let result: ISymbolSearchResult | null = null;

    if (symbols[0]) {
      [result] = symbols;
      result.count = count || 0;
      result.all = symbols;

      return [result];
    }

    return [];
    //
  } catch (error) {
    //
    void errorlog(error);

    return [];

    //
  }
};
