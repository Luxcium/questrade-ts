// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { ISymbol, ISymbols, Logger } from '../../../../typescript';
import { urlEncode } from '../../../../utils';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (stockId: number[]): Promise<ISymbol[]> => {
  try {
    return (
      await clientGetApi<ISymbols>(
        `/symbols?ids=${urlEncode(stockId.join())}`,
        {
          noCaching: true,
        },
      )()
    ).symbols;
  } catch (error) {
    void errorlog(error.message);

    return [];
  }
};
