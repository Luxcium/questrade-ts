import { AxiosStatic, default as axios } from 'axios';
import { _getQuotesOptionsByIds, _getQuotesOptionsFilter } from '..';
import {
  Credentials,
  QuotesOptionsbyFilterAndIds,
} from '../../../../../typescript';

export const _getQuotesOptionsbyFilterAndIds = (
  _axios: AxiosStatic = axios
) => (credentials: Credentials): QuotesOptionsbyFilterAndIds => {
  const quotesOptionsFilter: QuotesOptionsbyFilterAndIds = _getQuotesOptionsFilter(
    _axios
  )(credentials);
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(_axios)(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
