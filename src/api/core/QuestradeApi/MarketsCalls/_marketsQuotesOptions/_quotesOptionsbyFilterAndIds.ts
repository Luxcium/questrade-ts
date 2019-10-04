import { AxiosStatic, default as axios } from 'axios';
import { _getQuotesOptionsByIds, _getQuotesOptionsFilter } from '.';
import { Credentials } from '../../../typescript';
import { QuotesOptionsbyFilterAndIds } from './typescript';

export const _quotesOptionsbyFilterAndIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => {
  const quotesOptionsFilter: any = _getQuotesOptionsFilter(_axios)(credentials);
  quotesOptionsFilter.byIds = _getQuotesOptionsByIds(_axios)(credentials);
  return quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
};
