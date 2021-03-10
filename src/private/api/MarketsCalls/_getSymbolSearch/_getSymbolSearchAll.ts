// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type {
  IEquitySymbol,
  IEquitySymbolSearchResults,
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
) => async (prefix: string, offset = 0): Promise<IEquitySymbol[]> => {
  try {
    const _prefix = urlEncode(`${prefix.toUpperCase()}`);
    const _offset = urlEncode(`${offset}`);
    const _endpoint = `/symbols/search?prefix=${_prefix}&offset=${_offset}`;
    const _results = await clientGetApi<IEquitySymbolSearchResults>(_endpoint, {
      noCaching: true,
    })();

    if (_results && _results.symbols) {
      return _results.symbols.map(result => {
        const len = _results.symbols.length;

        result.count = len > 0 ? len : 0;

        return result;
      });
    }

    return _results.symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
