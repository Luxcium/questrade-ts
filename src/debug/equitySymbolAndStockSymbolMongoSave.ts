import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { equitySymbolResultMongoSave } from './equitySymbolResultMongoSave';
import { stockSymbolMongoSave } from './stockSymbolMongoSave';

//   symbolItems.map(async symbItem => {
//     const symbId = symbItem?.symbolId || 0;
//     const stockIds = [symbId];
//     const symbol = await qtApi.getSymbols.byStockIds(stockIds);
//     await equitySymbolResultMongoSave(apiCallQ)(symbItem);
//     await stockSymbolMongoSave(apiCallQ)(symbol);
//   }),
// );
// config = { Model: EquitySymbolResult, value: symbItem };
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

export const counting = { counta: 0, countb: 0, countc: 0 };
export function searchAndStockSymbolDbSave(qtApi: IQuestradeAPIv2_0) {
  return (apiCallQ: SimpleQueue) => (symbolItems: IEquitySymbol[]) => {
    counting.countb += 1;

    const counta2 = counting.counta;
    const contb2 = counting.countb;

    return symbolItems.map(async symbItem => {
      counting.countc += 1;

      console.log(
        'IEquitySymbol #',
        counting.counta + 1,
        `(${counta2})`,
        '&#',
        counting.countb,
        `(${contb2})`,
        '!!!!!!!!!!!!!!!!!!!!!!',
        `(${counting.countc})`,
      );
      const symbId = symbItem?.symbolId || 1;
      const stockIds = [symbId];
      const symbol = await qtApi.getSymbols.byStockIds(stockIds);
      await equitySymbolResultMongoSave(apiCallQ)(symbItem);
      await stockSymbolMongoSave(apiCallQ)(symbol);
      counting.counta += 1;
      console.log(
        'IEquitySymbol #',
        counting.counta,
        `(${counta2})`,
        '&#',
        counting.countb,
        `(${contb2})`,
        '!!!!!!!!!!!!!!!!!!!!!!',
        `(${counting.countc})`,
      );

      return symbol;
    });
  };
}
