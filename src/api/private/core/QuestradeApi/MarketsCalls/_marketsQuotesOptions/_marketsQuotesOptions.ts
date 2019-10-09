import { AxiosStatic, default as axios } from 'axios';
import { _axiosApiPost } from '../../../..';
import { IOptionsQuotes } from '../../../../../typings';
import { Credentials } from '../../../../typescript';
import {
  FiltersArray,
  OptionsIdArray,
  OptionsPostData,
  _Filters,
} from './typescript';

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

export const _getQuotesOptionsFilter = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (filters: _Filters) => {
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

export const _getMarketsQuotesOptions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
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

    return _axiosApiPost(_axios)(credentials)<OptionsPostData>(postData)<
      IOptionsQuotes
    >('/markets/quotes/options')();
  } catch (error) {
    console.error('/markets/quotes/options', error.message);
    throw error;
  }
};
