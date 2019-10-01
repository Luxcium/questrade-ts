import { Currency } from 'questrade-api-enumerations';
export interface IMarkets {
    markets: IMarket[];
}
export interface IMarket {
    name?: string;
    tradingVenues?: string[];
    defaultTradingVenue?: string;
    primaryOrderRoutes?: string[];
    secondaryOrderRoutes?: string[];
    level1Feeds?: string[];
    level2Feeds?: string[];
    extendedStartTime?: Date | string;
    startTime?: Date | string;
    endTime?: Date | string;
    extendedEndTime?: Date | string;
    currency?: Currency;
    snapQuotesLimit?: number;
}
//# sourceMappingURL=IMarkets.d.ts.map