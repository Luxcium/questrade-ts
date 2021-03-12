import { IQuestradeAPIv2_0 } from '..';
import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { echo } from '../resources/side-effects';
import { IdsAndSymbList, IEquitySymbol, SymbolList } from '../typescript';
import { getAllEquitySymbList } from './getEquitySymbolsList';
import { getSymbolIDSearchAndStockSymbolDbSave } from './getSymbolIdEquitySymbolAndStockSymbolDbSave';
import { mainRedis } from './mainRedis';
import { mogooseConnect } from './mogooseConnect';
import { willGetSnP500List } from './willGetSnP500List';
import { getIdsAndSymbList } from './willGetSymbolIdAndFirstSymbol';

export const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export type AllEquitySymbList = Promise<IEquitySymbol[][]>;
export async function scientiaEsLuxPrincipium(apiCallQ: SimpleQueue) {
  //
  // activate the api for later use
  const { qtApi } = await mainRedis();
  const symbolList: SymbolList = willGetSnP500List();
  const allEquitySymbList = getAllEquitySymbList(qtApi);
  const allEquitiesList: AllEquitySymbList = allEquitySymbList(symbolList);
  const idsAndSymbList: IdsAndSymbList = getIdsAndSymbList(allEquitiesList);

  return getSymbolIDSearchAndStockSymbolDbSave(qtApi, apiCallQ, idsAndSymbList);
}

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
export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const connection = await mogooseConnect();
  const apiCallQ = new SimpleQueue();
  await scientiaEsLuxPrincipium(apiCallQ);
  apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}

main();
