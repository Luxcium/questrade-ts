import { Credentials } from '../../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (credentials: Credentials) => async (
  optionIds: number[]
) =>
  _getMarketsQuotesOptions(credentials)(optionIds, void 0, void 0, null, 0, 0);
