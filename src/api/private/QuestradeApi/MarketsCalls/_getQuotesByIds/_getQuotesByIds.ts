import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IQuote, IQuotes } from '../../../../typescript';
import { _axiosGetApi } from '../../../core';

// + _getQuotesByID
/** _getQuotesFromSymbolID */
export const _getQuotesByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (ids: number[]): Promise<IQuote[]> =>
  (await _axiosGetApi(_axios)(credentials)<IQuotes>(
    `/markets/quotes?ids=${ids.join(',')}`
  )()).quotes;
