import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IQuote,
  IQuotes,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

// const { errorlog } = sideEffects;

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
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
