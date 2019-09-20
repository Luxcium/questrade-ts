// tslint:disable: variable-name
import { _qtApiFactory } from '../../api';
import { QtApi } from '../../libraries';
import {
  _getAccounts,
  _getActivities,
  _getBalances,
  _getCandles,
  _getExecutions,
  _getMarkets,
  _getOptionsSymbols,
  _getOrders,
  _getPositions,
  _getQuotesFromSymbolID,
  _getSymbolFromSymbolID,
  _getSymbolSearch,
  _getTime,
  _postGetOptionsQuotes,
  _postGetStrategiesQuotes,
} from './private';

export class QuestradeBase {
  public qtApi: Promise<QtApi>;
  public accountsApiCalls = {
    activities: () => _getActivities(this.qtApi),
    orders: _getOrders(this.qtApi),
    executions: () => _getExecutions(this.qtApi),
    balances: () => _getBalances(this.qtApi),
    positions: () => _getPositions(this.qtApi),
    listAccounts: () => _getAccounts(this.qtApi),
    time: () => _getTime(this.qtApi),
  };
  public quotes = {
    strategies: _postGetStrategiesQuotes(this.qtApi),
    options: _postGetOptionsQuotes(this.qtApi),
    fromSymbolID: _getQuotesFromSymbolID(this.qtApi),
  };
  public symbols = {
    search: _getSymbolSearch(this.qtApi),
    options: _getOptionsSymbols(this.qtApi),
    fromSymbolID: _getSymbolFromSymbolID(this.qtApi),
  };
  public marketsApiCalls = {
    candles: _getCandles(this.qtApi),
    list: () => _getMarkets(this.qtApi),
    quotes: this.quotes,
    symbols: this.symbols,
  };
  constructor(options: any) {
    this.qtApi = _qtApiFactory(options);
  }
}
