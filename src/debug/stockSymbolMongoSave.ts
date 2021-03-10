import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { StockSymbol } from '../resources/schema/stock-symbol';
import { ISymbol } from '../typescript';
import { promiseOf } from '../utils';
import { saveMongo } from './saveMongo';


export function stockSymbolMongoSave(apiCallQ: SimpleQueue) {
  return async (symbol: ISymbol[] | Promise<ISymbol[]>) => {
    const symbol_ = await promiseOf(symbol);

    return Promise.all(
      symbol_.map(async (uniqueSymbol: ISymbol) => {
        const config = { Model: StockSymbol, value: uniqueSymbol };

        await apiCallQ.addToQueue({
          config,
          fn: saveMongo,
        });

        return uniqueSymbol;
      })
    );
  };
}
