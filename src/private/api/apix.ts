import { _getAccounts } from './accounts-calls/get-accounts/get-accounts';
import { _getActivities } from './accounts-calls/get-activities/get-activities';
import { _getBalances } from './accounts-calls/get-balances/get-balances';
import { _getExecutions } from './accounts-calls/get-executions/get-executions';
import { _getOrders } from './accounts-calls/get-orders/get-orders';
import { _getOrdersByIds } from './accounts-calls/get-orders/get-orders-by-ids';
import { _getPositions } from './accounts-calls/get-positions/get-positions';
import { _getServerTime } from './accounts-calls/get-server-time/get-server-time';
import { _getCandles } from './markets-calls/get-candles/get-candles';
import { _getEquitySymbol } from './markets-calls/get-equity-symbol/get-equity-symbol';
import { _getEquitySymbolAll } from './markets-calls/get-equity-symbol/get-equity-symbol-all';
import { _getEquitySymbolCount } from './markets-calls/get-equity-symbol/get-equity-symbol-count';
import { _getMarkets } from './markets-calls/get-markets/get-markets';
import { _getQuotesOptionsByIds } from './markets-calls/get-markets-quotes-options/get-quotes-options-by-ids';
import { _getQuotesOptionsFilter } from './markets-calls/get-markets-quotes-options/get-quotes-options-filter';
import { _getMarketsQuotesStrategies } from './markets-calls/get-markets-quotes-strategies/get-markets-quotes-strategies';
import { _getOptionsById } from './markets-calls/get-options-by-id/get-options-by-id';
import { _getQuotesByIds } from './markets-calls/get-quotes-by-ids/get-quotes-by-ids';
import { _getSymbolsByIds } from './markets-calls/get-symbols-by-ids/get-symbols-by-ids';

export const endPoint = {
  accounts: _getAccounts,
  activities: _getActivities,
  balances: _getBalances,
  candles: _getCandles,
  equitySymbol: _getEquitySymbol,
  equitySymbolAll: _getEquitySymbolAll,
  equitySymbolCount: _getEquitySymbolCount,
  executions: _getExecutions,
  markets: _getMarkets,
  optionsById: _getOptionsById,
  optionsFilter: _getQuotesOptionsFilter,
  orders: _getOrders,
  ordersByIds: _getOrdersByIds,
  positions: _getPositions,
  quotesByIds: _getQuotesByIds,
  quotesOptionsByIds: _getQuotesOptionsByIds,
  strategies: _getMarketsQuotesStrategies,
  symbolsByIds: _getSymbolsByIds,
  time: _getServerTime,
};

// _getQuotesOptionsbyFilterAndIds
// _getEquitySymbolAndCount
