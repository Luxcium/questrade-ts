import { Credentials, IOptionsQuote } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (credentials: Credentials) => async (
  optionIds: number[]
): Promise<IOptionsQuote[]> => {
  try {
    return _getMarketsQuotesOptions(credentials)(optionIds, 0, '', null, 0, 0);
  } catch (error) {
    console.error(error);
    return [];
  }
};
