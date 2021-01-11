import {
  ClientProxyHandler,
  Credentials,
  IQuote,
  IQuotes,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
) => async (ids: number[]): Promise<IQuote[]> => {
  try {
    return (
      await _clientGetApi(
        credentials,
        proxy,
      )<IQuotes>(`/markets/quotes?ids=${ids.join(',')}`)()
    ).quotes;
  } catch (error) {
    void errorlog(error);

    return [];
  }
};
