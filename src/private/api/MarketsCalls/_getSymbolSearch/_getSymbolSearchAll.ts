// import { errorlog } from '../../../../resources/side-effects';
import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import {
  ISymbolSearchResult,
  ISymbolSearchResults,
  Logger,
} from '../../../../typescript';
import { urlEncode } from '../../../../utils';

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
    const _prefix = urlEncode(`${prefix.toUpperCase()}`);
    const _offset = urlEncode(`${offset}`);
    const _endpoint = `/symbols/search?prefix=${_prefix}&offset=${_offset}`;
    const _results = await clientGetApi<ISymbolSearchResults>(_endpoint, {
      noCaching: true,
    })();

    if (_results && _results.symbols) {
      return _results.symbols.map(result => {
        result.count = _results.symbols.length || 0;
        return result;
      });
    }
    return _results.symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
