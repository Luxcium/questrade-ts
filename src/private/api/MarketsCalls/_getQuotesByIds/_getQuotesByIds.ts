import { Credentials, IProxy, IQuote, IQuotes } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (
  credentials: Credentials,
  proxy?: IProxy
) => async (ids: number[]): Promise<IQuote[]> => {
  try {
    return (
      await _axiosGetApi(
        credentials,
        proxy
      )<IQuotes>(`/markets/quotes?ids=${ids.join(',')}`)()
    ).quotes;
  } catch (error) {
    console.error(error);
    return [];
  }
};
