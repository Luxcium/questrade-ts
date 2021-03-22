import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IStockSymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export function getSymbols(qtApi: QuestradeAPIv2_0) {
  return async (
    stockIds: number[] | Promise<number[]>,
  ): Promise<IStockSymbol[]> => {
    const idList = await promiseOf(stockIds);

    return qtApi.getSymbols.byStockIds([...idList]);
  };
}
