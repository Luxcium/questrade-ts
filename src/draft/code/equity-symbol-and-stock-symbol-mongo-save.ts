import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../../typescript';
import { equitySymbolDbSave } from './equity-symbol-result-mongo-save';
import { stockSymbolDbSave } from './stock-symbol-mongo-save';

export function searchAndStockSymbolDbSave(qtApi: IQuestradeAPIv2_0) {
  return (apiCallQ: SimpleQueue) => (symbolItems: IEquitySymbol[]) => {
    return symbolItems.map(async symbItem => {
      const symbId = symbItem?.symbolId || 1;
      const stockIds = [symbId];
      const symbol = await qtApi.getSymbols.byStockIds(stockIds);
      await equitySymbolDbSave(apiCallQ)(symbItem);
      await stockSymbolDbSave(apiCallQ)(symbol);

      return symbol;
    });
  };
}
