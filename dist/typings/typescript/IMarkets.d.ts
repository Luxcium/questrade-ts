export interface IMarkets {
    markets: IMarket[];
}
export interface IMarket {
    /** market name. */
    name: string;
    /** list of Order execution venue code. */
    tradingVenues: string[];
    /** default trading venue code. */
    defaultTradingVenue: string;
    /** list of primary order route codes. */
    primaryOrderRoutes: string[];
    /** list of secondary order route codes. */
    secondaryOrderRoutes: string[];
    /** list of Level 1 market data feed code */
    level1Feeds: string[];
    /** list of Level 2 market data feed code. */
    level2Feeds: string[];
    /** pre-market opening time for current trading date. */
    extendedStartTime: Date | string;
    /** regular market opening time for current trading date. */
    startTime: Date | string;
    /** regular market closing time for current trading date. */
    endTime: Date | string;
    /** extended market closing time for current trading date. */
    extendedEndTime: Date | string;
    /** number of snap quotes that the user can retrieve from a market. */
    snapQuotesLimit: number;
}
//# sourceMappingURL=IMarkets.d.ts.map