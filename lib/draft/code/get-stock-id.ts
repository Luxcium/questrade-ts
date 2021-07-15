import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { promiseOf } from '../../utils';

export function getStockId(qtApi: QuestradeAPIv2_0) {
  return async (
    symbol: string | Promise<string>,
    offset?: number,
  ): Promise<number> => {
    const symb = await promiseOf(symbol);
    const [firstResult] = await qtApi.search.stock(symb, offset);

    return firstResult?.symbolId || 1;
  };
}
