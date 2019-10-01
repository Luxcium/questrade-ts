import { _axiosApiPost } from '../..';
import { Credentials, IOptionsQuotes } from '../../typescript';

export const _getQuotesOptionsByIds = (credentials: Credentials) => async (
  optionIds: number[]
) =>
  _getMarketsQuotesOptions(credentials)(optionIds, void 0, void 0, null, 0, 0);

export const _getQuotesOptionsFilter = (credentials: Credentials) => async (
  filters: _Filters
) => {
  const {
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice,
  } = filters;
  return _getMarketsQuotesOptions(credentials)(
    null,
    underlyingId,
    expiryDate,
    optionType,
    minstrikePrice,
    maxstrikePrice
  );
};

export const _getMarketsQuotesOptions = (credentials: Credentials) => async (
  optionIds: void | null | undefined | number[] = [],
  underlyingId?: number,
  expiryDate?: string,
  optionType: string | undefined | null = void 0,
  minstrikePrice: number | undefined | null = 0,
  maxstrikePrice: number | undefined | null = 0
): Promise<IOptionsQuotes> => {
  try {
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

    return _axiosApiPost(credentials)<OptionsPostData>(postData)<
      IOptionsQuotes
    >('/markets/quotes/options');
  } catch (error) {
    console.error('/markets/quotes/options', error.message);
    throw error;
  }
};

export type OptionsPostData = OptionsIdArray | FiltersArray;
export interface OptionsIdArray {
  optionIds: number[];
}

export interface FiltersArray {
  filters: _Filters[];
}

// tslint:disable-next-line: class-name
export interface _Filters {
  underlyingId?: number;
  expiryDate?: string;
  optionType?: string | undefined | null;
  minstrikePrice?: number | undefined | null;
  maxstrikePrice?: number | undefined | null;
}
