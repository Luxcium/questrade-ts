import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IStockSymbol } from '../../typescript';
import { StockSymbol } from '../../schema/stock-symbol';
import { promiseOf } from '../../utils';
import { saveMongo } from './save-mongo';

export function stockSymbolDbSave(apiCallQ: SimpleQueue) {
  return async (symbol: IStockSymbol[] | Promise<IStockSymbol[]>) => {
    const symbol_ = await promiseOf(symbol);

    return Promise.all(
      symbol_.map(async (uniqueSymbol: IStockSymbol) => {
        const config = { Model: StockSymbol, value: uniqueSymbol };

        await apiCallQ.addToQueue({
          config,
          fn: saveMongo,
        });

        return uniqueSymbol;
      }),
    );
  };
}
