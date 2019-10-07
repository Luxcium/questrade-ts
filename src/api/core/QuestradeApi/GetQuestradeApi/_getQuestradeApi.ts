import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../typescript';
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
  const allFunctions = {
    get: {
      accounts: {
        accounts: async () => accounts(),
        activities: (startTime: string) => activities(startTime),
        balances: async () => balances(),
        executions: (startTime: string) => executions(startTime),
        orders: (stateFilter?: string) => orders(stateFilter),
        ordersAll: (startTime: string) => orders('All')(startTime),
        serverTime: async () => serverTime,
        positions: async () => positions,
      },
      markets: {
        candles: (startDate: string) => candles(startDate),
        markets: async () => markets(),
        quotes: {
          byStrategies: async (
            strategyVariantRequestData: StrategyVariantRequest
          ) => marketsQuotesStrategies(strategyVariantRequestData),
          options: async (filters: _Filters) =>
            quotesOptionsbyFilterAndIds(filters),
          byIds: async (ids: number[]) => quotesByIds(ids),
        },
      },
      symbols: {
        optionsById: async (symbolId: number) => optionsById(symbolId),
        byIds: async (symbolIds: number[]) => symbolsByIds(symbolIds),
        symbolSearchAll: async (prefix: string, offset?: number) =>
          symbolSearchAll(prefix, offset),
        search: async (prefix: string, offset?: number) =>
          symbolSearchAndCount(prefix, offset),
        searchCount: async (prefix: string) => symbolSearchCount(prefix),
      },
    },
  };
  return { allFunctions };
};
