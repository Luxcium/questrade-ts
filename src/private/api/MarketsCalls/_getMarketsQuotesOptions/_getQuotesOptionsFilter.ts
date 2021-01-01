import { Credentials, IProxy, OptionsFilters } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsFilter = (
  credentials: Credentials,
  proxy?: IProxy
) => async (filters: OptionsFilters) => {
  const {
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice,
  } = filters;
  return _getMarketsQuotesOptions(credentials, proxy)(
    null,
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice
  );
};
