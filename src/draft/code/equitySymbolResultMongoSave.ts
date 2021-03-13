import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { EquitySymbolDocumentModel } from '../../schema/equity-symbol';
import { IEquitySymbol } from '../../typescript';
import { saveMongo } from './saveMongo';

export function equitySymbolDbSave(apiCallQ: SimpleQueue) {
  return async (symbItem: IEquitySymbol) => {
    const config = { Model: EquitySymbolDocumentModel, value: symbItem };

    await apiCallQ.addToQueue({
      config,
      fn: saveMongo,
    });

    return void 0;
  };
}
