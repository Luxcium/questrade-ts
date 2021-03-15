import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { StockSymbolModel } from '../../schema/stock-symbol';
import { IStockSymbol } from '../../typescript';
import { promiseOf } from '../../utils';
import { saveMongo } from './save-mongo';

export function stockSymbolDbSave(apiCallQ: SimpleQueue) {
  return async (symbol: IStockSymbol[] | Promise<IStockSymbol[]>) => {
    const symbol_ = await promiseOf(symbol);

    return Promise.all(
      symbol_.map(async (uniqueSymbol: IStockSymbol) => {
        const config = { Model: StockSymbolModel, value: uniqueSymbol };

        await apiCallQ.addToQueue({
          config,
          fn: saveMongo,
        });

        return uniqueSymbol;
      }),
    );
  };
}
