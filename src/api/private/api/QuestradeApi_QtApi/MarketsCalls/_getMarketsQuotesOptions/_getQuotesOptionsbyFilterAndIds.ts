import {
  Credentials,
  QuotesOptionsbyFilterAndIds,
} from '../../../../../../typescript';
import {
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
} from '../../MarketsCalls';

export const _getQuotesOptionsbyFilterAndIds = (
  credentials: Credentials
): QuotesOptionsbyFilterAndIds => {
  const quotesOptionsFilter: QuotesOptionsbyFilterAndIds = _getQuotesOptionsFilter(
    credentials
  );
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
