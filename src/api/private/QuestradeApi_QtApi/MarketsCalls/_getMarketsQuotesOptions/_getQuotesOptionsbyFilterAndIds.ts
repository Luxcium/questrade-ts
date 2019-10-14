import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  QuotesOptionsbyFilterAndIds,
} from '../../../../../typescript';
import {
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
} from '../../MarketsCalls';

export const _getQuotesOptionsbyFilterAndIds = (
  _axios: AxiosStatic = axios
) => (credentials: Credentials): QuotesOptionsbyFilterAndIds => {
  const quotesOptionsFilter: QuotesOptionsbyFilterAndIds = _getQuotesOptionsFilter(
    _axios
  )(credentials);
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(_axios)(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
