import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IStockSymbol } from '../../typescript';
import { promiseOf } from '../../utils';

export async function getSymbol({
  qtApi,
  symbolId,
}: {
  qtApi: QuestradeAPIv2_0;
  symbolId: number | Promise<number>;
}): Promise<IStockSymbol> {
  // return async (stockId: number | Promise<number>): Promise<IStockSymbol> => {
  const id = await promiseOf(symbolId);
  const [firstResult] = await qtApi.getSymbols.byStockIds([id]);

  return firstResult;
  // };
}
