import { Credentials, IQuestradeApi } from '../../typescript';
import { _getQuestradeApi } from '../private';

// export const getQuestradeApi = ;

export const questradeApi = async (credentials: Credentials) => {
  const qtApi = await _getQuestradeApi(credentials);
  const currentAccount = qtApi.currentAccount;
  const myBalances = qtApi.myBalances;
  const serverTime = qtApi.serverTime;

  const accountActivities = qtApi.get.account.activities;
  const accountAllAccounts = qtApi.get.account.allAccounts;
  // const accountAllOrders = qtApi.get.account.allOrders;
  const accountBalances = qtApi.get.account.balances;
  const accountExecutions = qtApi.get.account.executions;
  const accountOrders = qtApi.get.account.orders;
  const accountOrdersByIds = qtApi.get.account.ordersByIds;
  const accountPositions = qtApi.get.account.positions;

  const marketAllMarkets = qtApi.get.market.allMarkets;
  const marketCandlesByStockId = qtApi.get.market.candlesByStockId;

  const quotesByStockIds = qtApi.get.quotes.byStockIds;
  const quotesByStrategies = qtApi.get.quotes.byStrategies;
  const quotesByOptionsIds = qtApi.get.quotes.optionsQuotes.byOptionsIds;
  const quotesFromFilter = qtApi.get.quotes.optionsQuotes.fromFilter;

  const symbolsOptionChainsByStockId = qtApi.get.symbols.optionChains.byStockId;
  const symbolsByStockIds = qtApi.get.symbols.byStockIds;

  const searchAllStocks = qtApi.get.search.allStocks;
  const searchStock = qtApi.get.search.stock;
  const searchCountResults = qtApi.get.search.countResults;

  const api: IQuestradeApi = {
    currentAccount,
    myBalances,
    serverTime,
    get: {
      account: {
        activities: accountActivities,
        allAccounts: accountAllAccounts,
        balances: accountBalances,
        executions: accountExecutions,
        orders: accountOrders,
        ordersByIds: accountOrdersByIds,
        positions: accountPositions,
      },
      market: {
        allMarkets: marketAllMarkets,
        candlesByStockId: marketCandlesByStockId,
      },
      quotes: {
        byStockIds: quotesByStockIds,
        byStrategies: quotesByStrategies,
        optionsQuotes: {
          byOptionsIds: quotesByOptionsIds,
          fromFilter: quotesFromFilter,
        },
      },
      symbols: {
        optionChains: {
          byStockId: symbolsOptionChainsByStockId,
        },
        byStockIds: symbolsByStockIds,
      },
      search: {
        allStocks: searchAllStocks,
        stock: searchStock,
        countResults: searchCountResults,
      },
    },
  };
  return api;
};
