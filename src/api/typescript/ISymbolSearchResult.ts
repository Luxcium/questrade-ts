import { Currency } from 'questrade-api-enumerations';

export interface ISymbolSearchResult {
  symbol: string;
  stockId: number;
  description: string;
  securityType: string;
  listingExchange: string;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
  count?: number;
}

export interface ISymbolSearchResults {
  symbols: ISymbolSearchResult[];
}
