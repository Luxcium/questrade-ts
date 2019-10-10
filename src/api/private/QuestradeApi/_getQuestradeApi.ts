import { AxiosStatic, default as axios } from 'axios';
import {
  Credentials,
  IQuestradeApi,
  OptionsFilters,
  StrategyVariantRequest,
} from '../../typescript';
import { void0 } from '../../utils';
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
): Promise<IQuestradeApi> => {
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
  // unused for the moment
  void0(quotesOptionsbyFilterAndIds);

  return {
    myBalances: _myBalances(await balances()),
    currentAccount: credentials.accountNumber,
    serverTime: await serverTime(),
    get: {
      account: {
        activities(startTime: string) {
          return activities(startTime);
        },
        orders(stateFilter?: string) {
          return orders(stateFilter);
        },
        allOrders(startTime: string) {
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
      market: {
        async allMarkets() {
          return markets();
        },
        candlesByStockId(startDate: string) {
          return candles(startDate);
        },
      },
      quotes: {
        optionsQuotes: {
          async fromFilter(filters: OptionsFilters) {
            return quotesOptionsFilter(filters);
          },
          async byOptionsIds(optionIds: number[]) {
            return quotesOptionsByIds(optionIds);
          },
        },
        async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
          return marketsQuotesStrategies(strategyVariantRequestData);
        },

        async byStockIds(ids: number[]) {
          return quotesByIds(ids);
        },
      },
      search: {
        async stock(prefix: string, offset?: number) {
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
          async byStockId(stockId: number) {
            return optionsById(stockId);
          },
        },
        async byStockIds(stockIds: number[]) {
          return symbolsByIds(stockIds);
        },
      },
    },
  };
};
