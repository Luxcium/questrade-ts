import { _axiosGetApi } from '../../..';
import { IQuotes } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (credentials: Credentials) => async (
  ids: number[]
) =>
  (await _axiosGetApi(credentials)<IQuotes>(
    `/markets/quotes?ids=${ids.join(',')}`
  )()).quotes;
