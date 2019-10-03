import { Credentials, IOptionsQuotes, ISymbol } from '../../typescript';
import { _getAccounts } from './_accountCalls/_getAccounts';
import { _getActivities } from './_accountCalls/_getActivities';
import { _getBalances } from './_accountCalls/_getBalances';
import { _getExecutions } from './_accountCalls/_getExecutions';
import { _getOrders, _getOrdersByIds } from './_accountCalls/_getOrders';
import { _getPositions } from './_accountCalls/_getPositions';
import { _getServerTime } from './_accountCalls/_getServerTime';
import { _getCandles } from './_getCandles';
import { _getMarkets } from './_getMarkets';
import { _getOptionsById } from './_getOptionsById';
import { _getQuotesByIds } from './_getQuotesByIds';
import { _getSymbolsByIds } from './_getSymbolsByIds';
import {
  _getSymbolSearch,
  _getSymbolSearchAll,
  _getSymbolSearchCount,
} from './_getSymbolSearch';
import {
  _Filters,
  _getQuotesOptionsByIds,
  _getQuotesOptionsFilter,
} from './_marketsQuotesOptions';
import { _marketsQuotesStrategies } from './_marketsQuotesStrategies';

export const _getQuestradeApi = (credentials: Credentials) => {
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
  const getServerTime = _getServerTime(credentials);
  const symbolsByIds = _getSymbolsByIds(credentials);
  const search = symbolSearch as SymbolSearchAndCount;
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
