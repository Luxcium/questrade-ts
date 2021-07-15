export interface IOptionsQuotes {
  readonly quotes: IOptionsQuote[];
}
export interface IOptionsQuote {
  /** list of Level1 OptionData records. */
  readonly quotes?: [];
  /** list of Level1 OptionData records. */

  readonly Level1OptionData?: [];

  /** underlying name */
  readonly underlying?: string;

  /** underlying ID */
  readonly underlyingId?: number;

  /** symbol name */
  readonly symbol?: string;

  /** symbol ID */
  readonly stockId?: number;

  /** bid price */
  readonly bidPrice?: number;

  /** bid size */
  readonly bidSize?: number;

  /** ask price */
  readonly askPrice?: number;

  /** ask size */
  readonly askSize?: number;

  /** last trade price trade hours */
  readonly lastTradePriceTrHrs?: number;

  /** last trade price */
  readonly lastTradePrice?: number;

  /** last trade size */
  readonly lastTradeSize?: number;

  /** last trade tick */
  readonly lastTradeTick?: string;

  /** last trade time */
  readonly lastTradeTime?: Date;

  /** volume */
  readonly volume?: number;

  /** open price */
  readonly openPrice?: number;

  /** high price */
  readonly highPrice?: number;

  /** low price */
  readonly lowPrice?: number;

  /** volatility */
  readonly volatility?: number;

  /** delta */
  readonly delta?: number;

  /** gamma */
  readonly gamma?: number;

  /** theta */
  readonly theta?: number;

  /** vega */
  readonly vega?: number;

  /** rho */
  readonly rho?: number;

  /** open interest */
  readonly openInterest?: number;

  /** how much is data delayed */
  readonly delay?: number;

  /** whether or not the symbol was halted */
  readonly isHalted?: boolean;

  /** volume Weighted Average Price */
  readonly VWAP?: number;
}

export interface IQuotesOptionsByIds {
  readonly byIds?: (optionIds: number[]) => Promise<IOptionsQuotes>;
}

export type QuotesOptions = (
  filters: OptionsFilters,
) => Promise<IOptionsQuotes>;

export type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;

export type OptionsPostData = OptionsIdArray | FiltersArray;
export interface OptionsIdArray {
  optionIds: number[];
}

export interface FiltersArray {
  filters: OptionsFilters[];
}

export interface OptionsFilters {
  underlyingId: number;
  expiryDate: string;
  optionType?: string | undefined | null;
  minstrikePrice?: number | undefined | null;
  maxstrikePrice?: number | undefined | null;
}
