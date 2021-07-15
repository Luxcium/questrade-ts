export interface IMarkets {
  readonly markets: IMarket[];
}
export interface IMarket {
  /** market name. */
  readonly name: string;

  /** list of Order execution venue code. */
  readonly tradingVenues: string[];

  /** default trading venue code. */
  readonly defaultTradingVenue: string;

  /** list of primary order route codes. */
  readonly primaryOrderRoutes: string[];

  /** list of secondary order route codes. */
  readonly secondaryOrderRoutes: string[];

  /** list of Level 1 market data feed code */
  readonly level1Feeds: string[];

  /** list of Level 2 market data feed code. */
  readonly level2Feeds: string[];

  /** pre-market opening time for current trading date. */
  readonly extendedStartTime: Date | string;

  /** regular market opening time for current trading date. */
  readonly startTime: Date | string;

  /** regular market closing time for current trading date. */
  readonly endTime: Date | string;

  /** extended market closing time for current trading date. */
  readonly extendedEndTime: Date | string;

  /** number of snap quotes that the user can retrieve from a market. */
  readonly snapQuotesLimit: number;
}
