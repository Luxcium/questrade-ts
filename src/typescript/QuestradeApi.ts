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
  StrategyVariantRequest
} from '.';
import { IMyBalances } from './IMyBalances';

// DateRange<R>
export type DateRange<R> = (startTime: string) => (endTime: string) => R;

export interface QuestradeApi {
  currentAccount: string;
  myBalances: QtApiMyBalances;
  serverTime: Date | 'ERROR';
  account: QtApiAccount;
  market: QtApiMarket;
  getQuotes: QtApiQuotes;
  getOptionsQuotes: QtApiOptionsQuotes;
  getSymbols: QtApiSymbols;
  getOptionChains: QtApiOptionChains;
  search: QtApiSearch;
}
export type QtApiMyBalances = () => Promise<IMyBalances>;

export interface QtApiAccount {
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

export interface QtApiMarket {
  getAllMarkets(): Promise<IMarket[]>;
  getCandlesByStockId(
    symbolID: number
  ): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
}
export interface QtApiQuotes {
  byStockIds(ids: number[]): Promise<IQuote[]>;
  byStrategies(
    strategyVariantRequestData: StrategyVariantRequest
  ): Promise<IStrategiesQuotes>;
}

export interface QtApiOptionsQuotes {
  fromFilter(filters: OptionsFilters): Promise<IOptionsQuote[]>;
  byOptionsIds(optionIds: number[]): Promise<IOptionsQuote[]>;
}

export interface QtApiSymbols {
  byStockIds(stockIds: number[]): Promise<ISymbol[]>;
}

export interface QtApiOptionChains {
  byStockId(stockId: number): Promise<IOptionChain[]>;
}
export interface QtApiSearch {
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
