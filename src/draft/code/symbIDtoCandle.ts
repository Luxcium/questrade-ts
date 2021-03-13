import { IQuestradeAPIv2_0 } from '../../public/IQuestradeAPIv2_0';
import { candlesMap } from './candlesMap';

/*
export async function step4(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  list: Promise<
    {
      symbolId: number;
      symbolItem: IEquitySymbolResult;
      symbolItems: IEquitySymbolResult[];
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
        symbol.map(async (uniqueSymbol: ISymbol) => {
          const config = { Model: StockSymbol, value: uniqueSymbol };

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

 */

export function symbIDtoCandle(qtApi: IQuestradeAPIv2_0) {
  return (list: Promise<number>[]) => (startTime: string) => async (
    endTime: string,
  ) => {
    return list.map(async symbolId => {
      const candels = await qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date(startTime).toISOString(),
      )(new Date(endTime).toISOString());

      await Promise.all(candlesMap(candels));

      return symbolId;
    });
  };
}
