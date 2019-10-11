import {
  IAccount,
  IAccountActivity,
  IBalance,
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

export interface IMyBalances {
  perCurrency: {
    CAD: {
      startOfDay: IBalance;
      current: IBalance;
    };
    USD: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  combined: {
    CAD: {
      startOfDay: IBalance;
      current: IBalance;
    };
    USD: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  current: {
    perCurrency: {
      CAD: IBalance;
      USD: IBalance;
    };
    combined: {
      CAD: IBalance;
      USD: IBalance;
    };
  };
  startOfDay: {
    combined: {
      CAD: IBalance;
      USD: IBalance;
    };
    perCurrency: {
      CAD: IBalance;
      USD: IBalance;
    };
  };
  CAD: {
    perCurrency: {
      startOfDay: IBalance;
      current: IBalance;
    };
    combined: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  USD: {
    combined: {
      startOfDay: IBalance;
      current: IBalance;
    };
    perCurrency: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
}
// DateRange<R>
export type DateRange<R> = (startTime: string) => (endTime: string) => R;

export interface IQuestradeApi {
  currentAccount: string;
  myBalances: IMyBalances;
  serverTime: Date;
  get: {
    account: {
      activities(
        startTime: string
      ): (endTime: string) => Promise<IAccountActivity[]>;

      allAccounts(): Promise<IAccount[]>;

      balances(): Promise<IBalances>;

      executions(startTime: string): (endTime: string) => Promise<IExecution[]>;

      orders(stateFilter?: string | undefined): DateRange<Promise<IOrder[]>>;

      ordersByIds(orderId: number[]): Promise<IOrder[]>;

      positions(): Promise<IPosition[]>;
    };
    market: {
      allMarkets(): Promise<IMarket[]>;
      candlesByStockId(
        symbolID: number
      ): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
    };
    quotes: {
      optionsQuotes: {
        fromFilter(filters: OptionsFilters): Promise<IOptionsQuotes>;
        byOptionsIds(optionIds: number[]): Promise<IOptionsQuotes>;
      };
      byStrategies(
        strategyVariantRequestData: StrategyVariantRequest
      ): Promise<IStrategiesQuotes>;

      byStockIds(ids: number[]): Promise<IQuote[]>;
    };
    search: {
      stock(
        prefix: string,
        offset?: number | undefined
      ): Promise<ISymbolSearchResult>;
      allStocks(
        prefix: string,
        offset?: number | undefined
      ): Promise<ISymbolSearchResult[]>;
      countResults(prefix: string): Promise<number>;
    };
    symbols: {
      optionChains: {
        byStockId(stockId: number): Promise<IOptionChain[]>;
      };
      byStockIds(stockIds: number[]): Promise<ISymbol[]>;
    };
  };
}
