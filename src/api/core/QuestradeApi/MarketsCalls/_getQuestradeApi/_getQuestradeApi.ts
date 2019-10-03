import { Credentials } from '../../../typescript';
import { _getAccounts } from '../../AccountCalls/_getAccounts';
import { _getActivities } from '../../AccountCalls/_getActivities';
import { _getBalances } from '../../AccountCalls/_getBalances';
import { _getExecutions } from '../../AccountCalls/_getExecutions';
import { _getOrders, _getOrdersByIds } from '../../AccountCalls/_getOrders';
import { _getPositions } from '../../AccountCalls/_getPositions';
import { _getServerTime } from '../../AccountCalls/_getServerTime';
import { _getCandles } from '../_getCandles';
import { _getMarkets } from '../_getMarkets';
import { _getOptionsById } from '../_getOptionsById';
import { _getQuotesByIds } from '../_getQuotesByIds';
import { _getSymbolsByIds } from '../_getSymbolsByIds';
import {
  _getSymbolSearchAll,
  _getSymbolSearchCount,
  _symbolSearchAndCount,
} from '../_getSymbolSearch';
import { _quotesOptionsbyFilterAndIds } from '../_marketsQuotesOptions';
import { _marketsQuotesStrategies } from '../_marketsQuotesStrategies';

export const _getQuestradeApi = (credentials: Credentials) => {
  const setAccount = credentials.accountNumber;
  const allAccounts = _getAccounts(credentials);
  const activities = _getActivities(credentials);
  const balances = _getBalances(credentials);
  const marketCandlesById = _getCandles(credentials);
  const executions = _getExecutions(credentials);
  const markets = _getMarkets(credentials);
  const optionsById = _getOptionsById(credentials);
  const options = _quotesOptionsbyFilterAndIds(credentials);
  const ordersByIds = _getOrdersByIds(credentials);
  const orders = _getOrders(credentials);
  const ordersAll = _getOrders(credentials)('All');
  const positions = _getPositions(credentials);
  const marketsQuotesByIds = _getQuotesByIds(credentials);
  const search = _symbolSearchAndCount(credentials);
  const getServerTime = _getServerTime(credentials);
  const symbolsByIds = _getSymbolsByIds(credentials);
  const searchAll = _getSymbolSearchAll(credentials);
  const searchCount = _getSymbolSearchCount(credentials);
  const byStrategies = _marketsQuotesStrategies(credentials);

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
