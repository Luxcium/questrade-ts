import {
  ClientProxyHandler,
  Credentials,
  FiltersArray,
  IOptionsQuote,
  IOptionsQuotes,
  OptionsIdArray,
  OptionsPostData,
} from '../../../../typescript';
import { _clientPostApi } from '../../../routes';

export const _getMarketsQuotesOptions = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (
  optionIds: number[] | null,
  underlyingId: number,
  expiryDate: string,
  optionType: string | null = null,
  minstrikePrice: number | null = 0,
  maxstrikePrice: number | null = 0,
): Promise<IOptionsQuote[]> => {
  const postData: OptionsIdArray | FiltersArray =
    !!optionIds && optionIds.length > 0
      ? {
          optionIds,
        }
      : {
          filters: [
            {
              underlyingId,
              expiryDate,
              optionType: optionType || void 0,
              minstrikePrice: minstrikePrice || 0,
              maxstrikePrice: maxstrikePrice || 0,
            },
          ],
        };

  return (
    await _clientPostApi(
      credentials,
      proxy,
    )<OptionsPostData>(postData)<IOptionsQuotes>('/markets/quotes/options')()
  ).quotes;
};
