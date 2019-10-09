import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../../typescript';
import { _getAccounts } from '../AccountsCalls/_getAccounts';
import { _getActivities } from '../AccountsCalls/_getActivities';
import { _getBalances } from '../AccountsCalls/_getBalances';
import { _getExecutions } from '../AccountsCalls/_getExecutions';
import { _getOrders, _getOrdersByIds } from '../AccountsCalls/_getOrders';
import { _getPositions } from '../AccountsCalls/_getPositions';
import { _getServerTime } from '../AccountsCalls/_getServerTime';
import { _getCandles } from '../MarketsCalls/_getCandles';
import { _getMarkets } from '../MarketsCalls/_getMarkets';
import { _getOptionsById } from '../MarketsCalls/_getOptionsById';
import { _getQuotesByIds } from '../MarketsCalls/_getQuotesByIds';
import { _getSymbolsByIds } from '../MarketsCalls/_getSymbolsByIds';
import {
  _getSymbolSearchAll,
  _getSymbolSearchCount,
  _symbolSearchAndCount as _getSymbolSearchAndCount,
} from '../MarketsCalls/_getSymbolSearch';
import { _quotesOptionsbyFilterAndIds as _getQuotesOptionsbyFilterAndIds } from '../MarketsCalls/_marketsQuotesOptions';
import { _Filters } from '../MarketsCalls/_marketsQuotesOptions/typescript';
import { _marketsQuotesStrategies as _getMarketsQuotesStrategies } from '../MarketsCalls/_marketsQuotesStrategies';
import { StrategyVariantRequest } from '../MarketsCalls/_marketsQuotesStrategies/typescript';

export const _getQuestradeApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => {
  const [
    getAccounts,
    getActivities,
    getBalances,
    getCandles,
    getExecutions,
    getMarkets,
    getOptionsById,
    getOrders,
    getOrdersByIds,
    getPositions,
    getQuotesByIds,
    getServerTime,
    getSymbolsByIds,
    getSymbolSearchAll,
    getSymbolSearchCount,
    getMarketsQuotesStrategies,
    getQuotesOptionsbyFilterAndIds,
    getSymbolSearchAndCount,
  ] = [
    _getAccounts(_axios),
    _getActivities(_axios),
    _getBalances(_axios),
    _getCandles(_axios),
    _getExecutions(_axios),
    _getMarkets(_axios),
    _getOptionsById(_axios),
    _getOrders(_axios),
    _getOrdersByIds(_axios),
    _getPositions(_axios),
    _getQuotesByIds(_axios),
    _getServerTime(_axios),
    _getSymbolsByIds(_axios),
    _getSymbolSearchAll(_axios),
    _getSymbolSearchCount(_axios),
    _getMarketsQuotesStrategies(_axios),
    _getQuotesOptionsbyFilterAndIds(_axios),
    _getSymbolSearchAndCount(_axios),
  ];

  const [
    accounts,
    activities,
    balances,
    candles,
    executions,
    markets,
    optionsById,
    orders,
    ordersByIds,
    positions,
    quotesByIds,
    serverTime,
    symbolsByIds,
    symbolSearchAll,
    symbolSearchCount,
    marketsQuotesStrategies,
    quotesOptionsbyFilterAndIds,
    symbolSearchAndCount,
  ] = [
    getAccounts(credentials),
    getActivities(credentials),
    getBalances(credentials),
    getCandles(credentials),
    getExecutions(credentials),
    getMarkets(credentials),
    getOptionsById(credentials),
    getOrders(credentials),
    getOrdersByIds(credentials),
    getPositions(credentials),
    getQuotesByIds(credentials),
    getServerTime(credentials),
    getSymbolsByIds(credentials),
    getSymbolSearchAll(credentials),
    getSymbolSearchCount(credentials),
    getMarketsQuotesStrategies(credentials),
    getQuotesOptionsbyFilterAndIds(credentials),
    getSymbolSearchAndCount(credentials),
  ];
  return {
    setAccount() {
      return 'NOT IMPLEMENTED';
    },
    async getServerTime() {
      return getServerTime(credentials)();
    },
    get: {
      accounts: {
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
        async time() {
          return serverTime();
        },
      },
      markets: {
        candlesById(startDate: string) {
          return candles(startDate);
        },
        quotes: {
          async byStrategies(
            strategyVariantRequestData: StrategyVariantRequest
          ) {
            return marketsQuotesStrategies(strategyVariantRequestData);
          },
          async options(filters: _Filters) {
            return quotesOptionsbyFilterAndIds(filters);
          },
          async byIds(ids: number[]) {
            return quotesByIds(ids);
          },
        },
        async allMarkets() {
          return markets();
        },
      },
      symbols: {
        async optionsById(symbolId: number) {
          return optionsById(symbolId);
        },
        async byIds(symbolIds: number[]) {
          return symbolsByIds(symbolIds);
        },
        async search(prefix: string, offset?: number) {
          return symbolSearchAndCount(prefix, offset);
        },
        async searchAll(prefix: string, offset?: number) {
          return symbolSearchAll(prefix, offset);
        },
        async searchCount(prefix: string) {
          return symbolSearchCount(prefix);
        },
      },
    },
  };
};
/*
  return {
    setAccount,
    getServerTime,
    get: {
      accounts: {
        activities,
        orders,
        ordersAll,
        ordersByIds,
        executions,
        balances,
        positions,
        allAccounts: allAccounts,
        time: getServerTime,
      },
      markets: {
        candlesById: marketCandlesById,
        quotes: {
          byStrategies,
          options,
          byIds: marketsQuotesByIds,
        },
        allMarkets: markets,
      },
      symbols: {
        optionsById,
        byIds: symbolsByIds,
        search,
        searchAll,
        searchCount,
      },
    },
  };
};
*/
