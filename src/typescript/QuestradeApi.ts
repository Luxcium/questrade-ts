import {
  IAccount,
  IAccountActivity,
  IBalances,
  ICandle,
  IExecution,
  IMarket,
  IOptionChain,
  IOptionsQuote,
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
  serverTime: Date | 'ERROR';
  account: IQtApiAccount;
  market: IQtApiMarket;
  getQuotes: IQtApiQuotes;
  getOptionsQuotes: IQtApiOptionsQuotes;
  getSymbols: IQtApiSymbols;
  getOptionChains: IQtApiOptionChains;
  search: IQtApiSearch;
}
export type IQtApiMyBalances = () => Promise<IMyBalances>;

export interface IQtApiAccount {
  getActivities(
    startTime: string
  ): (endTime: string) => Promise<IAccountActivity[]>;

  getAllAccounts(): Promise<IAccount[]>;
  getBalances(): Promise<IBalances>;
  getExecutions(startTime: string): (endTime: string) => Promise<IExecution[]>;
  getOrders(stateFilter?: string | undefined): DateRange<Promise<IOrder[]>>;
  getOrdersByIds(orderId: number[]): Promise<IOrder[]>;
  getPositions(): Promise<IPosition[]>;
  getServerTime(): Promise<Date>;
}

export interface IQtApiMarket {
  getAllMarkets(): Promise<IMarket[]>;
  getCandlesByStockId(
    symbolID: number
  ): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
}
export interface IQtApiQuotes {
  byStockIds(ids: number[]): Promise<IQuote[]>;
  byStrategies(
    strategyVariantRequestData: StrategyVariantRequest
  ): Promise<IStrategiesQuotes>;
}

export interface IQtApiOptionsQuotes {
  fromFilter(filters: OptionsFilters): Promise<IOptionsQuote[]>;
  byOptionsIds(optionIds: number[]): Promise<IOptionsQuote[]>;
}

export interface IQtApiSymbols {
  byStockIds(stockIds: number[]): Promise<ISymbol[]>;
}

export interface IQtApiOptionChains {
  byStockId(stockId: number): Promise<IOptionChain[]>;
}
export interface IQtApiSearch {
  stock(
    prefix: string,
    offset?: number | undefined
  ): Promise<ISymbolSearchResult[]>;
  allStocks(
    prefix: string,
    offset?: number | undefined
  ): Promise<ISymbolSearchResult[]>;
  countResults(prefix: string): Promise<number>;
}
