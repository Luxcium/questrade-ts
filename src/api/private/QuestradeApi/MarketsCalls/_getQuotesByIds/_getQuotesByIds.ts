import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { IQuote, IQuotes } from '../../../../typings';
import { Credentials } from '../../../typescript';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (ids: number[]): Promise<IQuote[]> =>
  (await _axiosGetApi(_axios)(credentials)<IQuotes>(
    `/markets/quotes?ids=${ids.join(',')}`
  )()).quotes;
