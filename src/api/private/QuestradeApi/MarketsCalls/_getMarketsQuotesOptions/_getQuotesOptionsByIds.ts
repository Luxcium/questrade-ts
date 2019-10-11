import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (optionIds: number[]) =>
  _getMarketsQuotesOptions(_axios)(credentials)(
    optionIds,
    void 0,
    void 0,
    null,
    0,
    0
  );
