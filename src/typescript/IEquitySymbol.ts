import { Currency } from 'questrade-api-enumerations';

export interface IEquitySymbol {
  symbol: string;
  symbolId: number;
  description: string;
  securityType: string;
  listingExchange: string;
  isTradable: boolean;
  isQuotable: boolean;
  currency: Currency;
  count?: number;
  all?: IEquitySymbol[];
}

export interface IEquitySymbolSearchResults {
  symbols: IEquitySymbol[];
}

export interface IEquitySymbolCount {
  count?: (prefix: string) => Promise<number>;
}

export type SymbolSearch = (
  prefix: string,
  offset?: number,
) => Promise<IEquitySymbol>;

export type SymbolSearchAndCount = SymbolSearch & IEquitySymbolCount;
export type SymbolSearchOrCount = SymbolSearch | IEquitySymbolCount;
