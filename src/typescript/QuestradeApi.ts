import {
  IAccount,
  IAccountActivity,
  IBalances,
  ICandle,
  IExecution,
  IMarket,
  IOptionChain,
  IOptionsQuotes,
  IOrder,
  IPosition,
  IQuote,
  IStrategiesQuotes,
  ISymbol,
  ISymbolSearchResult,
  OptionsFilters,
  StrategyVariantRequest,
} from '.';
import { IMyBalances } from './IMyBalances';

// DateRange<R>
export type DateRange<R> = (startTime: string) => (endTime: string) => R;

export interface IQuestradeApi {
  currentAccount: string;
  myBalances: IQtApiMyBalances;
  serverTime: Date;
  get: IQtApiGet;
}
export type IQtApiMyBalances = () => Promise<IMyBalances>;
export interface IQtApiGet {
  account: IQtApiAccount;
  market: IQtApiMarket;
  quotes: IQtApiQuotes;
  search: IQtApiSearch;
  symbols: IQtApiSymbols;
}
export interface IQtApiAccount {
  activities(
    startTime: string
  ): (endTime: string) => Promise<IAccountActivity[]>;

  allAccounts(): Promise<IAccount[]>;

  balances(): Promise<IBalances>;

  executions(startTime: string): (endTime: string) => Promise<IExecution[]>;

  orders(stateFilter?: string | undefined): DateRange<Promise<IOrder[]>>;

  ordersByIds(orderId: number[]): Promise<IOrder[]>;

  positions(): Promise<IPosition[]>;
}

export interface IQtApiMarket {
  allMarkets(): Promise<IMarket[]>;
  candlesByStockId(
    symbolID: number
  ): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
}
export interface IQtApiQuotes {
  optionsQuotes: IQtApiOptionsQuotes;
  byStrategies(
    strategyVariantRequestData: StrategyVariantRequest
  ): Promise<IStrategiesQuotes>;

  byStockIds(ids: number[]): Promise<IQuote[]>;
}

export interface IQtApiOptionsQuotes {
  fromFilter(filters: OptionsFilters): Promise<IOptionsQuotes>;
  byOptionsIds(optionIds: number[]): Promise<IOptionsQuotes>;
}
export interface IQtApiSearch {
  stock(
    prefix: string,
    offset?: number | undefined
  ): Promise<ISymbolSearchResult>;
  allStocks(
    prefix: string,
    offset?: number | undefined
  ): Promise<ISymbolSearchResult[]>;
  countResults(prefix: string): Promise<number>;
}
export interface IQtApiSymbols {
  optionChains: IQtApiOptionChains;
  byStockIds(stockIds: number[]): Promise<ISymbol[]>;
}

export interface IQtApiOptionChains {
  byStockId(stockId: number): Promise<IOptionChain[]>;
}
