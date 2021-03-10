// import { errorlog } from '../../../../resources/side-effects';
import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type { IStockSymbol, IStockSymbols, Logger } from '../../../../typescript';
import { urlEncode } from '../../../../utils';

// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
export const _getSymbolsByIds = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (stockId: number[]): Promise<IStockSymbol[]> => {
  try {
    return (
      await clientGetApi<IStockSymbols>(
        `/symbols?ids=${urlEncode(stockId.join())}`,
        {
          noCaching: true,
        },
      )()
    ).symbols;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
