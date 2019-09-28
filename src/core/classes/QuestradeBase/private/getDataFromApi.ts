import {
  _axiosAccountApi as _axiosAccountGetApi,
  _axiosApiGet as _axiosGetApi,
} from '../../../api/_axiosApi';
import { Credentials } from '../../../libraries';
import {
  IActivities,
  IBalances,
  ICandles,
  IExecutions,
  IMarkets,
  IOrders,
  IPositions,
  Time,
} from '../../../types';
import { endpointFormatDateTool } from '../../../utils/timeutil';
import { _OptionsQuotes } from './_optionsQuotes';
// import { endpointFormatDateTool as _endpointFormatDate } from '../../../utils/endpointFormatDate';

export const apiFunctions = (() => {
  const _getBalances = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<IBalances>('/balances');

  // !! _getCandles
  /** _getCandles */
  const _getCandles = (credentials: Credentials) => (startDate: string) => (
    endDate: string
  ) => (interval: string = 'OneDay') => async (
    symbolID: string
  ): Promise<ICandles> =>
    _axiosGetApi(credentials)<ICandles>(
      `/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`
    )();

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
  const _getMarkets = (credentials: Credentials) =>
    _axiosGetApi(credentials)<IMarkets>('/markets');

  // !! _getOptionsSymbols
  /** _getOptionsSymbols */
  const _getOptionsSymbols = (credentials: Credentials) => (symbolID: string) =>
    _axiosAccountGetApi(credentials)<any>(`/symbols/${symbolID}/options`);

  // + _getOrders
  /** _getOrders */
  const _getOrders = (credentials: Credentials) => (
    stateFilter: string = 'All'
  ) => (startDate: string) => async (endDate: string) =>
    (await _axiosAccountGetApi(credentials)<IOrders>(
      `/orders?${endpointFormatDateTool(
        startDate,
        endDate
      )}stateFilter=${stateFilter}`
    )()).orders;

  // + _getOrderIds
  /** _getOrders */
  const _getOrderIds = (credentials: Credentials) => async (
    orderId: number[]
  ) =>
    (await _axiosAccountGetApi(credentials)<IOrders>(
      `/orders?ids=${orderId.join(',')}`
    )()).orders;

  // !! _getPositions
  /** _getPositions */
  const _getPositions = (credentials: Credentials) => async () =>
    (await _axiosAccountGetApi(credentials)<IPositions>('/positions')())
      .positions;

  // !! _getQuotesFromSymbolID
  /** _getQuotesFromSymbolID */
  const _getQuotesFromSymbolID = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<any>('_getSymbolFromSymbolID');

  // !! _getSymbolFromSymbolID
  /** _getSymbolFromSymbolID */
  const _getSymbolFromSymbolID = (credentials: Credentials) =>
    _axiosAccountGetApi(credentials)<any>('_getSymbolSearch');

  // !! _getSymbolSearch
  /** _getSymbolSearch */
  const _getSymbolSearch = (credentials: Credentials) => async (
    prefix: string
  ) =>
    _axiosAccountGetApi(credentials)<any>(`/symbols/search?prefix=${prefix}`)();

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

  // const _balances = (credentials: Credentials) => {
  //   const combinedCADCurrent = async () =>
  //     (await _getBalances(credentials)()).combinedBalances.USD;
  //   const combinedUSDCurrent = async () =>
  //     (await _getBalances(credentials)).combinedBalances.USD;
  //   const CADCurrent = async () =>
  //     (await _getBalances(credentials)).perCurrencyBalances.CAD;
  //   const USDCurrent = async () =>
  //     (await _getBalances(credentials)).perCurrencyBalances.USD;
  //   const combinedCADStartOfDay = async () =>
  //     (await _getBalances(credentials)).sodCombinedBalances.CAD;
  //   const combinedUSDStartOfDay = async () =>
  //     (await _getBalances(credentials)).sodCombinedBalances.USD;
  //   const CADStartOfDay = async () =>
  //     (await _getBalances(credentials)).sodPerCurrencyBalances.CAD;
  //   const USDStartOfDay = async () =>
  //     (await _getBalances(credentials)).sodPerCurrencyBalances.USD;

  //   return {
  //     current: {
  //       CAD: CADCurrent,
  //       USD: USDCurrent,
  //       allInCAD: combinedCADCurrent,
  //       allInUSD: combinedUSDCurrent,
  //     },
  //     startOfDay: {
  //       CAD: CADStartOfDay,
  //       USD: USDStartOfDay,
  //       allInCAD: combinedCADStartOfDay,
  //       allInUSD: combinedUSDStartOfDay,
  //     },
  //   };
  // };

  return (credentials: Credentials) => ({
    getBalances: _getBalances(credentials),
    getCandles: _getCandles(credentials),
    getExecutions: _getExecutions(credentials),
    getMarkets: _getMarkets(credentials),
    getOptionsSymbols: _getOptionsSymbols(credentials),
    getOrders: _getOrders(credentials),
    getOrdersAll: _getOrders(credentials)('All'),
    getOrderIds: _getOrderIds(credentials),
    getPositions: _getPositions(credentials),
    getQuotesFromSymbolID: _getQuotesFromSymbolID(credentials),
    getSymbolFromSymbolID: _getSymbolFromSymbolID(credentials),
    getSymbolSearch: _getSymbolSearch(credentials),
    getServerTime: _getServerTime(credentials),
    postGetOptionsQuotes: _postGetOptionsQuotes(credentials),
    postGetStrategiesQuotes: _postGetStrategiesQuotes(credentials),
    getAccounts: _getAccounts(credentials),
    getActivities: _getActivities(credentials),
    OptionsQuotes: _OptionsQuotes(credentials),
  });
})();
