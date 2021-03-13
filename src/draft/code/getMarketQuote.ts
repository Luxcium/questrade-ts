import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IQuote } from '../../typescript';
import { promiseOf } from '../../utils';

export function getMarketQuote(qtApi: IQuestradeAPIv2_0) {
  return async (stockId: number | Promise<number>): Promise<IQuote> => {
    const id = await promiseOf(stockId);
    const [firstResult] = await qtApi.getQuotes.byStockIds([id]);

    return firstResult;
  };
}
