import { _getAccounts } from './AccountsCalls/_getAccounts/_getAccounts';
import { _getActivities } from './AccountsCalls/_getActivities/_getActivities';
import { _getBalances } from './AccountsCalls/_getBalances/_getBalances';
import { _getExecutions } from './AccountsCalls/_getExecutions/_getExecutions';
import { _getOrders } from './AccountsCalls/_getOrders/_getOrders';
import { _getOrdersByIds } from './AccountsCalls/_getOrders/_getOrdersByIds';
import { _getPositions } from './AccountsCalls/_getPositions/_getPositions';
import { _getServerTime } from './AccountsCalls/_getServerTime/_getServerTime';
import { _getCandles } from './MarketsCalls/_getCandles/_getCandles';
import { _getEquitySymbol } from './MarketsCalls/_getEquitySymbol/_getEquitySymbol';
import { _getEquitySymbolAll } from './MarketsCalls/_getEquitySymbol/_getEquitySymbolAll';
import { _getEquitySymbolCount } from './MarketsCalls/_getEquitySymbol/_getEquitySymbolCount';
import { _getMarkets } from './MarketsCalls/_getMarkets/_getMarkets';
import { _getQuotesOptionsByIds } from './MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsByIds';
import { _getQuotesOptionsFilter } from './MarketsCalls/_getMarketsQuotesOptions/_getQuotesOptionsFilter';
import { _getMarketsQuotesStrategies } from './MarketsCalls/_getMarketsQuotesStrategies/_getMarketsQuotesStrategies';
import { _getOptionsById } from './MarketsCalls/_getOptionsById/_getOptionsById';
import { _getQuotesByIds } from './MarketsCalls/_getQuotesByIds/_getQuotesByIds';
import { _getSymbolsByIds } from './MarketsCalls/_getSymbolsByIds/_getSymbolsByIds';

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
