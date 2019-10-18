import { _getQuestradeApi } from '../private';
import { Credentials, IQuestradeApi } from '../typescript';

// export const getQuestradeApi = ;

export const questradeApi = async (credentials: Credentials) => {
  const qtApi = await _getQuestradeApi(credentials);
  // const currentAccount = qtApi.currentAccount;
  // const myBalances = qtApi.myBalances;
  // const serverTime = qtApi.serverTime;

  // const accountActivities = qtApi.get.account.activities;
  // const accountAllAccounts = qtApi.get.account.allAccounts;
  // const accountAllOrders = qtApi.get.account.allOrders;
  // const accountBalances = qtApi.get.account.balances;
  // const accountExecutions = qtApi.get.account.executions;
  // const accountOrders = qtApi.get.account.orders;
  // const accountOrdersByIds = qtApi.get.account.ordersByIds;
  // const accountPositions = qtApi.get.account.positions;

  // const marketAllMarkets = qtApi.get.market.allMarkets;
  // const marketCandlesByStockId = qtApi.get.market.candlesByStockId;

  // const quotesByStockIds = qtApi.get.quotes.byStockIds;
  // const quotesByStrategies = qtApi.get.quotes.byStrategies;
  // const quotesByOptionsIds = qtApi.get.quotes.optionsQuotes.byOptionsIds;
  // const quotesFromFilter = qtApi.get.quotes.optionsQuotes.fromFilter;

  // const symbolsOptionChainsByStockId = qtApi.get.symbols.optionChains.byStockId;
  // const symbolsByStockIds = qtApi.get.symbols.byStockIds;

  // const searchAllStocks = qtApi.get.search.allStocks;
  // const searchStock = qtApi.get.search.stock;
  // const searchCountResults = qtApi.get.search.countResults;

  const api: IQuestradeApi = {
    currentAccount: qtApi.currentAccount,
    myBalances: qtApi.myBalances,
    serverTime: qtApi.serverTime,
    get: {
      account: {
        activities: qtApi.get.account.activities,
        allAccounts: qtApi.get.account.allAccounts,
        balances: qtApi.get.account.balances,
        executions: qtApi.get.account.executions,
        orders: qtApi.get.account.orders,
        ordersByIds: qtApi.get.account.ordersByIds,
        positions: qtApi.get.account.positions,
        serverTime: qtApi.get.account.serverTime,
      },
      market: {
        allMarkets: qtApi.get.market.allMarkets,
        candlesByStockId: qtApi.get.market.candlesByStockId,
      },
      quotes: {
        byStockIds: qtApi.get.quotes.byStockIds,
        byStrategies: qtApi.get.quotes.byStrategies,
        optionsQuotes: {
          byOptionsIds: qtApi.get.quotes.optionsQuotes.byOptionsIds,
          fromFilter: qtApi.get.quotes.optionsQuotes.fromFilter,
        },
      },
      symbols: {
        optionChains: {
          byStockId: qtApi.get.symbols.optionChains.byStockId,
        },
        byStockIds: qtApi.get.symbols.byStockIds,
      },
      search: {
        allStocks: qtApi.get.search.allStocks,
        stock: qtApi.get.search.stock,
        countResults: qtApi.get.search.countResults,
      },
    },
  };
  return api;
};
