import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ISymbol } from '../typescript';
import { promiseOf } from '../utils';

export function getSymbol(qtApi: IQuestradeAPIv2_0) {
  return async (stockId: number | Promise<number>): Promise<ISymbol> => {
    const id = await promiseOf(stockId);
    const [firstResult] = await qtApi.getSymbols.byStockIds([id]);

    return firstResult;
  };
}
