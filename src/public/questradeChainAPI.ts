import { questradeApiFactory } from '../private/api/get-questrade-api';
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

  proxy: ((cred: Credentials) => ProxyFactory_) | null,
) => {
  // XXX: WORKING ON questradeApiFactory CALLS
  const asyncQtApi = questradeApiFactory(credentials, apiCallQ, proxy);
  const asyncAccount = asyncQtApi.then(t => t.account);
  const asyncCurrentAccount = asyncQtApi.then(t => t.account.currentAccount);
  const asyncMyBalances = asyncQtApi.then(t => t.myBalances);
  const asyncServerTime = asyncQtApi.then(t => t.serverTime);
  const asyncGetServerTime = asyncQtApi.then(t => t.account.getServerTime);
  const asyncActivities = asyncQtApi.then(t => t.account.getActivities);
  const asyncAllAccounts = asyncQtApi.then(t => t.account.getAllAccounts);
  const asyncBalances = asyncQtApi.then(t => t.account.getBalances);
  const asyncExecutions = asyncQtApi.then(t => t.account.getExecutions);
  const asyncOrders = asyncQtApi.then(t => t.account.getOrders);
  const asyncOrdersByIds = asyncQtApi.then(t => t.account.getOrdersByIds);
  const asyncPositions = asyncQtApi.then(t => t.account.getPositions);
  const asyncAllMarkets = asyncQtApi.then(t => t.market.getAllMarkets);
  const asyncCandlesByStockId = asyncQtApi.then(
    t => t.market.getCandlesByStockId,
  );

  const asyncByOptionsIds = asyncQtApi.then(
    t => t.getOptionsQuotes.byOptionsIds,
  );

  const asyncFromFilter = asyncQtApi.then(t => t.getOptionsQuotes.fromFilter);
  const asyncGetQuoteByStockIds = asyncQtApi.then(t => t.getQuotes.byStockIds);
  const asyncByStrategies = asyncQtApi.then(t => t.getQuotes.byStrategies);
  const asyncByStockId = asyncQtApi.then(t => t.getOptionChains.byStockId);
  const asyncGetSymbolByStockIds = asyncQtApi.then(
    t => t.getSymbols.byStockIds,
  );

  const asyncStock = asyncQtApi.then(t => t.search.stock);
  const asyncAllStocks = asyncQtApi.then(t => t.search.allStocks);
  const asyncCountResults = asyncQtApi.then(t => t.search.countResults);
  // const asyncCountResults = asyncQtApi.then(t => t.search.countResults);
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
  // public asyncActivities: Promise<(startTime: string) => (endTime: string) => Promise<IAccountActivity[]>>;
  // public asyncAllAccounts: Promise<() => Promise<IAccount[]>>;
  // public asyncBalances: Promise<() => Promise<IBalances>>;
  // public asyncExecutions: Promise<(startTime: string) => (endTime: string) => Promise<IExecution[]>>;
  // public asyncOrders: Promise<(stateFilter?: string | undefined) => (startTime: string) => (endTime: string) => Promise<IOrder[]>>;
  // public asyncOrdersByIds: Promise<(orderId: number[]) => Promise<IOrder[]>>;
  // public asyncPositions: Promise<() => Promise<IPosition[]>>;
  // public asyncAllStocks: Promise<(prefix: string, offset?: number | undefined) => Promise<IEquitySymbolResult[]>>;
  // public asyncAllMarkets: Promise<() => Promise<IMarket[]>>;
  // public asyncByOptionsIds: Promise<(optionIds: number[]) => Promise<IOptionsQuote[]>>;
  // public asyncByStockId: Promise<(stockId: number) => Promise<IOptionChain[]>>;
  // public asyncByStrategies: Promise<(strategyVariantRequestData: StrategyVariantRequest) => Promise<IStrategiesQuotes>>;
  // public asyncAccount: Promise<QtApiAccount>;
  // public asyncCandlesByStockId: Promise<(symbolID: number) => (interval?: string | undefined) => (startTime: string) => (endTime: string) => Promise<ICandle[]>>;
  // public asyncCountResults: Promise<(prefix: string) => Promise<number>>;
  // public asyncCurrentAccount: Promise<string>;
  // public asyncFromFilter: Promise<(filters: OptionsFilters) => Promise<IOptionsQuote[]>>;
  // public asyncQuoteByStockIds: Promise<(ids: number[]) => Promise<IQuote[]>>;
  // public asyncGetServerTime: Promise<() => Promise<Date>>;
  // public asyncGetSymbolByStockIds: Promise<(stockIds: number[]) => Promise<ISymbol[]>>;
  // public asyncMyBalances: Promise<QtApiMyBalances>;
  // public asyncServerTime: Promise<Date | 'ERROR'>;
  // public asyncStock: Promise<(prefix: string, offset?: number | undefined) => Promise<IEquitySymbolResult[]>>;
  // public asyncQtApi: Promise<QuestradeApi>;
  public asyncApi;

  // public market;
  // public getOptionsQuotes;
  // public getOptionChains;
  // public getQuotes;
  // public getSymbols;
  // public search;
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
    private proxy?: (cred: Credentials) => ProxyFactory_,
  ) {
    this.asyncApi = asyncQuestradeApi(
      this.credentials,
      this.apiCallQ,
      this.proxy || null,
    );
    // this.asyncAccount = this.asyncApi.asyncAccount;
    // this.asyncActivities = this.asyncApi.asyncActivities;
    // this.asyncAllAccounts = this.asyncApi.asyncAllAccounts;
    // this.asyncAllMarkets = this.asyncApi.asyncAllMarkets;
    // this.asyncAllStocks = this.asyncApi.asyncAllStocks;
    // this.asyncBalances = this.asyncApi.asyncBalances;
    // this.asyncByOptionsIds = this.asyncApi.asyncByOptionsIds;
    // this.asyncByStockId = this.asyncApi.asyncByStockId;
    // this.asyncByStrategies = this.asyncApi.asyncByStrategies;
    // this.asyncCandlesByStockId = this.asyncApi.asyncCandlesByStockId;
    // this.asyncCountResults = this.asyncApi.asyncCountResults;
    // this.asyncCurrentAccount = this.asyncApi.asyncCurrentAccount;
    // this.asyncExecutions = this.asyncApi.asyncExecutions;
    // this.asyncFromFilter = this.asyncApi.asyncFromFilter;
    // this.getOptionChains = this.asyncApi.asyncGetOptionChains;
    // this.getOptionsQuotes = this.asyncApi.asyncGetOptionsQuotes;
    // this.asyncQuoteByStockIds = this.asyncApi.asyncGetQuoteByStockIds;
    // this.getQuotes = this.asyncApi.asyncGetQuotes;
    // this.asyncGetServerTime = this.asyncApi.asyncGetServerTime;
    // this.asyncGetSymbolByStockIds = this.asyncApi.asyncGetSymbolByStockIds;
    // this.getSymbols = this.asyncApi.asyncGetSymbols;
    // this.market = this.asyncApi.asyncMarket;
    // this.asyncMyBalances = this.asyncApi.asyncMyBalances;
    // this.asyncOrders = this.asyncApi.asyncOrders;
    // this.asyncOrdersByIds = this.asyncApi.asyncOrdersByIds;
    // this.asyncPositions = this.asyncApi.asyncPositions;
    // this.search = this.asyncApi.asyncSearch;
    // this.asyncServerTime = this.asyncApi.asyncServerTime;
    // this.asyncStock = this.asyncApi.asyncStock;
    // this.asyncQtApi = this.asyncApi.asyncQtApi;
    // this.endTime = null;
    // this.startTime = null;
  }
}
void function myFunct(credentials: Credentials, apiCallQ: ApiCallQ_) {
  return new ChainApiClass(credentials, apiCallQ);
};
