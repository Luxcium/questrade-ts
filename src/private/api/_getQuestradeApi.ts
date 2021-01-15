import {
  ClientHandlerFactory,
  Credentials,
  Logger,
  OptionsFilters,
  QuestradeApi,
  StrategyVariantRequest,
} from '../../typescript';
import { void0 } from '../../utils';
import { _clientGetApi, _clientPostApi } from '../routes';
import { _clientAccountGetApi } from '../routes/clientAccountGetApi/_clientAccountGetApi';
import { _getAccounts } from './AccountsCalls/_getAccounts/_getAccounts';
import { _getActivities } from './AccountsCalls/_getActivities/_getActivities';
import { _getBalances } from './AccountsCalls/_getBalances/_getBalances';
import { _myBalances } from './AccountsCalls/_getBalances/_myBalances';
import { _getExecutions } from './AccountsCalls/_getExecutions/_getExecutions';
import { _getOrders } from './AccountsCalls/_getOrders/_getOrders';
import { _getOrdersByIds } from './AccountsCalls/_getOrders/_getOrdersByIds';
import { _getPositions } from './AccountsCalls/_getPositions/_getPositions';
import { _getServerTime } from './AccountsCalls/_getServerTime/_getServerTime';
import {
  _getCandles,
  _getMarkets,
  _getMarketsQuotesStrategies,
  _getOptionsById,
  _getQuotesByIds,
  // _getQuotesOptionsbyFilterAndIds,
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
  _getSymbolsByIds,
  // _getSymbolSearchAndCount,
  _getSymbolSearch,
  _getSymbolSearchAll,
  _getSymbolSearchCount,
} from './MarketsCalls';

export const _getQuestradeApi = async (
  credentials: Credentials,
  proxy?: ClientHandlerFactory,
  errorlog: Logger = (...error: any[]) => error,
): Promise<QuestradeApi> => {
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
    // quotesOptionsbyFilterAndIds,
    quotesOptionsByIds,
    quotesOptionsFilter,
    serverTime,
    symbolsByIds,
    symbolSearchAll,
    // symbolSearchAndCount,
    symbolSearch,
    symbolSearchCount,
  ] = [
    /*
    Argument of type '<R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>'
    is not assignable to
    parameter of type '<R>(endpoint: string) => () => Promise<R>'.ts(2345)
    ,
    handlerOptions: ProxyHandlerOptions,
    , { noCaching: true }
     */
    _getAccounts(_clientGetApi(credentials, proxy), errorlog),
    _getActivities(_clientAccountGetApi(credentials, proxy), errorlog),
    _getBalances(_clientAccountGetApi(credentials, proxy), errorlog),
    _getCandles(_clientGetApi(credentials, proxy), errorlog),
    _getExecutions(_clientAccountGetApi(credentials, proxy), errorlog),
    _getMarkets(_clientGetApi(credentials, proxy), errorlog),
    _getMarketsQuotesStrategies(_clientPostApi(credentials, proxy), errorlog),
    _getOptionsById(_clientGetApi(credentials, proxy), errorlog),
    _getOrders(_clientAccountGetApi(credentials, proxy), errorlog),
    _getOrdersByIds(_clientAccountGetApi(credentials, proxy), errorlog),
    _getPositions(_clientAccountGetApi(credentials, proxy), errorlog),
    _getQuotesByIds(_clientGetApi(credentials, proxy), errorlog),
    // _getQuotesOptionsbyFilterAndIds(credentials,proxy, errorlog),
    _getQuotesOptionsByIds(_clientPostApi(credentials, proxy), errorlog),
    _getQuotesOptionsFilter(
      _clientPostApi(credentials, proxy) /* , errorlog */,
    ),
    _getServerTime(_clientGetApi(credentials, proxy) /* , errorlog */),
    _getSymbolsByIds(_clientGetApi(credentials, proxy), errorlog),
    _getSymbolSearchAll(_clientGetApi(credentials, proxy), errorlog),
    // _getSymbolSearchAndCount(credentials,proxy, errorlog),
    _getSymbolSearch(_clientGetApi(credentials, proxy), errorlog),
    _getSymbolSearchCount(_clientGetApi(credentials, proxy), errorlog),
  ];

  // unused for the moment

  return {
    account: {
      getActivities(startTime: string) {
        return activities(startTime);
      },
      async getAllAccounts() {
        return accounts();
      },

      async getBalances() {
        return balances();
      },
      getExecutions(startTime: string) {
        return executions(startTime);
      },
      getOrders(stateFilter?: string) {
        return orders(stateFilter);
      },
      async getOrdersByIds(orderId: number[]) {
        return ordersByIds(orderId);
      },
      async getPositions() {
        return positions();
      },
      async getServerTime() {
        return serverTime();
      },
    },
    currentAccount: credentials.accountNumber,
    getOptionChains: {
      async byStockId(stockId: number) {
        return optionsById(stockId);
      },
    },

    getOptionsQuotes: {
      async byOptionsIds(optionIds: number[]) {
        return quotesOptionsByIds(optionIds);
      },
      async fromFilter(filters: OptionsFilters) {
        return quotesOptionsFilter(filters);
      },
    },
    getQuotes: {
      async byStockIds(ids: number[]) {
        return quotesByIds(ids);
      },

      async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
        return marketsQuotesStrategies(strategyVariantRequestData);
      },
    },
    getSymbols: {
      async byStockIds(stockIds: number[]) {
        return symbolsByIds(stockIds);
      },
    },
    market: {
      async getAllMarkets() {
        return markets();
      },
      getCandlesByStockId(symbolID: number) {
        return candles(symbolID);
      },
    },

    async myBalances() {
      return _myBalances(await balances());
    },
    search: {
      async allStocks(prefix: string, offset?: number) {
        return symbolSearchAll(prefix, offset);
      },
      async countResults(prefix: string) {
        return symbolSearchCount(prefix);
      },
      async stock(prefix: string, offset?: number) {
        return symbolSearch(prefix, offset);
        // return symbolSearchAndCount(prefix, offset);
      },
    },
    serverTime: credentials.serverTime || 'ERROR',
  };
};
void0(void0);
