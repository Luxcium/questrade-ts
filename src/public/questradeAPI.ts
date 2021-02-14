import { _getQuestradeApi } from '../private/api/_getQuestradeApi';
import { Credentials, ProxyFactory_, QuestradeApi } from '../typescript';

// export const getQuestradeApi = ;

export const questradeApiFactory = async (
  credentials: Credentials,
  proxy?: ((cred: Credentials) => ProxyFactory_) | null,
  errorloger: (error: any) => any = (error: any) => error,
) => {
  const qtApi: QuestradeApi = await (async () => {
    if (proxy) {
      return _getQuestradeApi(credentials, proxy(credentials), errorloger);
    }

    return _getQuestradeApi(credentials, undefined, errorloger);
  })();

  return {
    account: {
      currentAccount: qtApi.currentAccount,
      getActivities: qtApi.account.getActivities,
      getAllAccounts: qtApi.account.getAllAccounts,
      getBalances: qtApi.account.getBalances,
      getExecutions: qtApi.account.getExecutions,
      getOrders: qtApi.account.getOrders,
      getOrdersByIds: qtApi.account.getOrdersByIds,
      getPositions: qtApi.account.getPositions,
      getServerTime: qtApi.account.getServerTime,
    },
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
