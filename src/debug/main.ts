/* eslint-disable radar/no-duplicate-string */
/* eslint-disable radar/no-identical-functions */
import mongoose from 'mongoose';

import { qtAPIv2_0 } from '..';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { Candle, ICandleDocument } from '../resources/schema/candle';
import { ISymbolDocument, StockSymbol } from '../resources/schema/stock-symbol';
import {
  ISymbolResultDocument,
  SymbolSearchResult,
} from '../resources/schema/symbol-search-result';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import { ICandle, ISymbol } from '../typescript';
import { id0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };

// -----------------------------------------------------------------------------!!

export async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }

  once.onlyOnce = false;
  await getCandles();

  return true;
}

main();

export async function getCandles() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();

  mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', async function () {
    console.log("we're connected!");
    echo('Will process');

    // const { qtApi } = await qtAPIv2_0({ token: getMyToken });
    echo(await qtApi.account.getServerTime());

    // const symbolSearchResult = new SymbolSearchResult(
    //   (await qtApi.search.stock('aapl'))[0],
    // );

    // await symbolSearchResult.save();

    const symbIDtoCandleMongoMapper = symbIDtoCandle(qtApi);
    void symbIDtoCandleMongoMapper;

    const listToCandle = id0(await willGetSNP500StringList())
      .map(item => qtApi.search.stock(item))
      .map(async item => {
        const symbolItems = await item;
        const [symbolItem] = symbolItems;
        const symbolId = symbolItem?.symbolId || 1;

        return {
          symbolId,
          symbolItem,
          symbolItems,
        };
      })
      .map(async items => {
        const { symbolId, symbolItem, symbolItems } = await items;
        const wm1 = new WeakMap<{}, ISymbolResultDocument | null>();
        const ob1 = {};
        wm1.set(ob1, null);

        try {
          wm1.set(ob1, new SymbolSearchResult(symbolItem));
          await (wm1.get(ob1) as ISymbolResultDocument).save().then(result => {
            console.log('symbolSearchResult.save() result:', result);

            return result;
          });
        } catch (error) {
          console.error('SymbolSearchResult ERROR:', error);
        }

        wm1.delete(ob1);

        return {
          symbolId,
          symbolItems,
        };
      })
      .map(async items => {
        const { symbolId, symbolItems } = await items;
        symbolItems.map(async symbItem => {
          const symbId = symbItem?.symbolId || 1;
          const stockIds = [symbId];
          const symbol = await qtApi.getSymbols.byStockIds(stockIds);
          symbol.map(async (uniqueSymbol: ISymbol) => {
            const wm1 = new WeakMap<{}, ISymbolDocument | null>();
            const ob1 = {};
            wm1.set(ob1, null);

            try {
              wm1.set(ob1, new StockSymbol(uniqueSymbol));

              await (wm1.get(ob1) as ISymbolDocument).save().then(result => {
                console.log('mySymbol.save() result:', result);

                return result;
              });
            } catch (error) {
              console.error('StockSymbol ERROR:', error);
            }

            wm1.delete(ob1);

            return uniqueSymbol;
          });

          return symbId;
        });

        return symbolId;
      });

    const listToCandleMongoMapper = symbIDtoCandleMongoMapper(listToCandle);
    await listToCandleMongoMapper('2020-01-01')('2021-01-01');
    await listToCandleMongoMapper('2019-01-01')('2020-01-01');
    await listToCandleMongoMapper('2018-01-01')('2019-01-01');
    await listToCandleMongoMapper('2016-01-01')('2017-01-01')
      .then(x => Promise.all(x))
      .then(x => x)
      .finally(() => db.close(console.info.bind(console, 'connection close:')));

    // db.close(console.info.bind(console, 'connection close:'));
  });
}

// (method) Array<Promise<number>>.map<Promise<number>>(callbackfn: (value: Promise<number>, index: number, array: Promise<number>[]) => Promise<number>, thisArg?: any): Promise<number>[]

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

function candlesMap(candels: ICandle[]) {
  return candels.map(maper);
}

async function maper<T>(value: T, index: number, array: T[]) {
  const wm1 = new WeakMap<{}, ICandleDocument | null>();
  const ob1 = {};
  wm1.set(ob1, null);

  try {
    wm1.set(ob1, new Candle(value));

    await (wm1.get(ob1) as ICandleDocument)
      .save()
      .then(result => {
        console.log('candle.save() result:', result);

        return result;
      })
      .catch(error => {
        throw error;
      });
  } catch (error) {
    console.error('Candle ERROR:', error);
  }

  wm1.delete(ob1);
  void index;
  void array;

  return value;
}

export async function mainRedis() {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  void proxyFactory;
  const { qtApi } = await qtAPIv2_0({
    accountCallsPerHour: 30_000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
    proxyFactory,
    token: getMyToken,
  });

  ech0(await qtApi.account.getServerTime());

  return qtApi;
}

export async function getTime() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const time = qtApi.account.getServerTime();

  ech0(await time);

  return id0(qtApi);
}

export async function getAllAccounts() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const accounts = qtApi.account.getAllAccounts();

  ech0(await accounts);

  return id0(qtApi);
}

export async function getPositions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const positions = qtApi.account.getPositions();

  ech0(await positions);

  return id0(qtApi);
}

export async function getBalances() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const balances = qtApi.account.getBalances();

  ech0(await balances);

  return id0(qtApi);
}

export async function getOrders() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const orders = qtApi.account.getOrders()('2021-02-01')('2021-02-10');

  ech0(await orders);

  return id0(qtApi);
}

export async function getExecutions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const executions = qtApi.account.getExecutions('2021-02-01')('2021-02-10');

  ech0(await executions);

  return id0(qtApi);
}

export async function getOrdersByIds() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const order = qtApi.account.getOrdersByIds([793_393_477]);

  ech0(await order);

  return id0(qtApi);
}

export async function getActivities() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const activities = qtApi.account.getActivities('2021-02-01')('2021-02-10');

  ech0(await activities);

  return id0(qtApi);
}

// .map(item => async () =>
//   qtApi.getSymbols.byStockIds([(await item())[0]?.symbolId || 1]),
// )
// .map(item => item());

// .slice(0, 20)
