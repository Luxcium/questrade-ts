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

export interface IEquitySymbolResults {
  symbols: IEquitySymbol[];
}

export interface IEquitySymbolCount {
  count?: (prefix: string) => Promise<number>;
}

export type EquitySymbol = (
  prefix: string,
  offset?: number,
) => Promise<IEquitySymbol>;

export type EquitySymbolAndCount = EquitySymbol & IEquitySymbolCount;
export type EquitySymbolOrCount = EquitySymbol | IEquitySymbolCount;
