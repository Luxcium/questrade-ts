import { endpointFormatDate as _endpointFormatDate } from '../../../../core/utils/endpointFormatDate';
import { _axiosAccountApi } from '../../../api/_axiosApi';
import { Credentials } from '../../../libraries';
import { IActivities } from '../../../types';

export const _getBalances = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getCandles');

// # _getCandles
/** _getCandles */
export const _getCandles = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getExecutions');

// # _getExecutions
/** _getExecutions */
export const _getExecutions = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getMarkets');

// # _getMarkets
/** _getMarkets */
export const _getMarkets = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getOptionsSymbols');

// # _getOptionsSymbols
/** _getOptionsSymbols */
export const _getOptionsSymbols = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getOrders');

// # _getOrders
/** _getOrders */
export const _getOrders = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getPositions');

// # _getPositions
/** _getPositions */
export const _getPositions = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getQuotesFromSymbolID');

// # _getQuotesFromSymbolID
/** _getQuotesFromSymbolID */
export const _getQuotesFromSymbolID = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getSymbolFromSymbolID');

// # _getSymbolFromSymbolID
/** _getSymbolFromSymbolID */
export const _getSymbolFromSymbolID = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getSymbolSearch');

// # _getSymbolSearch
/** _getSymbolSearch */
export const _getSymbolSearch = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getTime');

// # _getTime
/** _getTime */
export const _getTime = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_postGetOptionsQuotes');

// # _postGetOptionsQuotes
/** _postGetOptionsQuotes */
export const _postGetOptionsQuotes = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_postGetStrategiesQuotes');

// # _postGetStrategiesQuotes
/** _postGetStrategiesQuotes */
export const _postGetStrategiesQuotes = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getAccounts');

// # _getAccounts
/** _getAccounts */
export const _getAccounts = (credentials: Credentials) =>
  _axiosAccountApi(credentials)<any>('_getActivities');

// # _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
export const _getActivities = (credentials: Credentials) => (
  startTime: string
) => (endTime: string) => async () => {
  const dateTime = _endpointFormatDate(startTime, endTime);
  const endpoint = `/activities?${dateTime}`;

  return (await _axiosAccountApi(credentials)<IActivities>(endpoint)())
    .activities;
};
