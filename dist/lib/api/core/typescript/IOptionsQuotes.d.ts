export interface IOptionsQuotes {
    quotes: IOptionsQuote[];
}
export interface IOptionsQuote {
    quotes?: any;
    Level1OptionData?: any;
    underlying?: string;
    underlyingId?: number;
    symbol?: string;
    symbolId?: number;
    bidPrice?: number;
    bidSize?: number;
    askPrice?: number;
    askSize?: number;
    lastTradePriceTrHrs?: number;
    lastTradePrice?: number;
    lastTradeSize?: number;
    lastTradeTick?: string;
    lastTradeTime?: Date;
    volume?: number;
    openPrice?: number;
    highPrice?: number;
    lowPrice?: number;
    volatility?: number;
    delta?: number;
    gamma?: number;
    theta?: number;
    vega?: number;
    rho?: number;
    openInterest?: number;
    delay?: number;
    isHalted?: boolean;
    VWAP?: number;
}
export interface IOptionChains {
    optionChain: any[];
}
//# sourceMappingURL=IOptionsQuotes.d.ts.map