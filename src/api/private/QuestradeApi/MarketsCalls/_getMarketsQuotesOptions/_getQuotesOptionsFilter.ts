import { AxiosStatic, default as axios } from 'axios';
import { Credentials, OptionsFilters } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsFilter = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (filters: OptionsFilters) => {
  const {
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice,
  } = filters;
  return _getMarketsQuotesOptions(_axios)(credentials)(
    null,
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice
  );
};
