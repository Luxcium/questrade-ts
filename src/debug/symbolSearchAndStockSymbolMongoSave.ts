import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ISymbolSearchResult } from '../typescript';
import { symbolSearchResultMongoSave } from "./symbolSearchResultMongoSave";
import { stockSymbolMongoSave } from "./stockSymbolMongoSave";

//   symbolItems.map(async symbItem => {
//     const symbId = symbItem?.symbolId || 0;
//     const stockIds = [symbId];
//     const symbol = await qtApi.getSymbols.byStockIds(stockIds);
//     await symbolSearchResultMongoSave(apiCallQ)(symbItem);
//     await stockSymbolMongoSave(apiCallQ)(symbol);
//   }),
// );
// config = { Model: SymbolSearchResult, value: symbItem };
// await apiCallQ.addToQueue({
//   config,
//   fn: saveMongo,
// });
// await Promise.all(
//   symbol.map(async (uniqueSymbol: ISymbol) => {
//     config = { Model: StockSymbol, value: uniqueSymbol };
//     await apiCallQ.addToQueue({
//       config,
//       fn: saveMongo,
//     });
//     return uniqueSymbol;
//   }),
// );
// return symbolId;

export function searchAndStockSymbolDbSave(qtApi: IQuestradeAPIv2_0) {
  return (apiCallQ: SimpleQueue) => (symbolItems: ISymbolSearchResult[]) => {
    return symbolItems.map(async (symbItem) => {
      const symbId = symbItem?.symbolId || 1;
      const stockIds = [symbId];
      const symbol = await qtApi.getSymbols.byStockIds(stockIds);
      await symbolSearchResultMongoSave(apiCallQ)(symbItem);
      await stockSymbolMongoSave(apiCallQ)(symbol);
    });
  };
}
