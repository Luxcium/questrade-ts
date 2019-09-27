// tslint:() =>disable:() => variable-name
// import { _qtApiFactory } from '../../api';
import { Credentials } from '../../libraries';
// import {
//   _getAccounts,
//   _getActivities,
//   _getBalances,
//   _getCandles,
//   _getExecutions,
//   _getMarkets,
//   _getOptionsSymbols,
//   _getOrders,
//   _getPositions,
//   _getQuotesFromSymbolID,
//   _getSymbolFromSymbolID,
//   _getSymbolSearch,
//   _getTime,
//   _postGetOptionsQuotes,
//   _postGetStrategiesQuotes,
// } from './private_old';

export class QuestradeBase {
  public credentials: Credentials;
  public accountsApiCalls = {
    activities: _getActivities(this.credentials),
    orders: _getOrders(this.credentials),
    executions: _getExecutions(this.credentials),
    balances: _getBalances(this.credentials),
    positions: _getPositions(this.credentials),
    listAccounts: _getAccounts(this.credentials),
    time: _getTime(this.credentials),
  };
  public quotes = {
    strategies: _postGetStrategiesQuotes(this.credentials),
    options: _postGetOptionsQuotes(this.credentials),
    fromSymbolID: _getQuotesFromSymbolID(this.credentials),
  };
  public symbols = {
    search: _getSymbolSearch(this.credentials),
    options: _getOptionsSymbols(this.credentials),
    fromSymbolID: _getSymbolFromSymbolID(this.credentials),
  };
  public marketsApiCalls = {
    candles: _getCandles(this.credentials),
    list: () => _getMarkets(this.credentials),
    quotes: this.quotes,
    symbols: this.symbols,
  };
  constructor(credentials: Credentials) {
    this.credentials = credentials; // _qtApiFactory(str);
    // console.log('this.qtApi', this.qtApi);
  }
}

const _getAccounts = (credentials: Credentials) => credentials;
const _getActivities = (credentials: Credentials) => credentials;
const _getBalances = (credentials: Credentials) => credentials;
const _getCandles = (credentials: Credentials) => credentials;
const _getExecutions = (credentials: Credentials) => credentials;
const _getMarkets = (credentials: Credentials) => credentials;
const _getOptionsSymbols = (credentials: Credentials) => credentials;
const _getOrders = (credentials: Credentials) => credentials;
const _getPositions = (credentials: Credentials) => credentials;
const _getQuotesFromSymbolID = (credentials: Credentials) => credentials;
const _getSymbolFromSymbolID = (credentials: Credentials) => credentials;
const _getSymbolSearch = (credentials: Credentials) => credentials;
const _getTime = (credentials: Credentials) => credentials;
const _postGetOptionsQuotes = (credentials: Credentials) => credentials;
const _postGetStrategiesQuotes = (credentials: Credentials) => credentials;
