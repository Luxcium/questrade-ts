/* eslint-disable promise/no-callback-in-promise */
/* eslint-disable promise/no-nesting */
/* eslint-disable radar/no-duplicate-string */
/* eslint-disable radar/no-identical-functions */
import mongoose from 'mongoose';

import { qtAPIv2_0 } from '..';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { Candle } from '../resources/schema/candle';
import { StockSymbol } from '../resources/schema/stock-symbol';
import { SymbolSearchResult } from '../resources/schema/symbol-search-result';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import { ICandle, ISymbol } from '../typescript';
import { id0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { mongooseConnection: mogooseConnectAndSave(), onlyOnce: true };

// -----------------------------------------------------------------------------!!

export function mogooseConnectAndSave() {
  const connection = mongoose
    .connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async function (db) {
      console.log("we're connected!");

      return db;
    });

  return {
    disconnect: (cb: any) => {
      connection
        .then(db => cb(db.disconnect()))
        .catch(console.error.bind(console, 'db.disconnect() ERROR:'));
    },
    save: async <T, D extends mongoose.Document<T>>(
      value: T,
      Model: mongoose.Model<D>,
    ) => {
      console.log('will process');

      const wm1 = new WeakMap<{}, D | null>();
      const ob1 = {};

      wm1.set(ob1, new Model(value));

      return (wm1.get(ob1) as D)
        .save()
        .then(result => {
          console.log('Model.save() result:', result);

          return result;
        })
        .catch(console.error.bind(console, 'Model.save() ERROR:'))
        .finally(() => {
          wm1.delete(ob1);
        });
    },
  };
}

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

  echo(await qtApi.account.getServerTime());

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

      await once.mongooseConnection.save(symbolItem, SymbolSearchResult);

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
          once.mongooseConnection.save(uniqueSymbol, StockSymbol);
        });
      });

      return symbolId;
    });

  const listToCandleMongoMapper = symbIDtoCandleMongoMapper(listToCandle);
  // await listToCandleMongoMapper('2020-01-01')('2021-01-01');
  // await listToCandleMongoMapper('2019-01-01')('2020-01-01');
  // await listToCandleMongoMapper('2018-01-01')('2019-01-01');
  await listToCandleMongoMapper('2016-01-01')('2017-01-01')
    .then(x => Promise.all(x))
    .finally(() =>
      once.mongooseConnection.disconnect(
        console.log.bind(console, 'once.mongooseConnection.disconnect():'),
      ),
    );
}

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
  return candels.map(mogooseConnectAndSaveCandleMaper);
}

async function mogooseConnectAndSaveCandleMaper<T>(
  val: T,
  index: number,
  array: T[],
) {
  const value = JSON.parse(JSON.stringify(val)) as T;

  once.mongooseConnection.save(value, Candle);

  void index;
  void array;
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
