import axios from 'axios';
// tslint:disable-next-line: no-implicit-dependencies
import { default as ƒ } from 'ramda';
import { _redeemToken } from '../api/public';
import { IExecution } from '../api/typescript';
import { dateRangeFromNow, void0 } from '../utils';
// import { qtEnumerations as Enumerations } from 'questrade-api-enumerations';

(async () => {
  void0(ƒ);
  const { credentials, qtApi } = await _redeemToken(axios)(
    'JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0'
  );

  // console.log(credentials);
  // const serverTime = await qtApi.getServerTime();
  // console.log(serverTime);
  const [timeStart, timeEnd] = dateRangeFromNow(10);
  const results = {
    setAccount: qtApi.setAccount,
    getServerTime: await qtApi.getServerTime(),
    get: {
      accounts: {
        activities: (await qtApi.get.accounts.activities(timeStart)(
          timeEnd
        ))[0],
        orders: (await qtApi.get.accounts.orders()(timeStart)(timeEnd))[0],
        ordersAll: (await qtApi.get.accounts.ordersAll(timeStart)(timeEnd))[0],
        ordersByIds: qtApi.get.accounts.ordersByIds,
        executions: (await qtApi.get.accounts.executions(timeStart)(
          timeEnd
        ))[0],
        balances: await qtApi.get.accounts.balances(),
        positions: await qtApi.get.accounts.positions(),
        allAccounts: await qtApi.get.accounts.allAccounts(),
        time: await qtApi.get.accounts.time(),
      },
      markets: {
        candlesById: qtApi.get.markets.candlesById(timeStart)(timeEnd),
        quotes: {
          byStrategies: qtApi.get.markets.quotes.byStrategies,
          // options: qtApi.get.markets.quotes.options.byIds,
          byIds: qtApi.get.markets.quotes.byIds,
        },
        allMarkets: void0(await qtApi.get.markets.allMarkets()),
      },
      symbols: {
        optionsById: qtApi.get.symbols.optionsById,
        byIds: qtApi.get.symbols.byIds,
        search: qtApi.get.symbols.search,
        searchAll: qtApi.get.symbols.searchAll,
        searchCount: qtApi.get.symbols.searchCount,
      },
    },
  };
  // results.search = await qtApi.get.symbols.search('t');
  // console.dir(results.get.accounts);
  // console.dir(results.get.markets);
  // console.dir(results.get.symbols);
  // aapl : 8049
  const candles = await results.get.markets.candlesById('OneDay')(8049);
  candles.map(candle => {
    console.log(candle.hash.short);
  });

  return credentials;
})()
  // .then((cred: any) => console.log(cred))
  .catch(error => console.log('error message:', error.message));

/*
  setAccount,
    getServerTime,
    get: {
      accounts: {
        activities,
        orders,
        ordersAll,
        ordersByIds,
        executions,
        balances,
        positions,
        allAccounts: allAccounts,
        time: getServerTime,
      },
      markets: {
        candlesById: marketCandlesById,
        quotes: {
          byStrategies,
          options,
          byIds: marketsQuotesByIds,
        },
        allMarkets: markets,
      },
      symbols: {
        optionsById,
        byIds: symbolsByIds,
        search,
        searchAll,
        searchCount,
      },
    },

  */
export type DateRange<R> = (startTime: string) => (endTime: string) => R;

export type AccountExecutions = DateRange<Promise<IExecution[]>>;
