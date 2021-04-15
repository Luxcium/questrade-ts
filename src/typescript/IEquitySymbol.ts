import { Currency } from 'questrade-api-enumerations';

import { ISymbolInfo } from '.';

export interface IEquitySymbol extends ISymbolInfo {
  all?: IEquitySymbol[];
  count?: number;
  readonly currency: Currency;
  readonly description: string;
  readonly isQuotable: boolean;
  readonly isTradable: boolean;
  readonly listingExchange: string;
  readonly securityType: string;
  readonly symbol: string;
  readonly symbolId: number;
}

export interface IEquitySymbolResults {
  readonly symbols: IEquitySymbol[];
}

export interface IEquitySymbolCount {
  readonly count?: (prefix: string) => Promise<number>;
}

export type EquitySymbol = (
  prefix: string,
  offset?: number,
) => Promise<IEquitySymbol>;

export type EquitySymbolAndCount = EquitySymbol & IEquitySymbolCount;
export type EquitySymbolOrCount = EquitySymbol | IEquitySymbolCount;
