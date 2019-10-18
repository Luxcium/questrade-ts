import { Credentials, IQuote, IQuotes } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (credentials: Credentials) => async (
  ids: number[]
): Promise<IQuote[]> =>
  (await _axiosGetApi(credentials)<IQuotes>(
    `/markets/quotes?ids=${ids.join(',')}`
  )()).quotes;
