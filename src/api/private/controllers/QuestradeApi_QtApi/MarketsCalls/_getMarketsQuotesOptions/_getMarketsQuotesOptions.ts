import {
  Credentials,
  FiltersArray,
  IOptionsQuotes,
  OptionsIdArray,
  OptionsPostData,
} from '../../../../../../typescript';
import { _axiosPostApi } from '../../../../core';

export const _getMarketsQuotesOptions = (credentials: Credentials) => async (
  optionIds: number[] | null,
  underlyingId?: number,
  expiryDate?: string,
  optionType: string | undefined | null = void 0,
  minstrikePrice: number | undefined | null = 0,
  maxstrikePrice: number | undefined | null = 0
): Promise<IOptionsQuotes> => {
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

  return _axiosPostApi(credentials)<OptionsPostData>(postData)<IOptionsQuotes>(
    '/markets/quotes/options'
  )();
};
