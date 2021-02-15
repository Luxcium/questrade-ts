// Import { errorlog } from '../../../../resources/side-effects';
import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { ISymbols, Logger } from '../../../../typescript';
import { urlEncode } from '../../../../utils';

// + _getSymbolSearchCount
/** _getSymbolSearch */
export const _getSymbolSearchCount = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (prefix: string): Promise<number> => {
  try {
    const endpoint = `/symbols/search?prefix=${urlEncode(prefix)}`;
    const getSymbols = clientGetApi<ISymbols>(endpoint, { noCaching: true });
    const symbols = await getSymbols();

    return symbols.symbols.length;
  } catch (error) {
    void errorlog(error.message);

    return Number.NaN;
  }
};
