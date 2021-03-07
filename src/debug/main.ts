/* eslint-disable promise/no-callback-in-promise */
/* eslint-disable promise/no-nesting */
/* eslint-disable radar/no-duplicate-string */
/* eslint-disable radar/no-identical-functions */
import mongoose from 'mongoose';

import { qtAPIv2_0 } from '..';
import { SimpleQueue } from '../private/core/next-rate-limiter/simple-queue';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { StockSymbol } from '../resources/schema/stock-symbol';
import { echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import { ICandle, IQuote, ISymbol, ISymbolSearchResult } from '../typescript';
import { promiseOf } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

// -----------------------------------------------------------------------------!!

export interface QNodesValue2 {
  cb?: any;
  config: any;
  fn: <R>(config?: unknown) => R;
  functionKind?: 'other';
}

// public get promiseOf(): Promise<MaybeList<MLVal>> {
//   return Promise.resolve(MaybeList.of<MLVal>(this.fork)).then(async x => x);
// }
const once = { onlyOnceMain: true, onlyOnceMongoose: 0 };

export async function main() {
  echo(`Will execute main: ${once.onlyOnceMain}`);
  if (!once.onlyOnceMain) {
    return false;
  }

  once.onlyOnceMain = false;
  const { qtApi } = await mainRedis();
  const connection = await mogooseConnect();
  const apiCallQ = new SimpleQueue();
  await getMain(qtApi, apiCallQ, 0, 5)
    .then(x => x)
    .finally(() => null)
    .catch(error => console.error(error));

  void apiCallQ.addToQueue({
    config: 'any',
    fn(_): any {
      return connection.disconnect();
    },
  });

  return true;
}

main();

// -----------------------------------------------------------------------------!!

export async function mainRedis() {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  void proxyFactory;
  const { qtApi, apiCallQ } = await qtAPIv2_0({
    accountCallsPerHour: 30_000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
    proxyFactory,
    token: getMyToken,
  });

  // ech0(await qtApi.account.getServerTime());

  return { apiCallQ, qtApi };
}

export async function mogooseConnect() {
  if (once.onlyOnceMongoose > 0) {
    throw new Error('Error when trying to db.connect(): ALREADY CONNECTED');
  }

  once.onlyOnceMongoose += 1;

  let connection: typeof mongoose;
  try {
    connection = await mongoose.connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error('db.connect() ERROR:', error);

    throw new Error(`Error when trying to db.connect(): ${error.message}`);
  }

  console.log("we're connected!");
  console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

  return {
    disconnect: async () => {
      console.log(
        'db disconnected!',
        await connection.disconnect().then(t => {
          once.onlyOnceMongoose -= 1;
          console.info(`once.onlyOnceMongoose === ${once.onlyOnceMongoose}`);

          return t;
        }),
      );
    },
  };
}

export async function step1(startIndex: number = 0, endIndex?: number) {
  return (await willGetSNP500StringList()).slice(startIndex, endIndex);
}

//
export const getStock = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<ISymbolSearchResult[]> => {
  const symb = await promiseOf(symbol);

  return qtApi.search.stock(symb, offset);
};

export const getFirstStockResult = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<ISymbolSearchResult> => {
  const symb = await promiseOf(symbol);
  const [firstResult] = await qtApi.search.stock(symb, offset);

  return firstResult;
};

export const getStockId = (qtApi: IQuestradeAPIv2_0) => async (
  symbol: string | Promise<string>,
  offset?: number,
): Promise<number> => {
  const symb = await promiseOf(symbol);
  const [firstResult] = await qtApi.search.stock(symb, offset);

  return firstResult?.symbolId || 1;
};

export const getMarketQuote = (qtApi: IQuestradeAPIv2_0) => async (
  stockId: number | Promise<number>,
): Promise<IQuote> => {
  const id = await promiseOf(stockId);
  const [firstResult] = await qtApi.getQuotes.byStockIds([id]);

  return firstResult;
};

export const getMarketQuotes = (qtApi: IQuestradeAPIv2_0) => async (
  stockIds: number[] | Promise<number[]>,
): Promise<IQuote[]> => {
  const idList = await promiseOf(stockIds);

  return qtApi.getQuotes.byStockIds([...idList]);
};

export const getSymbol = (qtApi: IQuestradeAPIv2_0) => async (
  stockId: number | Promise<number>,
): Promise<ISymbol> => {
  const id = await promiseOf(stockId);
  const [firstResult] = await qtApi.getSymbols.byStockIds([id]);

  return firstResult;
};

export const getSymbols = (qtApi: IQuestradeAPIv2_0) => async (
  stockIds: number[] | Promise<number[]>,
): Promise<ISymbol[]> => {
  const idList = await promiseOf(stockIds);

  return qtApi.getSymbols.byStockIds([...idList]);
};

// GET MarketsQuotes
export async function step2(qtApi: IQuestradeAPIv2_0, list: Promise<string[]>) {
  return Promise.all((await list).map(getStock(qtApi)));
}

//     const returnValue = await qtApi.search.stock(symbol);
//     // returnValue.map(item => {
//     //   const config = { Model: SymbolSearchResult, value: item };

//     //   return apiCallQ.addToQueue({
//     //     config,
//     //     fn: conf => saveMongo(conf),
//     //   });
//     // });

//     return returnValue;
//   }),
// );

export async function step3(list: Promise<ISymbolSearchResult[][]>) {
  return map(list, (item: ISymbolSearchResult[]) => {
    const symbolItems = item;
    const [symbolItem] = symbolItems;
    const symbolId = symbolItem?.symbolId || 1;

    return {
      symbolId,
      symbolItem,
      symbolItems,
    };
  });
}

// export async function step0(
//   list: Promise<
//     {
//       symbolId: number;
//       symbolItem: ISymbolSearchResult;
//       symbolItems: ISymbolSearchResult[];
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
      symbolItem: ISymbolSearchResult;
      symbolItems: ISymbolSearchResult[];
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

export async function map<T>(
  list: Promise<any[]>,
  funct: (item: any) => T,
): Promise<T[]> {
  return (await list).map(funct);
  // return true; Promise.all(
}

export async function getMain(
  qtApi: IQuestradeAPIv2_0,
  apiCallQ: SimpleQueue,
  startIndex: number = 0,
  endIndex?: number,
) {
  const list1 = step1(startIndex, endIndex);
  const list2 = step2(qtApi /* , apiCallQ */, list1);
  const list3 = step3(list2);
  const list4 = step4(qtApi, apiCallQ, list3);
  const list5 = (await list4).map(symbolID => {
    return qtApi.market.getCandlesByStockId(symbolID)();
  });

  const list21 = list5.map(daterange => daterange('2021-01-01')('2021-03-05'));
  const list20 = list5.map(daterange => daterange('2020-01-01')('2021-01-01'));
  const list19 = list5.map(daterange => daterange('2019-01-01')('2020-01-01'));
  const list18 = list5.map(daterange => daterange('2018-01-01')('2019-01-01'));
  const list17 = list5.map(daterange => daterange('2017-01-01')('2018-01-01'));
  const list16 = list5.map(daterange => daterange('2016-01-01')('2017-01-01'));

  return [list21, list20, list19, list18, list17, list16]; // .map(list =>
  //   list.map(async candles => {
  //     (await candles).map(candle => {
  //       const config = { Model: Candle, value: candle };
  //       apiCallQ.addToQueue({
  //         config,
  //         fn: saveMongo,
  //       });

  //       return candle;
  //     });
  //   }),
  // );
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

  // once.mongooseConnection.save(value, Candle);

  void index;
  void array;

  return value;
}

export async function saveMongo<T, D extends mongoose.Document<T>>(config: {
  value: T;
  Model: mongoose.Model<D>;
}): Promise<void | D> {
  const { value, Model } = config;
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
}
