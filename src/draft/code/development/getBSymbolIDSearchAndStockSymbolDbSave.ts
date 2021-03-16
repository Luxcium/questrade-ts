import { IQuestradeAPIv2_0 } from '../../..';
import { SimpleQueue } from '../../../private/core/next-rate-limiter/simple-queue';
import { IEquitySymbol } from '../../../typescript';

export function getBSymbolIDSearchAndStockSymbolDbSave({
  qtApi,
  dbSaveQueue,
}: {
  qtApi: IQuestradeAPIv2_0;
  dbSaveQueue: SimpleQueue;
}) {
  return async (
    list: Promise<
      {
        symbolId: number;
        symbolItem: IEquitySymbol;
        symbolItems: IEquitySymbol[];
      }[]
    >,
  ) => {
    const awaitedList = await list;
    const stock = await Promise.all(
      awaitedList.map(async items => {
        const { symbolId, symbolItem, symbolItems } = items;
        const symbolList = await Promise.all(
          symbolItems.map(async symbItem => {
            const symbId = symbItem?.symbolId || 1;
            const stockIds = [symbId];
            const symbols = await qtApi.getSymbols.byStockIds(stockIds);
            const [firstsymbol] = symbols;

            return { firstsymbol, symbols };
          }),
        );

        const [symbol] = symbolList;

        return {
          equitySymbol: symbolItem,
          equitySymbolList: symbolItems,
          stockSymbol: symbol,
          stockSymbolList: symbolList,
          symbolId,
        };
      }),
    );

    return { dbSaveQueue, qtApi, stock };
  };
}
// await stockSymbolDbSave(dbSaveQueue)(symbol);

// await equitySymbolDbSave(dbSaveQueue)(symbItem);

/*
import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { searchAndStockSymbolDbSave } from './equitySymbolAndStockSymbolMongoSave';

export async function getSymbolIDSearchAndStockSymbolDbSave(
  qtApi: IQuestradeAPIv2_0,
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
      await Promise.all(
        searchAndStockSymbolDbSave(qtApi)(apiCallQ)(items.symbolItems),
      );

      return items.symbolId;
    }),
  );
}


import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { IEquitySymbol } from '../typescript';
import { equitySymbolDbSave } from './equitySymbolResultMongoSave';
import { stockSymbolDbSave } from './stockSymbolMongoSave';

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

*/
