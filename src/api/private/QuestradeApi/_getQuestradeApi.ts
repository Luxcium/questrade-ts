import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  IAccount,
  IAccountActivity,
  IBalances,
  ICandle,
  IExecution,
  IMarket,
  IOptionChain,
  IOptionsQuotes,
  IOrder,
  IPosition,
  IQuote,
  IStrategiesQuotes,
  ISymbol,
  ISymbolSearchResult,
  OptionsFilters,
  StrategyVariantRequest,
} from '../../typescript';
import {
  _getAccounts,
  _getActivities,
  _getBalances,
  _getExecutions,
  _getOrders,
  _getOrdersByIds,
  _getPositions,
  _getServerTime,
  _myBalances,
} from './AccountsCalls';
import {
  _getCandles,
  _getMarkets,
  _getMarketsQuotesStrategies,
  _getOptionsById,
  _getQuotesByIds,
  _getQuotesOptionsbyFilterAndIds,
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
  _getSymbolsByIds,
  _getSymbolSearchAll,
  _getSymbolSearchAndCount,
  _getSymbolSearchCount,
} from './MarketsCalls';

export const _getQuestradeApi = (_axios: AxiosStatic = axios) => async (
  credentials: Credentials
) => {
  const [
    getAccounts,
    getActivities,
    getBalances,
    getCandles,
    getExecutions,
    getMarkets,
    getMarketsQuotesStrategies,
    getOptionsById,
    getOrders,
    getOrdersByIds,
    getPositions,
    getQuotesByIds,
    getQuotesOptionsbyFilterAndIds,
    getQuotesOptionsByIds,
    getQuotesOptionsFilter,
    getServerTime,
    getSymbolsByIds,
    getSymbolSearchAll,
    getSymbolSearchAndCount,
    getSymbolSearchCount,
  ] = [
    _getAccounts(_axios),
    _getActivities(_axios),
    _getBalances(_axios),
    _getCandles(_axios),
    _getExecutions(_axios),
    _getMarkets(_axios),
    _getMarketsQuotesStrategies(_axios),
    _getOptionsById(_axios),
    _getOrders(_axios),
    _getOrdersByIds(_axios),
    _getPositions(_axios),
    _getQuotesByIds(_axios),
    _getQuotesOptionsbyFilterAndIds(_axios),
    _getQuotesOptionsByIds(_axios),
    _getQuotesOptionsFilter(_axios),
    _getServerTime(_axios),
    _getSymbolsByIds(_axios),
    _getSymbolSearchAll(_axios),
    _getSymbolSearchAndCount(_axios),
    _getSymbolSearchCount(_axios),
  ];

  const [
    accounts,
    activities,
    balances,
    candles,
    executions,
    markets,
    marketsQuotesStrategies,
    optionsById,
    orders,
    ordersByIds,
    positions,
    quotesByIds,
    quotesOptionsbyFilterAndIds,
    quotesOptionsByIds,
    quotesOptionsFilter,
    serverTime,
    symbolsByIds,
    symbolSearchAll,
    symbolSearchAndCount,
    symbolSearchCount,
  ] = [
    getAccounts(credentials),
    getActivities(credentials),
    getBalances(credentials),
    getCandles(credentials),
    getExecutions(credentials),
    getMarkets(credentials),
    getMarketsQuotesStrategies(credentials),
    getOptionsById(credentials),
    getOrders(credentials),
    getOrdersByIds(credentials),
    getPositions(credentials),
    getQuotesByIds(credentials),
    getQuotesOptionsbyFilterAndIds(credentials),
    getQuotesOptionsByIds(credentials),
    getQuotesOptionsFilter(credentials),
    getServerTime(credentials),
    getSymbolsByIds(credentials),
    getSymbolSearchAll(credentials),
    getSymbolSearchAndCount(credentials),
    getSymbolSearchCount(credentials),
  ];

  // const myBalances =  _myBalances()
  return {
    myBalances: _myBalances(await balances()),
    currentAccount: credentials.accountNumber,
    getServerTime: await serverTime(),
    get: {
      account: {
        activities(startTime: string) {
          return activities(startTime);
        },
        orders(stateFilter?: string) {
          return orders(stateFilter);
        },
        ordersAll(startTime: string) {
          return orders('All')(startTime);
        },
        async ordersByIds(orderId: number[]) {
          return ordersByIds(orderId);
        },
        executions(startTime: string) {
          return executions(startTime);
        },
        async balances() {
          return balances();
        },
        async positions() {
          return positions();
        },
        async allAccounts() {
          return accounts();
        },
      },
      markets: {
        async allMarkets() {
          return markets();
        },
        candlesById(startDate: string) {
          return candles(startDate);
        },
      },
      quotes: {
        async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
          return marketsQuotesStrategies(strategyVariantRequestData);
        },

        optionsQuotes: {
          async optionsIds(optionIds: number[]) {
            return quotesOptionsByIds(optionIds);
          },
          async filter(filters: OptionsFilters) {
            return quotesOptionsFilter(filters);
          },
        },
        async stockQuotesByIds(ids: number[]) {
          return quotesByIds(ids);
        },
      },
      search: {
        async stocks(prefix: string, offset?: number) {
          return symbolSearchAndCount(prefix, offset);
        },
        async allStocks(prefix: string, offset?: number) {
          return symbolSearchAll(prefix, offset);
        },
        async countResults(prefix: string) {
          return symbolSearchCount(prefix);
        },
      },
      symbols: {
        optionChains: {
          async byStockId(symbolId: number) {
            return optionsById(symbolId);
          },
        },
        async stockByIds(symbolIds: number[]) {
          return symbolsByIds(symbolIds);
        },
      },
    },
  };
  // return {
  //   qtApi,
  //   account() {
  //     return 'NOT IMPLEMENTED';
  //   },
  //   async getServerTime() {
  //     return serverTime();
  //   },
  //   get: {
  //     quotesOptionsByIds,
  //     quotesOptionsFilter,

  //     markets: {
  //
  //       quotes: {
  //         async byStrategies(
  //           strategyVariantRequestData: StrategyVariantRequest
  //         ) {
  //           return marketsQuotesStrategies(strategyVariantRequestData);
  //         },
  //         async options(filters: OptionsFilters) {
  //           return quotesOptionsbyFilterAndIds(filters);
  //         },
  //         async quotesByIds(ids: number[]) {
  //           return quotesByIds(ids);
  //         },
  //       },
  //       async allMarkets() {
  //         return markets();
  //       },
  //     },
  //     symbols: {
  //       async optionChainsById(symbolId: number) {
  //         return optionsById(symbolId);
  //       },
  //       async stockByIds(symbolIds: number[]) {
  //         return symbolsByIds(symbolIds);
  //       },
  //       search: {
  //         async stocks(prefix: string, offset?: number) {
  //           return symbolSearchAndCount(prefix, offset);
  //         },
  //         async allStocks(prefix: string, offset?: number) {
  //           return symbolSearchAll(prefix, offset);
  //         },
  //         async countResults(prefix: string) {
  //           return symbolSearchCount(prefix);
  //         },
  //       },
  //     },
  //   },
  // };
};

