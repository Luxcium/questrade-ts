import { _getQuestradeApi } from '../private';
import { ClientProxyHandler, Credentials } from '../typescript';

export const asyncQuestradeApi = (credentials: Credentials, proxy?: ClientProxyHandler) => {
  const asyncQtApi = _getQuestradeApi(credentials, proxy);
  const asyncAccount = asyncQtApi.then(then => then.account);
  const asyncCurrentAccount = asyncQtApi.then(then => then.currentAccount);
  const asyncMyBalances = asyncQtApi.then(then => then.myBalances);
  const asyncServerTime = asyncQtApi.then(then => then.serverTime);
  const asyncGetServerTime = asyncQtApi.then(then => then.account.getServerTime);
  const asyncActivities = asyncQtApi.then(then => then.account.getActivities);
  const asyncAllAccounts = asyncQtApi.then(then => then.account.getAllAccounts);
  const asyncBalances = asyncQtApi.then(then => then.account.getBalances);
  const asyncExecutions = asyncQtApi.then(then => then.account.getExecutions);
  const asyncOrders = asyncQtApi.then(then => then.account.getOrders);
  const asyncOrdersByIds = asyncQtApi.then(then => then.account.getOrdersByIds);
  const asyncPositions = asyncQtApi.then(then => then.account.getPositions);
  const asyncAllMarkets = asyncQtApi.then(then => then.market.getAllMarkets);
  const asyncCandlesByStockId = asyncQtApi.then(then => then.market.getCandlesByStockId);
  const asyncByOptionsIds = asyncQtApi.then(then => then.getOptionsQuotes.byOptionsIds);
  const asyncFromFilter = asyncQtApi.then(then => then.getOptionsQuotes.fromFilter);
  const asyncGetQuote = asyncQtApi.then(then => then.getQuotes.byStockIds);
  const asyncByStrategies = asyncQtApi.then(then => then.getQuotes.byStrategies);
  const asyncByStockId = asyncQtApi.then(then => then.getOptionChains.byStockId);
  const asyncGetSymbol = asyncQtApi.then(then => then.getSymbols.byStockIds);
  const asyncStock = asyncQtApi.then(then => then.search.stock);
  const asyncAllStocks = asyncQtApi.then(then => then.search.allStocks);
  const asyncCountResults = asyncQtApi.then(then => then.search.countResults);

  const market = {
    getAllMarkets: asyncAllMarkets,
    getCandlesByStockId: asyncCandlesByStockId,
  };
  const getOptionsQuotes = {
    asyncByOptionsIds,
    asyncFromFilter,
  };

  const getQuotes = {
    asyncByStrategies,
    byStockIds: asyncGetQuote,
  };
  const getOptionChains = {
    asyncByStockId,
  };
  const getSymbols = {
    byStockIds: asyncGetSymbol,
  };

  const search = {
    asyncAllStocks,
    asyncCountResults,
    asyncStock,
  };

  const api = {
    asyncAccount,
    asyncCurrentAccount,
    asyncMyBalances,
    asyncServerTime,
    getOptionChains,
    getOptionsQuotes,
    getQuotes,
    getSymbols,
    market,
    search,
  };
  const all_ = {
    asyncAccount,
    asyncActivities,
    asyncAllAccounts,
    asyncAllMarkets,
    asyncAllStocks,
    asyncApi: api,
    asyncBalances,
    asyncByOptionsIds,
    asyncByStockId,
    asyncByStrategies,
    asyncCandlesByStockId,
    asyncCountResults,
    asyncCurrentAccount,
    asyncExecutions,
    asyncFromFilter,
    asyncGetOptionChains: getOptionChains,
    asyncGetOptionsQuotes: getOptionsQuotes,
    asyncGetQuote,
    asyncGetQuotes: getQuotes,
    asyncGetServerTime,
    asyncGetSymbol,
    asyncGetSymbols: getSymbols,
    asyncMarket: market,
    asyncMyBalances,
    asyncOrders,
    asyncOrdersByIds,
    asyncPositions,
    asyncSearch: search,
    asyncServerTime,
    asyncStock,
    asyncQtApi,
  };

  return { ...all_ };
};

export const chainApi = {};
