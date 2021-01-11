import { IQuote, IQuotes, Logger } from '../../../../typescript';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  clientGetApi: <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (ids: number[]): Promise<IQuote[]> => {
  try {
    return (
      await clientGetApi<IQuotes>(`/markets/quotes?ids=${ids.join(',')}`)()
    ).quotes;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
