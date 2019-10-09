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

export type GetActivities = (
  startTime: string
) => (endTime: string) => Promise<IAccountActivity[]>;

export type GetOrders = (
  stateFilter?: string | undefined
) => (startDate: string) => (endDate: string) => Promise<IOrder[]>;
export type GetOrdersAll = (
  startTime: string
) => (endDate: string) => Promise<IOrder[]>;
export type GetOrdersByIds = (orderId: number[]) => Promise<IOrder[]>;

export type GetExecutions = (
  startTime: string
) => (endDate: string) => Promise<IExecution[]>;

export type GetBalances = () => Promise<IBalances>;

export type GetPositions = () => Promise<IPosition[]>;

export type GetAllAccounts = () => Promise<IAccount[]>;

export type GetServerTime = () => Promise<Date>;

export type GetCandlesById = (
  startDate: string
) => (
  endDate: string
) => (interval?: string) => (symbolID: number) => Promise<ICandle[]>;

export type GetStrategies = (
  strategyVariantRequestData: StrategyVariantRequest
) => Promise<IStrategiesQuotes>;

export type GetOptionsQuotes = (
  filters: OptionsFilters
) => Promise<IOptionsQuotes>;

export type GetStockQuotesByIds = (ids: number[]) => Promise<IQuote[]>;

export type GetAllMarkets = () => Promise<IMarket[]>;

export type GetOptionsChainsById = (stockId: number) => Promise<IOptionChain[]>;

export type GetSymbolsByIds = (stockIds: number[]) => Promise<ISymbol[]>;

export type GetStockSearch = (
  prefix: string,
  offset?: number | undefined
) => Promise<ISymbolSearchResult>;

export type GetSearchAll = (
  prefix: string,
  offset?: number | undefined
) => Promise<ISymbolSearchResult[]>;

export type GetSearchCount = (prefix: string) => Promise<number>;
// account

/*

*/
export interface IQuestradeApi {
  myBalances: any;
  currentAccount: any;
  serverTime: Date;
  get: {
    account: {
      activities: GetActivities;
      allAccounts: GetAllAccounts;
      balances: GetBalances;
      executions: GetExecutions;
      orders: GetOrders;
      allOrders: GetOrdersAll;
      ordersByIds: GetOrdersByIds;
      positions: GetPositions;
    };
    market: {
      allMarkets: GetAllMarkets;
      candlesByStockId: GetCandlesById;
    };
    quotes: {
      byStrategies: GetStrategies;
      optionsQuotes: {
        fromFilter: any;
        byOptionsIds: any;
      };
      byStockIds: GetStockQuotesByIds;
    };
    search: {
      stock: GetStockSearch;
      allStocks: GetSearchAll;
      countResults: GetSearchCount;
    };
    symbols: {
      optionChains: {
        byStockId: GetOptionsChainsById;
      };
      byStockIds: GetSymbolsByIds;
    };
  };
}
