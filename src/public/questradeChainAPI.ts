import { _getQuestradeApi } from '../private/api/_getQuestradeApi';
import { ApiCallQ_ } from '../private/core/next-rate-limiter/queue';
import {
  Credentials,
  OptionsFilters,
  ProxyFactory_,
  StrategyVariantRequest,
} from '../typescript';

export const asyncQuestradeApi = (
  credentials: Credentials,
  apiCallQ: ApiCallQ_,

  proxy: ProxyFactory_ | null,
) => {
  const asyncQtApi = _getQuestradeApi(credentials, apiCallQ, proxy);
  const asyncAccount = asyncQtApi.then(then => then.account);
  const asyncCurrentAccount = asyncQtApi.then(then => then.currentAccount);
  const asyncMyBalances = asyncQtApi.then(then => then.myBalances);
  const asyncServerTime = asyncQtApi.then(then => then.serverTime);
  const asyncGetServerTime = asyncQtApi.then(
    then => then.account.getServerTime,
  );

  const asyncActivities = asyncQtApi.then(then => then.account.getActivities);
  const asyncAllAccounts = asyncQtApi.then(then => then.account.getAllAccounts);
  const asyncBalances = asyncQtApi.then(then => then.account.getBalances);
  const asyncExecutions = asyncQtApi.then(then => then.account.getExecutions);
  const asyncOrders = asyncQtApi.then(then => then.account.getOrders);
  const asyncOrdersByIds = asyncQtApi.then(then => then.account.getOrdersByIds);
  const asyncPositions = asyncQtApi.then(then => then.account.getPositions);
  const asyncAllMarkets = asyncQtApi.then(then => then.market.getAllMarkets);
  const asyncCandlesByStockId = asyncQtApi.then(
    then => then.market.getCandlesByStockId,
  );

  const asyncByOptionsIds = asyncQtApi.then(
    then => then.getOptionsQuotes.byOptionsIds,
  );

  const asyncFromFilter = asyncQtApi.then(
    then => then.getOptionsQuotes.fromFilter,
  );

  const asyncGetQuoteByStockIds = asyncQtApi.then(
    then => then.getQuotes.byStockIds,
  );

  const asyncByStrategies = asyncQtApi.then(
    then => then.getQuotes.byStrategies,
  );

  const asyncByStockId = asyncQtApi.then(
    then => then.getOptionChains.byStockId,
  );

  const asyncGetSymbolByStockIds = asyncQtApi.then(
    then => then.getSymbols.byStockIds,
  );

  const asyncStock = asyncQtApi.then(then => then.search.stock);
  const asyncAllStocks = asyncQtApi.then(then => then.search.allStocks);
  const asyncCountResults = asyncQtApi.then(then => then.search.countResults);
  // Const asyncCountResults = asyncQtApi.then(then => then.search.countResults);
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
    asyncQtApi,
    asyncSearch: search,
    asyncServerTime,
    asyncStock,
  };

  return { ...all };
};

export class ChainApiClass {
  // Public asyncActivities: Promise<(startTime: string) => (endTime: string) => Promise<IAccountActivity[]>>;
  // Public asyncAllAccounts: Promise<() => Promise<IAccount[]>>;
  // Public asyncBalances: Promise<() => Promise<IBalances>>;
  // Public asyncExecutions: Promise<(startTime: string) => (endTime: string) => Promise<IExecution[]>>;
  // Public asyncOrders: Promise<(stateFilter?: string | undefined) => (startTime: string) => (endTime: string) => Promise<IOrder[]>>;
  // Public asyncOrdersByIds: Promise<(orderId: number[]) => Promise<IOrder[]>>;
  // Public asyncPositions: Promise<() => Promise<IPosition[]>>;
  // Public asyncAllStocks: Promise<(prefix: string, offset?: number | undefined) => Promise<ISymbolSearchResult[]>>;
  // Public asyncAllMarkets: Promise<() => Promise<IMarket[]>>;
  // Public asyncByOptionsIds: Promise<(optionIds: number[]) => Promise<IOptionsQuote[]>>;
  // Public asyncByStockId: Promise<(stockId: number) => Promise<IOptionChain[]>>;
  // Public asyncByStrategies: Promise<(strategyVariantRequestData: StrategyVariantRequest) => Promise<IStrategiesQuotes>>;
  // Public asyncAccount: Promise<QtApiAccount>;
  // Public asyncCandlesByStockId: Promise<(symbolID: number) => (interval?: string | undefined) => (startTime: string) => (endTime: string) => Promise<ICandle[]>>;
  // Public asyncCountResults: Promise<(prefix: string) => Promise<number>>;
  // Public asyncCurrentAccount: Promise<string>;
  // Public asyncFromFilter: Promise<(filters: OptionsFilters) => Promise<IOptionsQuote[]>>;
  // Public asyncQuoteByStockIds: Promise<(ids: number[]) => Promise<IQuote[]>>;
  // Public asyncGetServerTime: Promise<() => Promise<Date>>;
  // Public asyncGetSymbolByStockIds: Promise<(stockIds: number[]) => Promise<ISymbol[]>>;
  // Public asyncMyBalances: Promise<QtApiMyBalances>;
  // Public asyncServerTime: Promise<Date | 'ERROR'>;
  // Public asyncStock: Promise<(prefix: string, offset?: number | undefined) => Promise<ISymbolSearchResult[]>>;
  // Public asyncQtApi: Promise<QuestradeApi>;
  public asyncApi;
  // Public market;
  // Public getOptionsQuotes;
  // Public getOptionChains;
  // Public getQuotes;
  // Public getSymbols;
  // Public search;
  public _stockIdList?: number[];
  public _stockId?: number;
  public _symbolName?: string;
  public _orderIdList?: number[];
  public _startTime?: string;
  public _endTime?: string;
  public _interval?: string;
  public _optionIdList?: number[];
  public _offset?: number;
  public _stateFilter?: string;
  public _OptionsFilters?: OptionsFilters;
  public _strategyVariantRequestData?: StrategyVariantRequest;

