import { void0 } from '../../../utils';
import {
  Credentials,
  IQuestradeApi,
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

export const _getQuestradeApi = async (
  credentials: Credentials
): Promise<IQuestradeApi> => {
  // const [
  //   getAccounts,
  //   getActivities,
  //   getBalances,
  //   getCandles,
  //   getExecutions,
  //   getMarkets,
  //   getMarketsQuotesStrategies,
  //   getOptionsById,
  //   getOrders,
  //   getOrdersByIds,
  //   getPositions,
  //   getQuotesByIds,
  //   getQuotesOptionsbyFilterAndIds,
  //   getQuotesOptionsByIds,
  //   getQuotesOptionsFilter,
  //   getServerTime,
  //   getSymbolsByIds,
  //   getSymbolSearchAll,
  //   getSymbolSearchAndCount,
  //   getSymbolSearchCount,
  // ] = [
  //   _getAccounts,
  //   _getActivities,
  //   _getBalances,
  //   _getCandles,
  //   _getExecutions,
  //   _getMarkets,
  //   _getMarketsQuotesStrategies,
  //   _getOptionsById,
  //   _getOrders,
  //   _getOrdersByIds,
  //   _getPositions,
  //   _getQuotesByIds,
  //   _getQuotesOptionsbyFilterAndIds,
  //   _getQuotesOptionsByIds,
  //   _getQuotesOptionsFilter,
  //   _getServerTime,
  //   _getSymbolsByIds,
  //   _getSymbolSearchAll,
  //   _getSymbolSearchAndCount,
  //   _getSymbolSearchCount,
  // ];

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
    _getAccounts(credentials),
    _getActivities(credentials),
    _getBalances(credentials),
    _getCandles(credentials),
    _getExecutions(credentials),
    _getMarkets(credentials),
    _getMarketsQuotesStrategies(credentials),
    _getOptionsById(credentials),
    _getOrders(credentials),
    _getOrdersByIds(credentials),
    _getPositions(credentials),
    _getQuotesByIds(credentials),
    _getQuotesOptionsbyFilterAndIds(credentials),
    _getQuotesOptionsByIds(credentials),
    _getQuotesOptionsFilter(credentials),
    _getServerTime(credentials),
    _getSymbolsByIds(credentials),
    _getSymbolSearchAll(credentials),
    _getSymbolSearchAndCount(credentials),
    _getSymbolSearchCount(credentials),
  ];
  // unused for the moment
  void0(quotesOptionsbyFilterAndIds);

  return {
    async myBalances() {
      return _myBalances(await balances());
    },
    currentAccount: credentials.accountNumber,
    serverTime: credentials.serverTime || 'ERROR',
    get: {
      account: {
        activities(startTime: string) {
          return activities(startTime);
        },
        orders(stateFilter?: string) {
          return orders(stateFilter);
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
        async serverTime() {
          return serverTime();
        },
      },
      market: {
        async allMarkets() {
          return markets();
        },
        candlesByStockId(symbolID: number) {
          return candles(symbolID);
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
