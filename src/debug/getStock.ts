import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { promiseOf } from '../utils';


export function getStock(qtApi: IQuestradeAPIv2_0) {
  return async (
    symbol: string | Promise<string>,
    offset?: number
  ): Promise<IEquitySymbol[]> => {
    const symb = await promiseOf(symbol);

    return qtApi.search.allStocks(symb, offset);
  };
}
