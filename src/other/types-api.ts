import type {
  AccountStatus,
  AccountType,
  ClientAccountType,
} from 'questrade-api-enumerations';

import type {
  AcountNumberString,
  IAccount,
  IAccountActivity,
  IBalances,
  ICandle,
  IExecution,
  IMarket,
  IMyBalances,
  IOptionChain,
  IOptionsQuote,
  IOrder,
  IPosition,
  IQuote,
  IStrategiesQuotes,
  ISymbol,
  IEquitySymbol,
  OptionsFilters,
  StrategyVariantRequest,
} from '../typescript';

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
  getActivities: (
    startTime: string,
  ) => (endTime: string) => Promise<IAccountActivity[]>;
  getAllAccounts: () => Promise<IAccount[]>;
  getBalances: () => Promise<IBalances>;
  getExecutions: (
    startTime: string,
  ) => (endTime: string) => Promise<IExecution[]>;
  getOrders: (
    stateFilter?: string | undefined,
  ) => (startTime: string) => (endTime: string) => Promise<IOrder[]>;
  getOrdersByIds: (orderId: number[]) => Promise<IOrder[]>;
  getPositions: () => Promise<IPosition[]>;
  getServerTime: () => Promise<Date>;
}

export interface QtApiMarket {
  getAllMarkets: () => Promise<IMarket[]>;
  getCandlesByStockId: (
    symbolID: number,
  ) => (
    interval?: string | undefined,
  ) => (startTime: string) => (endTime: string) => Promise<ICandle[]>;
}
export interface QtApiQuotes {
  byStockIds: (ids: number[]) => Promise<IQuote[]>;
  byStrategies: (
    strategyVariantRequestData: StrategyVariantRequest,
  ) => Promise<IStrategiesQuotes>;
}

export interface QtApiOptionsQuotes {
  fromFilter: (filters: OptionsFilters) => Promise<IOptionsQuote[]>;
  byOptionsIds: (optionIds: number[]) => Promise<IOptionsQuote[]>;
}

export interface QtApiSymbols {
  byStockIds: (stockIds: number[]) => Promise<ISymbol[]>;
}

export interface QtApiOptionChains {
  byStockId: (stockId: number) => Promise<IOptionChain[]>;
}
export interface QtApiSearch {
  stock: (
    prefix: string,
    offset?: number | undefined,
  ) => Promise<IEquitySymbol[]>;
  allStocks: (
    prefix: string,
    offset?: number | undefined,
  ) => Promise<IEquitySymbol[]>;
  countResults: (prefix: string) => Promise<number>;
}

export interface QuestradeApi2 {
  currentAccount: string;
  myBalances: Promise<{
    perCurrency: {
      CAD: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
      USD: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
    };
    combined: {
      CAD: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
      USD: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
    };
    current: {
      perCurrency: {
        CAD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        USD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
      combined: {
        CAD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        USD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
    };
    startOfDay: {
      combined: {
        CAD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        USD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
      perCurrency: {
        CAD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        USD: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
    };
    CAD: {
      perCurrency: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
      combined: {
        startOfDay: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
        current: {
          currency: 'CAD' | 'USD';
          cash: number;
          marketValue: number;
          totalEquity: number;
          buyingPower: number;
          maintenanceExcess: number;
          isRealTime: boolean;
        };
      };
    };
    USD: {
      combined: {
        startOfDay: {
          startOfDay: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
          current: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
        };
        current: {
          startOfDay: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
          current: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
        };
      };
      perCurrency: {
        startOfDay: {
          startOfDay: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
          current: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
        };
        current: {
          startOfDay: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
          current: {
            currency: 'CAD' | 'USD';
            cash: number;
            marketValue: number;
            totalEquity: number;
            buyingPower: number;
            maintenanceExcess: number;
            isRealTime: boolean;
          };
        };
      };
    };
  }>;
  serverTime: Date | 'ERROR';
  account: {
    getActivities: (
      startTime: string,
    ) => (
      endTime: string,
    ) => Promise<
      {
        /** trade date */
        tradeDate: Date | string;
        /** transaction date */
        transactionDate: Date | string;
        /** settlement date */
        settlementDate: Date | string;
        /** activity action */
        action: string;
        /** symbol name */
        symbol: string;
        /** symbol ID */
        stockId: number | string;
        /** description */
        description: string;
        /** enumeration Currency */
        currency: 'CAD' | 'USD';
        /** the quantity */
        quantity: number;
        /** the price */
        price: number;
        /** gross amount */
        grossAmount: number;
        /** the commission */
        commission: number;
        /** net Amount */
        netAmount: number;
        /** activity Type */
        type: string;
      }[]
    >;

    getAllAccounts: () => Promise<
      {
        type: AccountType;
        number: AcountNumberString;
        status: AccountStatus;
        isPrimary: boolean;
        isBilling: boolean;
        clientAccountType: ClientAccountType;
      }[]
    >;
    getBalances: () => Promise<IBalances>;
    getExecutions: (
      startTime: string,
    ) => (endTime: string) => Promise<IExecution[]>;
    getOrders: (
      stateFilter?: string | undefined,
    ) => (startTime: string) => (endTime: string) => Promise<IOrder[]>;
    getOrdersByIds: (orderId: number[]) => Promise<IOrder[]>;
    getPositions: () => Promise<IPosition[]>;
    getServerTime: () => Promise<Date>;
  };
  market: {
    getAllMarkets: () => Promise<IMarket[]>;
    getCandlesByStockId: (
      symbolID: number,
    ) => (
      interval?: string | undefined,
    ) => (startTime: string) => (endTime: string) => Promise<ICandle[]>;
  };
  getQuotes: {
    byStockIds: (ids: number[]) => Promise<IQuote[]>;
    byStrategies: (
      strategyVariantRequestData: StrategyVariantRequest,
    ) => Promise<IStrategiesQuotes>;
  };
  getOptionsQuotes: {
    fromFilter: (filters: OptionsFilters) => Promise<IOptionsQuote[]>;
    byOptionsIds: (optionIds: number[]) => Promise<IOptionsQuote[]>;
  };
  getSymbols: {
    byStockIds: (stockIds: number[]) => Promise<ISymbol[]>;
  };
  getOptionChains: {
    byStockId: (stockId: number) => Promise<IOptionChain[]>;
  };
  search: {
    stock: (
      prefix: string,
      offset?: number | undefined,
    ) => Promise<IEquitySymbol[]>;
    allStocks: (
      prefix: string,
      offset?: number | undefined,
    ) => Promise<IEquitySymbol[]>;
    countResults: (prefix: string) => Promise<number>;
  };
}
