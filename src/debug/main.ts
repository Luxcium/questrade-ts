import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { echo } from '../resources/side-effects';
import { getEquitySymbolsList } from './getEquitySymbolsList';
import { getSymbolIDSearchAndStockSymbolDbSave } from './getSymbolIdEquitySymbolAndStockSymbolDbSave';
import { mainRedis } from './mainRedis';
import { mogooseConnect } from './mogooseConnect';
import { willGetSnP500List } from './willGetSnP500List';
import { getSymbolItemsList } from './willGetSymbolIdAndFirstSymbol';

export const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connection = await mogooseConnect();
  const apiCallQ = new SimpleQueue();
  const symbolList = willGetSnP500List({ endIndex: 505, startIndex: 0 });
  const equitySymbolsList = getEquitySymbolsList({ qtApi, symbolList });
  const symbolItemsList = getSymbolItemsList({ equitySymbolsList });
  const list4 = getSymbolIDSearchAndStockSymbolDbSave(
    qtApi,
    apiCallQ,
    symbolItemsList,
  );

  void list4;
  const result = list4; // getMain(qtApi, apiCallQ, list1);

  await result;
  void apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}

main();

void 0;
