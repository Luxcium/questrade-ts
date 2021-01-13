import { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import {
  FiltersArray,
  IOptionsQuote,
  IOptionsQuotes,
  OptionsIdArray,
  OptionsPostData,
} from '../../../../typescript';

export const _getMarketsQuotesOptions = (
  clientPostApi: <D>(
    postData: D | null,
  ) => <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
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
              expiryDate,
              maxstrikePrice: maxstrikePrice || 0,
              minstrikePrice: minstrikePrice || 0,
              optionType: optionType || void 0,
              underlyingId,
            },
          ],
        };

  return (
    await clientPostApi<OptionsPostData>(postData)<IOptionsQuotes>(
      '/markets/quotes/options',
      { noCaching: true },
    )()
  ).quotes;
};
