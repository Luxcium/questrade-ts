import { _getQuestradeApi } from '../private';
import { Credentials, IQuestradeApi } from '../typescript';

// export const getQuestradeApi = ;

export const questradeApi = async (credentials: Credentials) => {
  const qtApi = await _getQuestradeApi(credentials);
  const api: IQuestradeApi = {
    currentAccount: qtApi.currentAccount,
    myBalances: qtApi.myBalances,
    serverTime: qtApi.serverTime,
    // get: {
    account: {
      getActivities: qtApi.account.getActivities,
      getAllAccounts: qtApi.account.getAllAccounts,
      getBalances: qtApi.account.getBalances,
      getExecutions: qtApi.account.getExecutions,
      getOrders: qtApi.account.getOrders,
      getOrdersByIds: qtApi.account.getOrdersByIds,
      getPositions: qtApi.account.getPositions,
      getServerTime: qtApi.account.getServerTime,
    },
    market: {
      getAllMarkets: qtApi.market.getAllMarkets,
      getCandlesByStockId: qtApi.market.getCandlesByStockId,
    },
    getOptionsQuotes: {
      byOptionsIds: qtApi.getOptionsQuotes.byOptionsIds,
      fromFilter: qtApi.getOptionsQuotes.fromFilter,
    },
    getQuotes: {
      byStockIds: qtApi.getQuotes.byStockIds,
      // byStrategies: qtApi.getQuotes.byStrategies,
    },
    getOptionChains: {
      byStockId: qtApi.getOptionChains.byStockId,
    },
    getSymbols: {
      byStockIds: qtApi.getSymbols.byStockIds,
    },
    search: {
      stock: qtApi.search.stock,
      allStocks: qtApi.search.allStocks,
      countResults: qtApi.search.countResults,
    },
  };
  return api;
};
