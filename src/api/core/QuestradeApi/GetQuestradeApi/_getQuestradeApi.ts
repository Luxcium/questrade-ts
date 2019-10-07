import { AxiosStatic, default as axios } from 'axios';
import { Credentials } from '../../typescript';
import { _getAccounts } from '../AccountsCalls/_getAccounts';
import { _getActivities } from '../AccountsCalls/_getActivities';
import { _getBalances, _myBalances } from '../AccountsCalls/_getBalances';
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
  _symbolSearchAndCount,
} from '../MarketsCalls/_getSymbolSearch';
import { _quotesOptionsbyFilterAndIds } from '../MarketsCalls/_marketsQuotesOptions';
import { _marketsQuotesStrategies } from '../MarketsCalls/_marketsQuotesStrategies';

export const _getQuestradeApi = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => {
  const setAccount = credentials.accountNumber;
  const allAccounts = _getAccounts(_axios)(credentials);
  const activities = _getActivities(_axios)(credentials);
  const balances = _getBalances(_axios)(credentials);
  const myBalances = () => _myBalances(_getBalances(_axios)(credentials)())();
  const marketCandlesById = _getCandles(_axios)(credentials);
  const executions = _getExecutions(_axios)(credentials);
  const markets = _getMarkets(_axios)(credentials);
  const optionsById = _getOptionsById(_axios)(credentials);
  const options = _quotesOptionsbyFilterAndIds(_axios)(credentials);
  const ordersByIds = _getOrdersByIds(_axios)(credentials);
  const orders = _getOrders(_axios)(credentials);
  const ordersAll = _getOrders(_axios)(credentials)('All');
  const positions = _getPositions(_axios)(credentials);
  const marketsQuotesByIds = _getQuotesByIds(_axios)(credentials);
  const search = _symbolSearchAndCount(_axios)(credentials);
  const getServerTime = _getServerTime(_axios)(credentials);
  const symbolsByIds = _getSymbolsByIds(_axios)(credentials);
  const searchAll = _getSymbolSearchAll(_axios)(credentials);
  const searchCount = _getSymbolSearchCount(_axios)(credentials);
  const byStrategies = _marketsQuotesStrategies(_axios)(credentials);

  return {
    setAccount,
    getServerTime,
    myBalances,

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
          options,
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
