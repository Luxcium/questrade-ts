import axios from 'axios';
// tslint:disable-next-line: no-implicit-dependencies
import { default as ƒ } from 'ramda';
import { _redeemToken } from '../api/private/core/CredentialsFactory';
import { IExecution } from '../api/typescript';
import { dateRangeFromNow, void0 } from '../api/utils';
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
  const qt = qtApi;
  const results = {
    setAccount: qtApi.currentAccount,
    getServerTime: qtApi.serverTime,
    get: {
      accounts: {
        activities: (await qt.get.account.activities(timeStart)(timeEnd))[0],
        orders: (await qt.get.account.orders()(timeStart)(timeEnd))[0],
        ordersAll: (await qt.get.account.allOrders(timeStart)(timeEnd))[0],
        ordersByIds: qt.get.account.ordersByIds,
        executions: (await qt.get.account.executions(timeStart)(timeEnd))[0],
        balances: await qt.get.account.balances(),
        positions: await qt.get.account.positions(),
        allAccounts: await qt.get.account.allAccounts(),
      },
      markets: {
        candlesById: qt.get.market.candlesByStockId(timeStart)(timeEnd),
        quotes: {
          byStrategies: qt.get.quotes.byStrategies,
          options: qt.get.quotes.optionsQuotes,
          byIds: qt.get.quotes.byStockIds,
        },
        allMarkets: void0(await qt.get.market.allMarkets()),
      },
      symbols: {
        optionsById: qt.get.symbols.optionChains.byStockId,
        byIds: qt.get.symbols.byStockIds,
        search: qt.get.search.stock,
        searchAll: qt.get.search.allStocks,
        searchCount: qt.get.search.countResults,
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
