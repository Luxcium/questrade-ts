import { Currency } from 'questrade-api-enumerations';

import { ISymbolInfo } from '.';

export interface IEquitySymbol extends ISymbolInfo {
  all?: IEquitySymbol[];
  count?: number;
  currency: Currency;
  description: string;
  isQuotable: boolean;
  isTradable: boolean;
  listingExchange: string;
  securityType: string;
  symbol: string;
  symbolId: number;
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
