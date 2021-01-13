import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { IQuote, IQuotes, Logger } from '../../../../typescript';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  clientGetApi: <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (ids: number[]): Promise<IQuote[]> => {
  try {
    return (
      await clientGetApi<IQuotes>(`/markets/quotes?ids=${ids.join(',')}`, {
        noCaching: true,
      })()
    ).quotes;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