export type GetActivities = (
  startTime: string
) => (endTime: string) => Promise<IAccountActivity[]>;

export type GetOrders = (
  stateFilter?: string | undefined
) => (startDate: string) => (endDate: string) => Promise<IOrder[]>;
export type GetOrdersAll = (
  startTime: string
) => (endDate: string) => Promise<IOrder[]>;
export type GetOrdersByIds = (orderId: number[]) => Promise<IOrder[]>;

export type GetExecutions = (
  startTime: string
) => (endDate: string) => Promise<IExecution[]>;

export type GetBalances = () => Promise<IBalances>;

export type GetPositions = () => Promise<IPosition[]>;

export type GetAllAccounts = () => Promise<IAccount[]>;

export type GetServerTime = () => Promise<Date>;

export type GetCandlesById = (
  startDate: string
) => (
  endDate: string
) => (interval?: string) => (symbolID: number) => Promise<ICandle[]>;

export type GetStrategies = (
  strategyVariantRequestData: StrategyVariantRequest
) => Promise<IStrategiesQuotes>;

export type GetOptionsQuotes = (
  filters: OptionsFilters
) => Promise<IOptionsQuotes>;

export type GetStockQuotesByIds = (ids: number[]) => Promise<IQuote[]>;

export type GetAllMarkets = () => Promise<IMarket[]>;

export type GetOptionsChainsById = (
  symbolId: number
) => Promise<IOptionChain[]>;

export type GetSymbolsByIds = (symbolIds: number[]) => Promise<ISymbol[]>;

export type GetStockSearch = (
  prefix: string,
  offset?: number | undefined
) => Promise<ISymbolSearchResult>;

export type GetSearchAll = (
  prefix: string,
  offset?: number | undefined
) => Promise<ISymbolSearchResult[]>;

export type GetSearchCount = (prefix: string) => Promise<number>;
// account

/*

*/
export interface IQuestradeApi {
  myBalances: any;
  getCurrentAccount: any;
  getServerTime: GetServerTime;
  get: {
    account: {
      activities: GetActivities;
      allAccounts: GetAllAccounts;
      balances: GetBalances;
      executions: GetExecutions;
      order: GetOrders;
      ordersAll: GetOrdersAll;
      ordersByIds: GetOrdersByIds;
      positions: GetPositions;
    };
    markets: {
      allMarkets: GetAllMarkets;
      candlesById: GetCandlesById;
    };
    quotes: {
      byStrategies: GetStrategies;
      optionsQuotes: {
        filter: any;
        optionsIds: any;
      };
      stockQuotesByIds: GetStockQuotesByIds;
    };
    search: {
      stocks: GetStockSearch;
      allStocks: GetSearchAll;
      countResults: GetSearchCount;
    };
    symbols: {
      optionChains: {
        byStockId: GetOptionsChainsById;
      };
      stockByIds: GetSymbolsByIds;
    };
  };
}
/*
account
getServerTime
activities
order
ordersAll
ordersByIds
executions
balances
positions
allAccounts
candlesById
byStrategies
options
quotesByIds
allMarkets
optionChainsById
stockByIds
stocks
allStocks
countResults
*/
