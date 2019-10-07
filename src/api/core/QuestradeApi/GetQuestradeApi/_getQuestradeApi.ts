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
import { _marketsQuotesStrategies as _getMarketsQuotesStrategies } from '../MarketsCalls/_marketsQuotesStrategies';

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
        accounts,
        activities,
        balances,
        executions,
        orders,
        serverTime,
        positions,
      },
    },
    markets: {
      candles,
      markets,
      quotes: {
        byStrategies: marketsQuotesStrategies,
        options: quotesOptionsbyFilterAndIds,
        byIds: quotesByIds,
      },
      symbols: {
        optionsById,
        symbolsByIds,
        symbolSearchAll,
        symbolSearchAndCount,
        symbolSearchCount,
      },
    },
  };

  return { allFunctions };
};
// const activities ='';
// const balances ='';
// const executions ='';
// const getServerTime ='';
// const markets ='';
// const optionsById ='';
// const orders ='';
// const ordersByIds ='';
// const positions ='';
// const symbolsByIds ='';
// const allAccounts = '';
// const byStrategies = '';
// const marketCandlesById = '';
// const marketsQuotesByIds = '';
// const myBalances = '';
// const options = '';
// const ordersAll = '';
// const search = '';
// const searchAll = '';
// const searchCount = '';
// const setAccount = '';

// const allAccounts = async () => _getAccounts(_axios)(credentials)();

// const activities = (startDate: string) =>
//   _getActivities(_axios)(credentials)(startDate);

// const balances = async () => _getBalances(_axios)(credentials)();

// const myBalances = async () =>
//   _myBalances(_getBalances(_axios)(credentials)())();

// const marketCandlesById = async () => _getCandles(_axios)(credentials);

// const executions = (startDate: string) =>
//   _getExecutions(_axios)(credentials)(startDate);

// const markets = async () => _getMarkets(_axios)(credentials)();

// const optionsById = async () => _getOptionsById(_axios)(credentials);

// const options = async () =>
//   _getQuotesOptionsbyFilterAndIds(_axios)(credentials);

// const ordersByIds = async () => _getOrdersByIds(_axios)(credentials);

// const orders = (startDate: string) =>
//   _getOrders(_axios)(credentials)(startDate);

// const ordersAll = (startDate: string) =>
//   _getOrders(_axios)(credentials)('All')(startDate);

// const positions = async () => _getPositions(_axios)(credentials)();

// const marketsQuotesByIds = async () => _getQuotesByIds(_axios)(credentials);

// const search = async () => _getSymbolSearchAndCount(_axios)(credentials);

// const getServerTime = async () => _getServerTime(_axios)(credentials)();

// const symbolsByIds = async (symbolId: number[]) =>
//   _getSymbolsByIds(_axios)(credentials)(symbolId);

// const searchAll = () => _getSymbolSearchAll(_axios)(credentials);

// const searchCount = () => _getSymbolSearchCount(_axios)(credentials);

// const byStrategies = () => _getMarketsQuotesStrategies(_axios)(credentials);

// const setAccount = async () => credentials.accountNumber;

// setAccount,
// getServerTime: serverTime,
// myBalances,

// get: {
//   accounts: {
//     activities,
//     orders,
//     ordersAll,
//     ordersByIds,
//     executions,
//     balances,
//     positions,
//     allAccounts,
//     time: getServerTime,
//   },
//   markets: {
//     candlesById: marketCandlesById,
//     quotes: {
//       byStrategies,
//       options,
//       byIds: marketsQuotesByIds,
//     },
//     allMarkets: markets,
//   },
//   symbols: {
//     optionsById,
//     byIds: symbolsByIds,
//     search,
//     searchAll,
//     searchCount,
//   },
// },
