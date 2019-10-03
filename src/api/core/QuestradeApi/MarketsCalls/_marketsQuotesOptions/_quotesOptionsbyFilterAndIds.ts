import { _getQuotesOptionsByIds, _getQuotesOptionsFilter } from '.';
import { Credentials } from '../../../typescript';
import { QuotesOptionsbyFilterAndIds } from './typescript';

export const _quotesOptionsbyFilterAndIds = (credentials: Credentials) => {
  const quotesOptionsFilter: any = _getQuotesOptionsFilter(credentials);
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
