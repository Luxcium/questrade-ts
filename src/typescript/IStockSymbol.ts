import {
  Currency,
  ListingExchange,
  SecurityType,
} from 'questrade-api-enumerations';

/** @deprecated Prefer the use of IEquitySymbol instead.  */
export interface IStockSymbol_DEPRECATED {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: SecurityType;
  listingExchange: ListingExchange;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
}

export type StockSymbol = IStockSymbol_DEPRECATED | string;

// export interface IEquitySymbol {
//   symbol: string;
//   symbolId: number;
//   description: string;
//   securityType: string;
//   listingExchange: string;
//   isTradable: boolean;
//   isQuotable: boolean;
//   currency: Currency;
//   count?: number;
//   all?: IEquitySymbol[];
// }
