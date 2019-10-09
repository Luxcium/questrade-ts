import { ISymbolSearchResult } from '.';

export interface ISymbolSearchCount {
  count?: (prefix: string) => Promise<number>;
}

export type SymbolSearch = (
  prefix: string,
  offset?: number
) => Promise<ISymbolSearchResult>;

export type SymbolSearchAndCount = SymbolSearch & ISymbolSearchCount;
export type SymbolSearchOrCount = SymbolSearch | ISymbolSearchCount;
