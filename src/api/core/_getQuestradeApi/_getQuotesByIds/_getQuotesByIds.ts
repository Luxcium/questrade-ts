import { _axiosGetApi } from '../..';
import { Credentials, IQuotes } from '../../../typescript';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (credentials: Credentials) => async (
  ids: number[]
) =>
  (await _axiosGetApi(credentials)<IQuotes>(
    `/markets/quotes?ids=${ids.join(',')}`
  )()).quotes;
