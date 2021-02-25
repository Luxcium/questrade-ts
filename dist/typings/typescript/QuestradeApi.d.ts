import { AccountStatus, AccountType, ClientAccountType } from 'questrade-api-enumerations';
import { AcountNumberString, IAccount, IAccountActivity, IBalances, ICandle, IExecution, IMarket, IOptionChain, IOptionsQuote, IOrder, IPosition, IQuote, IStrategiesQuotes, ISymbol, ISymbolSearchResult, OptionsFilters, StrategyVariantRequest } from '.';
import { IMyBalances } from './IMyBalances';
export declare type DateRange<R> = (startTime: string) => (endTime: string) => R;
export interface QuestradeApi {
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
export declare type QtApiMyBalances = () => Promise<IMyBalances>;
export interface QtApiAccount {
    currentAccount: string;
    getActivities(startTime: string): (endTime: string) => Promise<IAccountActivity[]>;
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
    getCandlesByStockId(symbolID: number): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
}
export interface QtApiQuotes {
    byStockIds(ids: number[]): Promise<IQuote[]>;
    byStrategies(strategyVariantRequestData: StrategyVariantRequest): Promise<IStrategiesQuotes>;
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
    stock(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
    allStocks(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
    countResults(prefix: string): Promise<number>;
}
export interface QuestradeApi2 {
    currentAccount: string;
    myBalances: Promise<{
        perCurrency: {
            CAD: {
                startOfDay: {
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                USD: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                USD: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                USD: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                USD: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                    currency: 'USD' | 'CAD';
                    cash: number;
                    marketValue: number;
                    totalEquity: number;
                    buyingPower: number;
                    maintenanceExcess: number;
                    isRealTime: boolean;
                };
                current: {
                    currency: 'USD' | 'CAD';
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
                        currency: 'USD' | 'CAD';
                        cash: number;
                        marketValue: number;
                        totalEquity: number;
                        buyingPower: number;
                        maintenanceExcess: number;
                        isRealTime: boolean;
                    };
                    current: {
                        currency: 'USD' | 'CAD';
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
                        currency: 'USD' | 'CAD';
                        cash: number;
                        marketValue: number;
                        totalEquity: number;
                        buyingPower: number;
                        maintenanceExcess: number;
                        isRealTime: boolean;
                    };
                    current: {
                        currency: 'USD' | 'CAD';
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
                        currency: 'USD' | 'CAD';
                        cash: number;
                        marketValue: number;
                        totalEquity: number;
                        buyingPower: number;
                        maintenanceExcess: number;
                        isRealTime: boolean;
                    };
                    current: {
                        currency: 'USD' | 'CAD';
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
                        currency: 'USD' | 'CAD';
                        cash: number;
                        marketValue: number;
                        totalEquity: number;
                        buyingPower: number;
                        maintenanceExcess: number;
                        isRealTime: boolean;
                    };
                    current: {
                        currency: 'USD' | 'CAD';
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
        getActivities(startTime: string): (endTime: string) => Promise<{
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
            stockId: string | number;
            /** description */
            description: string;
            /** enumeration Currency */
            currency: 'USD' | 'CAD';
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
        }[]>;
        getAllAccounts(): Promise<{
            type: AccountType;
            number: AcountNumberString;
            status: AccountStatus;
            isPrimary: boolean;
            isBilling: boolean;
            clientAccountType: ClientAccountType;
        }[]>;
        getBalances(): Promise<IBalances>;
        getExecutions(startTime: string): (endTime: string) => Promise<IExecution[]>;
        getOrders(stateFilter?: string | undefined): DateRange<Promise<IOrder[]>>;
        getOrdersByIds(orderId: number[]): Promise<IOrder[]>;
        getPositions(): Promise<IPosition[]>;
        getServerTime(): Promise<Date>;
    };
    market: {
        getAllMarkets(): Promise<IMarket[]>;
        getCandlesByStockId(symbolID: number): (interval?: string | undefined) => DateRange<Promise<ICandle[]>>;
    };
    getQuotes: {
        byStockIds(ids: number[]): Promise<IQuote[]>;
        byStrategies(strategyVariantRequestData: StrategyVariantRequest): Promise<IStrategiesQuotes>;
    };
    getOptionsQuotes: {
        fromFilter(filters: OptionsFilters): Promise<IOptionsQuote[]>;
        byOptionsIds(optionIds: number[]): Promise<IOptionsQuote[]>;
    };
    getSymbols: {
        byStockIds(stockIds: number[]): Promise<ISymbol[]>;
    };
    getOptionChains: {
        byStockId(stockId: number): Promise<IOptionChain[]>;
    };
    search: {
        stock(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
        allStocks(prefix: string, offset?: number | undefined): Promise<ISymbolSearchResult[]>;
        countResults(prefix: string): Promise<number>;
    };
}
//# sourceMappingURL=QuestradeApi.d.ts.map