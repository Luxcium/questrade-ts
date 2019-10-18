import { _getQuestradeApi } from '../private';
import { Credentials, IQuestradeApi } from '../typescript';

// export const getQuestradeApi = ;

export const questradeApi = async (credentials: Credentials) => {
  const qtApi = await _getQuestradeApi(credentials);
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
