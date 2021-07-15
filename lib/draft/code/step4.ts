import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { QuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { StockSymbolModel } from '../../schema/stock-symbol';
import { IEquitySymbol, IStockSymbol } from '../../typescript';
import { saveMongo } from './save-mongo';

// export async function step0(
//   list: Promise<
//     {
//       symbolId: number;
//       symbolItem: IEquitySymbolResult;
//       symbolItems: IEquitySymbolResult[];
//     }[]
//   >,
// ) {
//   return Promise.all(
//     (await list).map(async items => {
//       const { symbolId, symbolItem, symbolItems } = items;
//       return {
//         symbolId,
//         symbolItem,
//         symbolItems,
//       };
//     }),
//   );
// }

export async function step4(
  qtApi: QuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: IEquitySymbol;
      symbolItems: IEquitySymbol[];
    }[]
  >,
) {
  return Promise.all(
    (await list).map(async items => {
      const { symbolId, symbolItems } = items;
      symbolItems.map(async symbItem => {
        const symbId = symbItem?.symbolId || 1;
        const stockIds = [symbId];
        const symbol = await qtApi.getSymbols.byStockIds(stockIds);
        symbol.map(async (uniqueSymbol: IStockSymbol) => {
          const config = { Model: StockSymbolModel, value: uniqueSymbol };

          apiCallQ.addToQueue({
            config,
            fn: saveMongo,
          });

          return uniqueSymbol;
        });
      });

      return symbolId;
    }),
  );
}
