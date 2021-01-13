import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import { OptionsFilters } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsFilter = (
  clientPostApi: <D>(
    postData: D | null,
  ) => <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
) => async (filters: OptionsFilters) => {
  const {
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice,
  } = filters;
  return _getMarketsQuotesOptions(clientPostApi)(
    null,
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice,
  );
};
