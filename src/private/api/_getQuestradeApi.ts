// import { errorlog } from '../../resources/side-effects';
import type {
  Credentials,
  Logger,
  OptionsFilters,
  ProxyFactory_,
  QuestradeApi,
  StrategyVariantRequest,
} from '../../typescript';
import { void0 } from '../../utils';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
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
  apiCallQ: ApiCallQ_,
  proxy: ProxyFactory_ | null,
  errorlog: Logger = (...error: any[]) => error,
  // eslint-disable-next-line require-await
): Promise<QuestradeApi> => {
  const getApi = () => _clientGetApi(credentials, apiCallQ, proxy);
  const postApi = () => _clientPostApi(credentials, apiCallQ, proxy);
  const accGetApi = () => _clientAccountGetApi(credentials, apiCallQ, proxy);
  const api = {
    accounts: _getAccounts(getApi(), errorlog),
    activities: _getActivities(accGetApi(), errorlog),
    balances: _getBalances(accGetApi(), errorlog),
    candles: _getCandles(getApi(), errorlog),
    executions: _getExecutions(accGetApi(), errorlog),
    markets: _getMarkets(getApi(), errorlog),
    marketsQuotesStrategies: _getMarketsQuotesStrategies(postApi(), errorlog),
    optionsById: _getOptionsById(getApi(), errorlog),
    orders: _getOrders(accGetApi(), errorlog),
    ordersByIds: _getOrdersByIds(accGetApi(), errorlog),
    positions: _getPositions(accGetApi(), errorlog),
    quotesByIds: _getQuotesByIds(getApi(), errorlog),
    quotesOptionsByIds: _getQuotesOptionsByIds(postApi(), errorlog),
    quotesOptionsFilter: _getQuotesOptionsFilter(postApi() /* , errorlog */),
    serverTime: _getServerTime(getApi() /* , errorlog */),
    symbolSearch: _getSymbolSearch(getApi(), errorlog),
    symbolSearchAll: _getSymbolSearchAll(getApi(), errorlog),
    symbolSearchCount: _getSymbolSearchCount(getApi(), errorlog),
    symbolsByIds: _getSymbolsByIds(getApi(), errorlog),
  };

  void apiCallQ;

  return {
    account: {
      getActivities(startTime: string) {
        return api.activities(startTime);
      },
      async getAllAccounts() {
        return api.accounts();
      },
      async getBalances() {
        return api.balances();
      },
      getExecutions(startTime: string) {
        return api.executions(startTime);
      },
      getOrders(stateFilter?: string) {
        return api.orders(stateFilter);
      },
      async getOrdersByIds(orderId: number[]) {
        return api.ordersByIds(orderId);
      },
      async getPositions() {
        return api.positions();
      },
      async getServerTime() {
        return api.serverTime();
      },
    },
    currentAccount: credentials.accountNumber,
    getOptionChains: {
      async byStockId(stockId: number) {
        return api.optionsById(stockId);
      },
    },
    getOptionsQuotes: {
      async byOptionsIds(optionIds: number[]) {
        return api.quotesOptionsByIds(optionIds);
      },
      async fromFilter(filters: OptionsFilters) {
        return api.quotesOptionsFilter(filters);
      },
    },
    getQuotes: {
      async byStockIds(ids: number[]) {
        return api.quotesByIds(ids);
      },
      async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
        return api.marketsQuotesStrategies(strategyVariantRequestData);
      },
    },
    getSymbols: {
      async byStockIds(stockIds: number[]) {
        return api.symbolsByIds(stockIds);
      },
    },
    market: {
      async getAllMarkets() {
        return api.markets();
      },
      getCandlesByStockId(symbolID: number) {
        return api.candles(symbolID);
      },
    },
    async myBalances() {
      return _myBalances(await api.balances());
    },
    search: {
      async allStocks(prefix: string, offset?: number) {
        return api.symbolSearchAll(prefix, offset);
      },
      async countResults(prefix: string) {
        return api.symbolSearchCount(prefix);
      },
      async stock(prefix: string, offset?: number) {
        return api.symbolSearch(prefix, offset);
        // return symbolSearchAndCount(prefix, offset);
      },
    },
    serverTime: credentials.serverTime || 'ERROR',
  };
};

void0(void0);
// = [
/*
    argument of type '<R>(endpoint: string, handlerOptions: ProxyHandlerOptions) => () => Promise<R>'
    is not assignable to
    parameter of type '<R>(endpoint: string) => () => Promise<R>'.ts(2345)
    ,
    handlerOptions: ProxyHandlerOptions,
    , { noCaching: true }
     */
// _getAccounts(getApi(), errorlog),
// _getActivities(accGetApi(), errorlog),
// _getBalances(accGetApi(), errorlog),
// _getCandles(getApi(), errorlog),
// _getExecutions(accGetApi(), errorlog),
// _getMarkets(getApi(), errorlog),
// _getMarketsQuotesStrategies(postApi(), errorlog),
// _getOptionsById(getApi(), errorlog),
// _getOrders(accGetApi(), errorlog),
// _getOrdersByIds(accGetApi(), errorlog),
// _getPositions(accGetApi(), errorlog),
// _getQuotesByIds(getApi(), errorlog),
// // _getQuotesOptionsbyFilterAndIds(credentials,proxy, errorlog),
// _getQuotesOptionsByIds(postApi(), errorlog),
// _getQuotesOptionsFilter(
//   postApi() /* , errorlog */,
// ),
// _getServerTime(getApi() /* , errorlog */),
// _getSymbolsByIds(getApi(), errorlog),
// _getSymbolSearchAll(getApi(), errorlog),
// // _getSymbolSearchAndCount(credentials,proxy, errorlog),
// _getSymbolSearch(getApi(), errorlog),
// _getSymbolSearchCount(getApi(), errorlog),
// ];
// unused for the moment
// symbolSearchAndCount:    // _getSymbolSearchAndCount(credentials,proxy, errorlog),
// quotesOptionsbyFilterAndIds:    // _getQuotesOptionsbyFilterAndIds(credentials,proxy, errorlog),
