import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IQuote } from '../../typescript';
import { promiseOf } from '../../utils';

export function getMarketQuotes(qtApi: IQuestradeAPIv2_0) {
  return async (stockIds: number[] | Promise<number[]>): Promise<IQuote[]> => {
    const idList = await promiseOf(stockIds);

    return qtApi.getQuotes.byStockIds([...idList]);
  };
}
