import { _axiosApiPost } from '..';
import { Credentials, IOptionsQuotes } from './typescript';
export const postTesting = {
  filters: [
    {
      underlyingId: 8049,
      expiryDate: '2019-10-04T00:00:00.000000-04:00',
    },
  ],
};
export const _marketsQuotesOptions = (credentials: Credentials) => async (
  optionIds: void | null | undefined | number[] = [],
  underlyingId?: number,
  expiryDate?: string,
  optionType: string | undefined | null = void 0,
  minstrikePrice: number | undefined | null = 0,
  maxstrikePrice: number | undefined | null = 0
): Promise<IOptionsQuotes> => {
  try {
    const postData: OptionsPostData4 | OptionsPostData3 =
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
export type OptionsPostData2 = OptionsPostData4 | OptionsPostData3;
export type OptionsPostData3 = {
  filters: Filters[];
};
export type OptionsPostData4 = { optionIds: number[] };

export interface OptionsIdArray {
  optionIds: number[];
}

export interface FiltersArray {
  filters: Filters[];
}

export interface Filters {
  underlyingId: number;
  expiryDate: string;
  optionType: string;
  minstrikePrice: number;
  maxstrikePrice: number;
}

/*

 Property	Type	Description
quotes
OTHER
List of Level1OptionData records.

Level1OptionData
OTHER



underlying
string
Underlying name


underlyingId
number
Underlying ID


symbol
string
Symbol name


symbolId
number
Symbol ID


bidPrice
number
Bid price


bidSize
number
Bid size


askPrice
number
Ask price


askSize
number
Ask size


lastTradePriceTrHrs
number
Last trade price trade hours


lastTradePrice
number
Last trade price


lastTradeSize
number
Last trade size


lastTradeTick
Enumeration
Last trade tick


lastTradeTime
Date
Last trade time


volume
number
Volume


openPrice
number
Open price


highPrice
number
High price


lowPrice
number
Low price


volatility
number
Volatility


delta
number
Delta


gamma
number
Gamma


theta
number
Theta


vega
number
Vega


rho
number
Rho


openInterest
number
Open interest


delay
number
How much is data delayed


isHalted
boolean
Whether or not the symbol was halted


VWAP
number
Volume Weighted Average Price


*/
