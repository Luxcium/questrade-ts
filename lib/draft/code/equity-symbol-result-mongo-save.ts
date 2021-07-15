import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { EquitySymbolModel } from '../../schema/equity-symbol';
import { IEquitySymbol } from '../../typescript';
import { saveMongo } from './save-mongo';

export function equitySymbolDbSave(apiCallQ: SimpleQueue) {
  return async (symbItem: IEquitySymbol) => {
    const config = { Model: EquitySymbolModel, value: symbItem };

    await apiCallQ.addToQueue({
      config,
      fn: saveMongo,
    });

    return void 0;
  };
}
