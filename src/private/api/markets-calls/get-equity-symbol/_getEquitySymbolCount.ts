// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbols, Logger } from '../../../../typescript';
import { urlEncode } from '../../../../utils';

// + _getEquitySymbolCount
/** _getEquitySymbol */
export const _getEquitySymbolCount = (
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
    void errorlog(error);

    return Number.NaN;
  }
};
