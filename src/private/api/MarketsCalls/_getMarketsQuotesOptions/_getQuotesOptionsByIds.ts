import { Credentials, IOptionsQuote, IProxy } from '../../../../typescript';
import { _getMarketsQuotesOptions } from './_getMarketsQuotesOptions';

export const _getQuotesOptionsByIds = (
  credentials: Credentials,
  proxy?: IProxy
) => async (optionIds: number[]): Promise<IOptionsQuote[]> => {
  try {
    return _getMarketsQuotesOptions(credentials, proxy)(
      optionIds,
      0,
      '',
      null,
      0,
      0
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};
