import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ISymbolSearchResult } from '../typescript';
import { promiseOf } from '../utils';


export function getStock(qtApi: IQuestradeAPIv2_0) {
  return async (
    symbol: string | Promise<string>,
    offset?: number
  ): Promise<ISymbolSearchResult[]> => {
    const symb = await promiseOf(symbol);

    return qtApi.search.stock(symb, offset);
  };
}
