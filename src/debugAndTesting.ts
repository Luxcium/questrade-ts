import axios from 'axios';
import { _redeemToken } from './api';
import { dateRangeFromNow } from './utils';
// import { qtEnumerations as Enumerations } from 'questrade-api-enumerations';

(async () => {
  //
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
        activities: qtApi.get.accounts.activities(timeStart)(timeEnd),
        orders: qtApi.get.accounts.orders(timeStart)(timeEnd),
        ordersAll: qtApi.get.accounts.ordersAll(timeStart)(timeEnd),
        ordersByIds: qtApi.get.accounts.ordersByIds,
        executions: qtApi.get.accounts.executions(timeStart)(timeEnd),
        balances: await qtApi.get.accounts.balances(),
        positions: await qtApi.get.accounts.positions(),
        allAccounts: await qtApi.get.accounts.allAccounts(),
        time: await qtApi.get.accounts.time(),
      },
      markets: {
        candlesById: qtApi.get.markets.candlesById(timeStart)(timeEnd),
        quotes: {
          byStrategies: qtApi.get.markets.quotes.byStrategies,
          options: qtApi.get.markets.quotes.options.byIds,
          byIds: qtApi.get.markets.quotes.byIds,
        },
        allMarkets: await qtApi.get.markets.allMarkets(),
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
  console.log(results);
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
