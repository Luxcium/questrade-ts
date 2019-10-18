import { Currency } from 'api/enums/qtEnumerations';

export interface ISymbolSearchResult {
  symbol: string;
  symbolId: number;
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

export interface ISymbolSearchCount {
  count?: (prefix: string) => Promise<number>;
}

export type SymbolSearch = (
  prefix: string,
  offset?: number
) => Promise<ISymbolSearchResult>;

export type SymbolSearchAndCount = SymbolSearch & ISymbolSearchCount;
export type SymbolSearchOrCount = SymbolSearch | ISymbolSearchCount;
