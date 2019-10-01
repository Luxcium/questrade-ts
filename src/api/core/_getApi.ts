import { _axiosAccountGetApi, _axiosGetApi } from '.';
import { endpointFormatDateTool } from '../utils/timeutil';
import {
  _Filters,
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
} from './_marketsQuotesOptions';
import {
  Credentials,
  IAccounts,
  IActivities,
  IBalances,
  ICandle,
  ICandles,
  IExecutions,
  IMarkets,
  IOptionChains,
  IOptionsQuotes,
  IOrders,
  IPositions,
  IQuotes,
  ISymbol,
  ISymbols,
  Time,
} from './typescript';

export const _getApi = (() => {
  const _getBalances = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<IBalances>('/balances');

  // + _getCandles
  /** _getCandles */
  const _getCandles = (credentials: Credentials) => (startDate: string) => (
    endDate: string
  ) => (interval: string = 'OneDay') => async (
    symbolID: number
  ): Promise<ICandle[]> =>
    (await _axiosGetApi(credentials)<ICandles>(
      `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
    )()).candles;

  // + _getExecutions
  /** _getExecutions */
  const _getExecutions = (credentials: Credentials) => (
    startDate: string
  ) => async (endDate: string) =>
    (await _axiosAccountGetApi(credentials)<IExecutions>(
      `/executions?${endpointFormatDateTool(startDate, endDate)}`
    )()).executions;

  // + _getMarkets
  /** _getMarkets */
  const _getMarkets = (credentials: Credentials) => async () =>
    (await _axiosGetApi(credentials)<IMarkets>('/markets')()).markets;

  // + _getOptionsSymbols
  /** _getOptionsSymbols */
  const _getOptionsById = (credentials: Credentials) => async (
    symbolID: number
  ) =>
    (await _axiosGetApi(credentials)<IOptionChains>(
      `/symbols/${symbolID}/options`
    )()).optionChain;

  // + _getOrders
  /** _getOrders */
  const _getOrders = (credentials: Credentials) => (startDate: string) => (
    endDate: string
  ) => async (stateFilter: string = 'All') =>
    (await _axiosAccountGetApi(credentials)<IOrders>(
      `/orders?${endpointFormatDateTool(
        startDate,
        endDate
      )}stateFilter=${stateFilter}`
    )()).orders;

  // + _getOrderByIds
  /** _getOrders */
  const _getOrdersByIds = (credentials: Credentials) => async (
    orderId: number[]
  ) =>
    (await _axiosAccountGetApi(credentials)<IOrders>(
      `/orders?ids=${orderId.join(',')}`
    )()).orders;

  // + _getPositions
  /** _getPositions */
  const _getPositions = (credentials: Credentials) => async () =>
    (await _axiosAccountGetApi(credentials)<IPositions>('/positions')())
      .positions;

  // + _getQuotesByID
  /** _getQuotesFromSymbolID */
  const _getQuotesByIds = (credentials: Credentials) => async (ids: number[]) =>
    (await _axiosGetApi(credentials)<IQuotes>(
      `/markets/quotes?ids=${ids.join(',')}`
    )()).quotes;

  // + _getSymbolsByIDs
  /** _getSymbolFromSymbolID */
  const _getSymbolsByIds = (credentials: Credentials) => async (
    symbolId: number[]
  ) => _axiosGetApi(credentials)<ISymbols>(`/symbols?ids=${symbolId.join()}`)();

  // + _getSymbolSearch
  /** _getSymbolSearch */
  const _getSymbolSearch = (credentials: Credentials) => async (
    prefix: string,
    offset: number = 0
  ) => {
    /* return */
    const { symbols } = await _axiosGetApi(credentials)<ISymbols>(
      `/symbols/search?prefix=${prefix}`
    )(); // .symbols[offset];
    const count = symbols.length;
    const result = symbols[offset];
    result.count = count;
    return result;
  };
  // + _getSymbolSearchAll
  /** _getSymbolSearch */
  const _getSymbolSearchAll = (credentials: Credentials) => async (
    prefix: string,
    offset: number = 0
  ) => {
    return (await _axiosGetApi(credentials)<ISymbols>(
      `/symbols/search?prefix=${prefix}&offset=${offset}`
    )()).symbols;
  };
  // + _getSymbolSearchCount
  /** _getSymbolSearch */
  const _getSymbolSearchCount = (credentials: Credentials) => async (
    prefix: string
  ) => {
    return (await _axiosGetApi(credentials)<ISymbols>(
      `/symbols/search?prefix=${prefix}`
    )()).symbols.length;
  };
  // + _getServerTime
  /** _getTime */
  const _getServerTime = (credentials: Credentials) => async () =>
    new Date((await _axiosGetApi(credentials)<Time>('/time')()).time);

  // + _quotesOptionsFromIds

  // + _quotesOptionsFromFilter

  // & _postGetStrategiesQuotes
  /** _postGetStrategiesQuotes */
  const _postGetStrategiesQuotes = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<any>('_getAccounts');

  // + _getAccounts
  /** _getAccounts */
  const _getAccounts = (credentials: Credentials) => async () =>
    (await _axiosGetApi(credentials)<IAccounts>('/accounts')()).accounts;

  // + _getActivities
  /** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
  const _getActivities = (credentials: Credentials) => (
    startTime: string
  ) => async (endTime: string) => {
    const dateTime = endpointFormatDateTool(startTime, endTime);
    const endpoint = `/activities?${dateTime}`;

    return (await _axiosAccountGetApi(credentials)<IActivities>(endpoint)())
      .activities;
  };

  return (credentials: Credentials) => {
    const symbolSearch: any = _getSymbolSearch(credentials);
    symbolSearch.count = _getSymbolSearchCount(credentials);

    const quotesOptionsFilter: any = _getQuotesOptionsFilter(credentials);
    quotesOptionsFilter.byIds = _getQuotesOptionsByIds(credentials);

    const setAccount = credentials.accountNumber;
    const allAccounts = _getAccounts(credentials);
    const activities = _getActivities(credentials);
    const balances = _getBalances(credentials);
    const marketCandlesById = _getCandles(credentials);
    const executions = _getExecutions(credentials);
    const markets = _getMarkets(credentials);
    const optionsById = _getOptionsById(credentials);
    const ordersByIds = _getOrdersByIds(credentials);
    const orders = _getOrders(credentials);
    const ordersAll = _getOrders(credentials)('All');
    const positions = _getPositions(credentials);
    const marketsQuotesByIds = _getQuotesByIds(credentials);
    const quotesOptionsbyFilterAndIds = quotesOptionsFilter as QuotesOptionsbyFilterAndIds;
    // const optionsQuotesByIds = _getQuotesOptionsByIds(credentials);
    // const quotesOptionsFilter =
    const getServerTime = _getServerTime(credentials);
    const symbolsByIds = _getSymbolsByIds(credentials);
    const search = symbolSearch as SymbolSearchAndCount;
    const searchAll = _getSymbolSearchAll(credentials);
    const searchCount = _getSymbolSearchCount(credentials);
    const byStrategies = _postGetStrategiesQuotes(credentials);

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
            options: quotesOptionsbyFilterAndIds,
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
})();

export interface ISymbolSearchCount {
  count: (prefix: string) => Promise<number>;
}

export type SymbolSearch = (
  prefix: string,
  offset?: number
) => Promise<ISymbol>;

export type SymbolSearchAndCount = SymbolSearch & ISymbolSearchCount;

export interface IQuotesOptionsByIds {
  byIds: (optionIds: number[]) => Promise<IOptionsQuotes>;
}

export type QuotesOptions = (filters: _Filters) => Promise<IOptionsQuotes>;

export type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;
