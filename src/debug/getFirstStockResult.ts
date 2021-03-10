import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ISymbolSearchResult } from '../typescript';
import { promiseOf } from '../utils';

export function getFirstStockResult(qtApi: IQuestradeAPIv2_0) {
  return async (
    symbol: string | Promise<string>,
    offset?: number,
  ): Promise<ISymbolSearchResult> => {
    const symb = await promiseOf(symbol);
    const [firstResult] = await qtApi.search.stock(symb, offset);

    return firstResult;
  };
}
