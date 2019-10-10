import {
  Currency,
  ListingExchange,
  SecurityType,
} from 'questrade-api-enumerations';

export interface IStockSymbol {
  symbol: string;
  stockId: number;
  description: string;
  securityType: SecurityType;
  listingExchange: ListingExchange;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
}

export type StockSymbol = IStockSymbol | string;
