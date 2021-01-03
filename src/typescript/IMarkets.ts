export interface IMarkets {
  markets: IMarket[];
}
export interface IMarket {
  /** Market name. */
  name: string;

  /** List of Order execution venue code. */
  tradingVenues: string[];

  /** Default trading venue code. */
  defaultTradingVenue: string;

  /** List of primary order route codes. */
  primaryOrderRoutes: string[];

  /** List of secondary order route codes. */
  secondaryOrderRoutes: string[];

  /** List of Level 1 market data feed code */
  level1Feeds: string[];

  /** List of Level 2 market data feed code. */
  level2Feeds: string[];

  /** Pre-market opening time for current trading date. */
  extendedStartTime: Date | string;

  /** Regular market opening time for current trading date. */
  startTime: Date | string;

  /** Regular market closing time for current trading date. */
  endTime: Date | string;

  /** Extended market closing time for current trading date. */
  extendedEndTime: Date | string;

  /** Number of snap quotes that the user can retrieve from a market. */
  snapQuotesLimit: number;
}
