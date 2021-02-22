/* eslint-disable radar/no-duplicate-string */
/* eslint-disable radar/no-identical-functions */
import { qtAPIv2_0 } from '..';
import { IQuestradeAPIv2_0 } from '../public/IQuestradeAPIv2_0';
import { ech0, echo, getMyToken } from '../resources/side-effects';
import { redisProxyHandler } from '../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';
import { id0 } from '../utils';
import { willGetSNP500StringList } from './development/getSNP500List';

const once = { onlyOnce: true };

export async function main() {
  echo(`Will execute main: ${once.onlyOnce}`);
  if (!once.onlyOnce) {
    return false;
  }

  once.onlyOnce = false;

  // % Rest operations
  // # ACCOUNT CALLS
  void getActivities; /* ACCOUNTS/:ID/ACTIVITIES*/
  void getOrders; /* ACCOUNTS/:ID/ORDERS*/
  void getOrdersByIds; /* ACCOUNTS/:ID/ORDERS*/
  void getExecutions; /* ACCOUNTS/:ID/EXECUTIONS*/
  void getBalances; /* ACCOUNTS/:ID/BALANCES*/
  void getPositions; /* ACCOUNTS/:ID/POSITIONS*/
  void getAllAccounts; /* ACCOUNTS*/
  void getTime; /* TIME*/
  // # MARKET CALLS
  void getCandles; /* MARKETS/CANDLES/:ID */

  /*

    GET MARKETS/QUOTES/STRATEGIES
    GET MARKETS/QUOTES/OPTIONS
    GET MARKETS/QUOTES/:ID
    GET MARKETS
    GET SYMBOLS/:ID/OPTIONS
    GET SYMBOLS/SEARCH
    GET SYMBOLS/:ID
  */

  return true;
}

main();

async function mainRedis(/* tedis?: Tedis */): Promise<IQuestradeAPIv2_0> {
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

async function getTime() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const time = qtApi.account.getServerTime(); // ('2021-02-01')('2021-02-10');

  ech0(await time);

  return id0(qtApi);
}

async function getAllAccounts() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const accounts = qtApi.account.getAllAccounts(); // ('2021-02-01')('2021-02-10');

  ech0(await accounts);

  return id0(qtApi);
}

async function getPositions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const positions = qtApi.account.getPositions(); // ('2021-02-01')('2021-02-10');

  ech0(await positions);

  return id0(qtApi);
}

async function getBalances() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const balances = qtApi.account.getBalances(); // ('2021-02-01')('2021-02-10');

  ech0(await balances);

  return id0(qtApi);
}

async function getOrders() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const orders = qtApi.account.getOrders()('2021-02-01')('2021-02-10');

  ech0(await orders);

  return id0(qtApi);
}

async function getExecutions() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const executions = qtApi.account.getExecutions('2021-02-01')('2021-02-10');

  ech0(await executions);

  return id0(qtApi);
}

async function getOrdersByIds() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const order = qtApi.account.getOrdersByIds([793_393_477]); // ('2021-02-01')('2021-02-10');

  ech0(await order);

  return id0(qtApi);
}

async function getActivities() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();
  const activities = qtApi.account.getActivities('2021-02-01')('2021-02-10');

  ech0(await activities);

  return id0(qtApi);
}

async function getCandles() {
  const qtApi: IQuestradeAPIv2_0 = await mainRedis();

  // .map(item => async () =>
  //   qtApi.getSymbols.byStockIds([(await item())[0]?.symbolId || 1]),
  // )
  // .map(item => item());

  // .slice(0, 20)

  id0(await willGetSNP500StringList())
    .map(item => qtApi.search.stock(item))
    .map(async item => {
      const symbolId = (await item)[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(symbolId)()(
        new Date('2020-01-01').toISOString(),
      )(new Date('2021-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2019-01-01').toISOString(),
      )(new Date('2020-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2018-01-01').toISOString(),
      )(new Date('2019-01-01').toISOString());

      return symbolId;
    })
    .map(async symbolId => {
      // const symbolId = (await item )[0]?.symbolId || 1;
      qtApi.market.getCandlesByStockId(await symbolId)()(
        new Date('2016-01-01').toISOString(),
      )(new Date('2017-01-01').toISOString());

      return symbolId;
    });
}
// ech0(await qtApi.account.getServerTime());
// ech0(await qtApi.account.getServerTime());
// }

// async function testingOrDebugging() {
//   const apiOptions: ApiOptions = {
//     debug: 100,
//     token: getMyToken,
//   };

//   const { qtApi } = await qtAPIv2_0(apiOptions);
// const setImmediatePromise = promisify(setImmediate);

// void setImmediatePromise;
/* promisify(setImmediate)( */

// {
// console.log(c1++, '----STEP 2----MAP-1-1-1', i1);

// return async
// }
// #region : as
//     {
//     // console.log(c2a++, '-$---STEP 8-m1-ISymbolSearchResult');
//     // const [ref] /* : ISymbolSearchResult */ =
//     await
//       item,
//     );
//     // console.log(c2b++, '----STEP 10-m1-ISymbolSearchResult');

//     // const {
//     //   // all /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency /*  Currency; */,
//     //   description /*  string; */,
//     //   isQuotable /*  boolean; */,
//     //   isTradable /*  boolean; */,
//     //   listingExchange /*  string; */,
//     //   securityType /*  string; */,
//     //   symbol /*  string; */,
//     //   symbolId /*  number; */,
//     // } = ref || {
//     //   // all /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency: 'CAD',
//     //   description: '' /*  string; */,
//     //   isQuotable: false /*  boolean; */,
//     //   isTradable: false /*  boolean; */,
//     //   listingExchange: '' /*  string; */,
//     //   securityType: '' /*  string; */,
//     //   symbol: 'N/A' /*  string; */,
//     //   symbolId: 1 /*  number; */,
//     // };

//     // const partial: ISymbolSearchResult = {
//     //   // all:[] /*  ISymbolSearchResult[]; */,
//     //   // count /*  number; */,
//     //   currency /*  Currency; */,
//     //   description /*  string; */,
//     //   isQuotable /*  boolean; */,
//     //   isTradable /*  boolean; */,
//     //   listingExchange /*  string; */,
//     //   securityType /*  string; */,
//     //   symbol /*  string; */,
//     //   symbolId /*  number; */,
//     // };

//     return echo1(`'qtApi.search.stock(${item})':`, ref)?.symbolId || 1;
//   };
// })
// #endregion :

// .map((item, i2) => {
//   console.log(c3++, '----STEP 3----MAP-2-2-2', i2);

//   return async () => {
//     console.log(c4++, '----STEP 7-m2-');

//     return item().then(xItem => {
//       console.log(c5++, '-$2---STEP 11-m2-');

//       return qtApi.getSymbols.byStockIds([xItem]);
//     });
//   };
// });
// .map((item, i3) => {
//   console.log(c6++, '----STEP 4----MAP-3-3-3', i3);

//   return async () => {
//     console.log(c7a++, '----STEP 6-m3-');
//     const returnValue = echo1('getSymbols.byStockIds:', await item());
//     console.log(c7b++, '----STEP 12-m3-');

//     return returnValue;
//   };
// })
// .map((item, i4) => {
//   console.log(c8a++, '----STEP 5---MAP-4-4-4', i4);
//   const returnValue = item();
//   console.log(c8b++, '----STEP 9---MAP-4-4-4', i4);

//   return returnValue;
// });
