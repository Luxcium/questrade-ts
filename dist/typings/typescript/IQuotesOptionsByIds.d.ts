export interface IOptionsQuotes {
    quotes: IOptionsQuote[];
}
export interface IOptionsQuote {
    /** list of Level1 OptionData records. */
    quotes?: [];
    /** list of Level1 OptionData records. */
    Level1OptionData?: [];
    /** underlying name */
    underlying?: string;
    /** underlying ID */
    underlyingId?: number;
    /** symbol name */
    symbol?: string;
    /** symbol ID */
    stockId?: number;
    /** bid price */
    bidPrice?: number;
    /** bid size */
    bidSize?: number;
    /** ask price */
    askPrice?: number;
    /** ask size */
    askSize?: number;
    /** last trade price trade hours */
    lastTradePriceTrHrs?: number;
    /** last trade price */
    lastTradePrice?: number;
    /** last trade size */
    lastTradeSize?: number;
    /** last trade tick */
    lastTradeTick?: string;
    /** last trade time */
    lastTradeTime?: Date;
    /** volume */
    volume?: number;
    /** open price */
    openPrice?: number;
    /** high price */
    highPrice?: number;
    /** low price */
    lowPrice?: number;
    /** volatility */
    volatility?: number;
    /** delta */
    delta?: number;
    /** gamma */
    gamma?: number;
    /** theta */
    theta?: number;
    /** vega */
    vega?: number;
    /** rho */
    rho?: number;
    /** open interest */
    openInterest?: number;
    /** how much is data delayed */
    delay?: number;
    /** whether or not the symbol was halted */
    isHalted?: boolean;
    /** volume Weighted Average Price */
    VWAP?: number;
}
export interface IQuotesOptionsByIds {
    byIds?: (optionIds: number[]) => Promise<IOptionsQuotes>;
}
export declare type QuotesOptions = (filters: OptionsFilters) => Promise<IOptionsQuotes>;
export declare type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;
export declare type OptionsPostData = OptionsIdArray | FiltersArray;
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
//# sourceMappingURL=IQuotesOptionsByIds.d.ts.map