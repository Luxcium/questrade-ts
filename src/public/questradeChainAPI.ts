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
  const asyncGetQuoteByStockIds = asyncQtApi.then(then => then.getQuotes.byStockIds);
  const asyncByStrategies = asyncQtApi.then(then => then.getQuotes.byStrategies);
  const asyncByStockId = asyncQtApi.then(then => then.getOptionChains.byStockId);
  const asyncGetSymbolByStockIds = asyncQtApi.then(then => then.getSymbols.byStockIds);
  const asyncStock = asyncQtApi.then(then => then.search.stock);
  const asyncAllStocks = asyncQtApi.then(then => then.search.allStocks);
  const asyncCountResults = asyncQtApi.then(then => then.search.countResults);
  // const asyncCountResults = asyncQtApi.then(then => then.search.countResults);

  const market = {
    asyncAllMarkets,
    asyncCandlesByStockId,
  };
  const getOptionsQuotes = {
    asyncByOptionsIds,
    asyncFromFilter,
  };

  const getQuotes = {
    asyncByStrategies,
    asyncGetQuoteByStockIds,
  };
  const getOptionChains = {
    asyncByStockId,
  };
  const getSymbols = {
    asyncGetSymbolByStockIds,
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
  const all = {
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
    asyncGetQuoteByStockIds,
    asyncGetQuotes: getQuotes,
    asyncGetServerTime,
    asyncGetSymbolByStockIds,
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

  return { ...all };
};

export class ChainApiClass {
  private asyncApi;
  public asyncAccount;
  public asyncActivities;
  public asyncAllAccounts;
  public asyncAllMarkets;
  public asyncAllStocks;
  public asyncBalances;
  public asyncByOptionsIds;
  public asyncByStockId;
  public asyncByStrategies;
  public asyncCandlesByStockId;
  public asyncCountResults;
  public asyncCurrentAccount;
  public asyncExecutions;
  public asyncFromFilter;
  public asyncGetOptionChains;
  public asyncGetOptionsQuotes;
  public asyncGetQuoteByStockIds;
  public asyncGetQuotes;
  public asyncGetServerTime;
  public asyncGetSymbolByStockIds;
  public asyncGetSymbols;
  public asyncMarket;
  public asyncMyBalances;
  public asyncOrders;
  public asyncOrdersByIds;
  public asyncPositions;
  public asyncSearch;
  public asyncServerTime;
  public asyncStock;
  public asyncQtApi;
  constructor(public credentials: Credentials, public proxy?: ClientProxyHandler) {
    this.asyncApi = asyncQuestradeApi(this.credentials, this.proxy);
    this.asyncAccount = this.asyncApi.asyncAccount;
    this.asyncActivities = this.asyncApi.asyncActivities;
    this.asyncAllAccounts = this.asyncApi.asyncAllAccounts;
    this.asyncAllMarkets = this.asyncApi.asyncAllMarkets;
    this.asyncAllStocks = this.asyncApi.asyncAllStocks;
    this.asyncBalances = this.asyncApi.asyncBalances;
    this.asyncByOptionsIds = this.asyncApi.asyncByOptionsIds;
    this.asyncByStockId = this.asyncApi.asyncByStockId;
    this.asyncByStrategies = this.asyncApi.asyncByStrategies;
    this.asyncCandlesByStockId = this.asyncApi.asyncCandlesByStockId;
    this.asyncCountResults = this.asyncApi.asyncCountResults;
    this.asyncCurrentAccount = this.asyncApi.asyncCurrentAccount;
    this.asyncExecutions = this.asyncApi.asyncExecutions;
    this.asyncFromFilter = this.asyncApi.asyncFromFilter;
    this.asyncGetOptionChains = this.asyncApi.asyncGetOptionChains;
    this.asyncGetOptionsQuotes = this.asyncApi.asyncGetOptionsQuotes;
    this.asyncGetQuoteByStockIds = this.asyncApi.asyncGetQuoteByStockIds;
    this.asyncGetQuotes = this.asyncApi.asyncGetQuotes;
    this.asyncGetServerTime = this.asyncApi.asyncGetServerTime;
    this.asyncGetSymbolByStockIds = this.asyncApi.asyncGetSymbolByStockIds;
    this.asyncGetSymbols = this.asyncApi.asyncGetSymbols;
    this.asyncMarket = this.asyncApi.asyncMarket;
    this.asyncMyBalances = this.asyncApi.asyncMyBalances;
    this.asyncOrders = this.asyncApi.asyncOrders;
    this.asyncOrdersByIds = this.asyncApi.asyncOrdersByIds;
    this.asyncPositions = this.asyncApi.asyncPositions;
    this.asyncSearch = this.asyncApi.asyncSearch;
    this.asyncServerTime = this.asyncApi.asyncServerTime;
    this.asyncStock = this.asyncApi.asyncStock;
    this.asyncQtApi = this.asyncApi.asyncQtApi;
  }
}
void function myFunct(credentials: Credentials) {
  const myObj = new ChainApiClass(credentials);
  return myObj;
};
