import { _getQuestradeApi } from '../private';
import { ClientProxyHandler, Credentials } from '../typescript';

// export const getQuestradeApi = ;

export const questradeApi = async (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => {
  const qtApi = await _getQuestradeApi(credentials, proxy);
  return {
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
    currentAccount: qtApi.currentAccount,
    getOptionChains: {
      byStockId: qtApi.getOptionChains.byStockId,
    },

    getOptionsQuotes: {
      byOptionsIds: qtApi.getOptionsQuotes.byOptionsIds,
      fromFilter: qtApi.getOptionsQuotes.fromFilter,
    },
    getQuotes: {
      byStockIds: qtApi.getQuotes.byStockIds,
      byStrategies: qtApi.getQuotes.byStrategies,
    },
    getSymbols: {
      byStockIds: qtApi.getSymbols.byStockIds,
    },
    market: {
      getAllMarkets: qtApi.market.getAllMarkets,
      getCandlesByStockId: qtApi.market.getCandlesByStockId,
    },
    myBalances: qtApi.myBalances,
    search: {
      allStocks: qtApi.search.allStocks,
      countResults: qtApi.search.countResults,
      stock: qtApi.search.stock,
    },
    serverTime: qtApi.serverTime,
  };
};

export const chainApi = {};
