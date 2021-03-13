import { SimpleQueue } from '../../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { StockSymbol } from '../../schema/stock-symbol';
import { IEquitySymbol, IStockSymbol } from '../../typescript';
import { saveMongo } from './saveMongo_b';

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
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: IEquitySymbol;
      symbolItems: IEquitySymbol[];
    }[]
  >
) {
  return Promise.all(
    (await list).map(async (items) => {
      const { symbolId, symbolItems } = items;
      symbolItems.map(async (symbItem) => {
        const symbId = symbItem?.symbolId || 1;
        const stockIds = [symbId];
        const symbol = await qtApi.getSymbols.byStockIds(stockIds);
        symbol.map(async (uniqueSymbol: IStockSymbol) => {
          const config = { Model: StockSymbol, value: uniqueSymbol };

          apiCallQ.addToQueue({
            config,
            fn: saveMongo,
          });

          return uniqueSymbol;
        });
      });

      return symbolId;
    })
  );
}
