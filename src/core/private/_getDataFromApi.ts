import { endpointFormatDateTool } from '../../utils/timeutil';
import {
  _axiosAccountApi as _axiosAccountGetApi,
  _axiosApiGet as _axiosGetApi,
} from '../api/_axiosApi';
import {
  Credentials,
  IActivities,
  IBalances,
  ICandle,
  ICandles,
  IExecutions,
  IMarkets,
  IOrders,
  IPositions,
  IQuotes,
  ISymbol,
  ISymbols,
  Time,
} from '../libraries';
import { IOptionChains } from '../libraries/IOptionsQuotes';
import { _OptionsQuotes } from './_optionsQuotes';
// import { endpointFormatDateTool as _endpointFormatDate } from '../../../utils/endpointFormatDate';

export const apiFunctions = (() => {
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
  const _getOrderByIds = (credentials: Credentials) => async (
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
    return (await _axiosGetApi(credentials)<ISymbols>(
      `/symbols/search?prefix=${prefix}`
    )()).symbols[offset];
  };
  // + _getSymbolSearchAll
  /** _getSymbolSearch */
  const _getSymbolSearchAll = (credentials: Credentials) => async (
    prefix: string
  ) => {
    return (await _axiosGetApi(credentials)<ISymbols>(
      `/symbols/search?prefix=${prefix}`
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

  // & _postGetOptionsQuotes
  /** _postGetOptionsQuotes */
  const _postGetOptionsQuotes = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<any>('_postGetStrategiesQuotes');

  // & _postGetStrategiesQuotes
  /** _postGetStrategiesQuotes */
  const _postGetStrategiesQuotes = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<any>('_getAccounts');

  // + _getAccounts
  /** _getAccounts */
  const _getAccounts = (credentials: Credentials) =>
    _axiosGetApi(credentials)<any>('/accounts');

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

    return {
      getBalances: _getBalances(credentials),
      getCandles: _getCandles(credentials),
      getExecutions: _getExecutions(credentials),
      getMarkets: _getMarkets(credentials),
      getOptionsById: _getOptionsById(credentials),
      getOrders: _getOrders(credentials),
      getOrdersAll: _getOrders(credentials)('All'),
      getOrderByIds: _getOrderByIds(credentials),
      getPositions: _getPositions(credentials),
      getQuotesByIds: _getQuotesByIds(credentials),
      getSymbolsByIds: _getSymbolsByIds(credentials),
      getSymbolSearch: symbolSearch as SymbolSearchAndCount,
      getSymbolSearchAll: _getSymbolSearchAll(credentials),
      getSymbolSearchCount: _getSymbolSearchCount(credentials),
      getServerTime: _getServerTime(credentials),
      postGetOptionsQuotes: _postGetOptionsQuotes(credentials),
      postGetStrategiesQuotes: _postGetStrategiesQuotes(credentials),
      getAccounts: _getAccounts(credentials),
      getActivities: _getActivities(credentials),
      OptionsQuotes: _OptionsQuotes(credentials),
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
