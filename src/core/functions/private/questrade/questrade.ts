// tslint:disable: variable-name
import { _qtApiFactory } from '../../../api';
import { QtApi } from '../../../libraries';

export class Questrade {
  public qtApi: Promise<QtApi>;
  public accountsApiCalls = {
    activities: _getActivities(this.qtApi),
    orders: _getOrders(this.qtApi),
    executions: _getExecutions(this.qtApi),
    balances: _getBalances(this.qtApi),
    positions: _getPositions(this.qtApi),
    listAccounts: _getAccounts(this.qtApi),
    time: _getTime(this.qtApi),
  };
  public quotes = {
    strategies: _postGetStrategiesQuotes(this.qtApi),
    options: _postGetOptionsQuotes(this.qtApi),
    fromSymbolID: _getQuotesFromSymbolID(this.qtApi),
  } as any;
  public symbols = {
    search: _getSymbolSearch(this.qtApi),
    options: _getOptionsSymbols(this.qtApi),
    fromSymbolID: _getSymbolFromSymbolID(this.qtApi),
  } as any;
  public marketsApiCalls = {
    candles: _getCandles(this.qtApi),
    list: _getMarkets(this.qtApi),
    quotes: this.quotes,
    symbols: this.symbols,
  } as any;
  constructor(options: any) {
    this.qtApi = _qtApiFactory(options);
  }
}
