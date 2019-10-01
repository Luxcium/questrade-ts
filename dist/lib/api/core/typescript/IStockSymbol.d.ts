import { Currency, ListingExchange, SecurityType } from 'questrade-api-enumerations';
export interface IStockSymbol {
    symbol: string;
    symbolId: number;
    description: string;
    securityType: SecurityType;
    listingExchange: ListingExchange;
    isTradable: boolean;
    isQuotable: boolean;
    currency: Currency;
}
export declare type StockSymbol = IStockSymbol | string;
//# sourceMappingURL=IStockSymbol.d.ts.map