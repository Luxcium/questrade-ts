import { _getAccounts } from './accounts-calls/get-accounts/_getAccounts';
import { _getActivities } from './accounts-calls/get-activities/_getActivities';
import { _getBalances } from './accounts-calls/get-balances/_getBalances';
import { _getExecutions } from './accounts-calls/get-executions/_getExecutions';
import { _getOrders } from './accounts-calls/get-orders/_getOrders';
import { _getOrdersByIds } from './accounts-calls/get-orders/_getOrdersByIds';
import { _getPositions } from './accounts-calls/get-positions/_getPositions';
import { _getServerTime } from './accounts-calls/get-server-time/_getServerTime';
import { _getCandles } from './markets-calls/get-candles/_getCandles';
import { _getEquitySymbol } from './markets-calls/get-equity-symbol/_getEquitySymbol';
import { _getEquitySymbolAll } from './markets-calls/get-equity-symbol/_getEquitySymbolAll';
import { _getEquitySymbolCount } from './markets-calls/get-equity-symbol/_getEquitySymbolCount';
import { _getMarkets } from './markets-calls/get-markets/_getMarkets';
import { _getQuotesOptionsByIds } from './markets-calls/get-markets-quotes-options/_getQuotesOptionsByIds';
import { _getQuotesOptionsFilter } from './markets-calls/get-markets-quotes-options/_getQuotesOptionsFilter';
import { _getMarketsQuotesStrategies } from './markets-calls/get-markets-quotes-strategies/_getMarketsQuotesStrategies';
import { _getOptionsById } from './markets-calls/get-options-by-id/_getOptionsById';
import { _getQuotesByIds } from './markets-calls/get-quotes-by-ids/_getQuotesByIds';
import { _getSymbolsByIds } from './markets-calls/get-symbols-by-ids/_getSymbolsByIds';

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