  public symbolName(symbolName: string, offset?: number) {
    this._symbolName = symbolName;
    this._offset = offset;

    return this;
  }

  public stockId(stockId: number) {
    this._stockId = stockId;

    return this;
  }

  public stockIdList(...idList: number[]) {
    this._stockIdList = idList;

    return this;
  }

  public optionIdList(...values: number[]) {
    this._optionIdList = values;

    return this;
  }

  public orderIdList(...values: number[]) {
    this._orderIdList = values;

    return this;
  }

  public startTime(startTime: string) {
    this._startTime = startTime;

    return this;
  }

  public endTime(endTime: string) {
    this._endTime = endTime;

    return this;
  }

  public interval(interval: string | undefined) {
    this._interval = interval;

    return this;
  }

  public stateFilter(state: string) {
    this._stateFilter = state;

    return this;
  }

  public optionsFilters(filters: OptionsFilters) {
    this._OptionsFilters = filters;

    return this;
  }

  public strategyVariantRequestData(value: StrategyVariantRequest) {
    this._strategyVariantRequestData = value;

    return this;
  }

  constructor(
    private credentials: Credentials,
    private apiCallQ: ApiCallQ_,
    private proxy?: ProxyFactory_,
  ) {
    this.asyncApi = asyncQuestradeApi(
      this.credentials,
      this.apiCallQ,
      this.proxy || null,
    );
    // This.asyncAccount = this.asyncApi.asyncAccount;
    // This.asyncActivities = this.asyncApi.asyncActivities;
    // This.asyncAllAccounts = this.asyncApi.asyncAllAccounts;
    // This.asyncAllMarkets = this.asyncApi.asyncAllMarkets;
    // This.asyncAllStocks = this.asyncApi.asyncAllStocks;
    // This.asyncBalances = this.asyncApi.asyncBalances;
    // This.asyncByOptionsIds = this.asyncApi.asyncByOptionsIds;
    // This.asyncByStockId = this.asyncApi.asyncByStockId;
    // This.asyncByStrategies = this.asyncApi.asyncByStrategies;
    // This.asyncCandlesByStockId = this.asyncApi.asyncCandlesByStockId;
    // This.asyncCountResults = this.asyncApi.asyncCountResults;
    // This.asyncCurrentAccount = this.asyncApi.asyncCurrentAccount;
    // This.asyncExecutions = this.asyncApi.asyncExecutions;
    // This.asyncFromFilter = this.asyncApi.asyncFromFilter;
    // This.getOptionChains = this.asyncApi.asyncGetOptionChains;
    // This.getOptionsQuotes = this.asyncApi.asyncGetOptionsQuotes;
    // This.asyncQuoteByStockIds = this.asyncApi.asyncGetQuoteByStockIds;
    // This.getQuotes = this.asyncApi.asyncGetQuotes;
    // This.asyncGetServerTime = this.asyncApi.asyncGetServerTime;
    // This.asyncGetSymbolByStockIds = this.asyncApi.asyncGetSymbolByStockIds;
    // This.getSymbols = this.asyncApi.asyncGetSymbols;
    // This.market = this.asyncApi.asyncMarket;
    // This.asyncMyBalances = this.asyncApi.asyncMyBalances;
    // This.asyncOrders = this.asyncApi.asyncOrders;
    // This.asyncOrdersByIds = this.asyncApi.asyncOrdersByIds;
    // This.asyncPositions = this.asyncApi.asyncPositions;
    // This.search = this.asyncApi.asyncSearch;
    // This.asyncServerTime = this.asyncApi.asyncServerTime;
    // This.asyncStock = this.asyncApi.asyncStock;
    // This.asyncQtApi = this.asyncApi.asyncQtApi;
    // This.endTime = null;
    // This.startTime = null;
  }
}
void function myFunct(credentials: Credentials, apiCallQ: ApiCallQ_) {
  return new ChainApiClass(credentials, apiCallQ);
};
