import { ISymbol } from '../../../../../typescript';

export interface ISymbolSearchCount {
  count: (prefix: string) => Promise<number>;
}

export type SymbolSearch = (
  prefix: string,
  offset?: number
) => Promise<ISymbol>;

export type SymbolSearchAndCount = SymbolSearch & ISymbolSearchCount;
