/* eslint-disable sort-keys */
// import { errorlog } from '../../resources/side-effects';
import type {
  Credentials,
  Logger,
  OptionsFilters,
  ProxyFactory_,
  StrategyVariantRequest,
} from '../../typescript';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
import { _clientGetApi, _clientPostApi } from '../routes';
import { _clientAccountGetApi } from '../routes/clientAccountGetApi/_clientAccountGetApi';
import { _myBalances } from './AccountsCalls/_getBalances/_myBalances';
import { endPoint } from './apix';

endPoint;

export async function questradeApiFactory(
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ((cred: Credentials) => ProxyFactory_) | null,
  errorlog: Logger = (...error: any[]) => error,
) {
  return questradeApiFactory3(
    questradeApiFactory2(
      questradeApiFactory1(credentials, apiCallQ, proxy, errorlog),
    ),
  );
}

export async function questradeApiFactory1(
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ((cred: Credentials) => ProxyFactory_) | null,
  errorlog: Logger = (...error: any[]) => error,
) {
  const proxyFactory: ProxyFactory_ | null = proxy ? proxy(credentials) : null;
  const get = (placeHolder: any) =>
    placeHolder(_clientGetApi(credentials, apiCallQ, proxyFactory), errorlog);

  const get2 = (placeHolder: any) =>
    placeHolder(_clientGetApi(credentials, apiCallQ, proxyFactory));

  const post = (placeHolder: any) =>
    placeHolder(_clientPostApi(credentials, apiCallQ, proxyFactory), errorlog);

  const post2 = (placeHolder: any) =>
    placeHolder(_clientPostApi(credentials, apiCallQ, proxyFactory));

  const accGet = (placeHolder: any) =>
    placeHolder(
      _clientAccountGetApi(credentials, apiCallQ, proxyFactory),
      errorlog,
    );

  return {
    accGet,
    credentials,
    get,
    get2,
    post,
    post2,
  };
}

export async function questradeApiFactory2(someArgsName: any) {
  const { get, get2, post, post2, accGet, credentials } = await someArgsName;

  return {
    accounts: get(endPoint.accounts),
    activities: accGet(endPoint.activities),
    balances: accGet(endPoint.balances),
    candles: get(endPoint.candles),
    credentials,
    executions: accGet(endPoint.executions),
    equitySymbol: get(endPoint.equitySymbol),
    markets: get(endPoint.markets),
    equitySymbolAll: get(endPoint.equitySymbolAll),
    marketsQuotesStrategies: post(endPoint.strategies),
    equitySymbolCount: get(endPoint.equitySymbolCount),
    optionsById: get(endPoint.optionsById),
    orders: accGet(endPoint.orders),
    ordersByIds: accGet(endPoint.ordersByIds),
    positions: accGet(endPoint.positions),
    quotesByIds: get(endPoint.quotesByIds),
    quotesOptionsByIds: post(endPoint.quotesOptionsByIds),
    quotesOptionsFilter: post2(endPoint.optionsFilter),
    serverTime: get2(endPoint.time),
    symbolsByIds: get(endPoint.symbolsByIds),
  };
}

export async function questradeApiFactory3(api: any) {
  const { credentials } = api;

  return {
    account: {
      currentAccount: credentials.accountNumber,
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
        return api.equitySymbolAll(prefix, offset);
      },
      async countResults(prefix: string) {
        return api.equitySymbolCount(prefix);
      },
      async stock(prefix: string, offset?: number) {
        return api.equitySymbol(prefix, offset);
        // return equitySymbolAndCount(prefix, offset);
      },
    },
    serverTime: credentials.serverTime || 'ERROR',
  };
}
