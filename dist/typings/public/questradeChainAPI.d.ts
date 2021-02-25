import { ApiCallQ_ } from '../private/core/next-rate-limiter/queue';
import { Credentials, OptionsFilters, ProxyFactory_, StrategyVariantRequest } from '../typescript';
export declare const asyncQuestradeApi: (credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ((cred: Credentials) => ProxyFactory_) | null) => {
    asyncAccount: Promise<import("../typescript").QtApiAccount & {
        currentAccount: string;
        getActivities(startTime: string): (endTime: string) => Promise<import("../typescript").IAccountActivity[]>;
        getAllAccounts(): Promise<import("../typescript").IAccount[]>;
        getBalances(): Promise<import("../typescript").IBalances>;
        getExecutions(startTime: string): (endTime: string) => Promise<import("../typescript").IExecution[]>;
        getOrders(stateFilter?: string | undefined): import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>;
        getOrdersByIds(orderId: number[]): Promise<import("../typescript").IOrder[]>;
        getPositions(): Promise<import("../typescript").IPosition[]>;
        getServerTime(): Promise<Date>;
    }>;
    asyncActivities: Promise<((startTime: string) => (endTime: string) => Promise<import("../typescript").IAccountActivity[]>) & ((startTime: string) => (endTime: string) => Promise<import("../typescript").IAccountActivity[]>)>;
    asyncAllAccounts: Promise<(() => Promise<import("../typescript").IAccount[]>) & (() => Promise<import("../typescript").IAccount[]>)>;
    asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
    asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
    asyncApi: {
        asyncAccount: Promise<import("../typescript").QtApiAccount & {
            currentAccount: string;
            getActivities(startTime: string): (endTime: string) => Promise<import("../typescript").IAccountActivity[]>;
            getAllAccounts(): Promise<import("../typescript").IAccount[]>;
            getBalances(): Promise<import("../typescript").IBalances>;
            getExecutions(startTime: string): (endTime: string) => Promise<import("../typescript").IExecution[]>;
            getOrders(stateFilter?: string | undefined): import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>;
            getOrdersByIds(orderId: number[]): Promise<import("../typescript").IOrder[]>;
            getPositions(): Promise<import("../typescript").IPosition[]>;
            getServerTime(): Promise<Date>;
        }>;
        asyncCurrentAccount: Promise<string>;
        asyncMyBalances: Promise<import("../typescript").QtApiMyBalances>;
        asyncServerTime: Promise<Date | "ERROR">;
        getOptionChains: {
            asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
        };
        getOptionsQuotes: {
            asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
            asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
        };
        getQuotes: {
            asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
            asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
        };
        getSymbols: {
            asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
        };
        market: {
            asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
            asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
        };
        search: {
            asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
            asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
            asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
        };
    };
    asyncBalances: Promise<(() => Promise<import("../typescript").IBalances>) & (() => Promise<import("../typescript").IBalances>)>;
    asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
    asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
    asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
    asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
    asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
    asyncCurrentAccount: Promise<string>;
    asyncExecutions: Promise<((startTime: string) => (endTime: string) => Promise<import("../typescript").IExecution[]>) & ((startTime: string) => (endTime: string) => Promise<import("../typescript").IExecution[]>)>;
    asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
    asyncGetOptionChains: {
        asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
    };
    asyncGetOptionsQuotes: {
        asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
        asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
    };
    asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
    asyncGetQuotes: {
        asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
        asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
    };
    asyncGetServerTime: Promise<(() => Promise<Date>) & (() => Promise<Date>)>;
    asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
    asyncGetSymbols: {
        asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
    };
    asyncMarket: {
        asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
        asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
    };
    asyncMyBalances: Promise<import("../typescript").QtApiMyBalances>;
    asyncOrders: Promise<((stateFilter?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>) & ((stateFilter?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>)>;
    asyncOrdersByIds: Promise<((orderId: number[]) => Promise<import("../typescript").IOrder[]>) & ((orderId: number[]) => Promise<import("../typescript").IOrder[]>)>;
    asyncPositions: Promise<(() => Promise<import("../typescript").IPosition[]>) & (() => Promise<import("../typescript").IPosition[]>)>;
    asyncQtApi: Promise<import("../typescript").QuestradeApi & import("./IQuestradeAPIv2_0").IQuestradeAPIv2_0>;
    asyncSearch: {
        asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
        asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
        asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
    };
    asyncServerTime: Promise<Date | "ERROR">;
    asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
};
export declare class ChainApiClass {
    private credentials;
    private apiCallQ;
    private proxy?;
    asyncApi: {
        asyncAccount: Promise<import("../typescript").QtApiAccount & {
            currentAccount: string;
            getActivities(startTime: string): (endTime: string) => Promise<import("../typescript").IAccountActivity[]>;
            getAllAccounts(): Promise<import("../typescript").IAccount[]>;
            getBalances(): Promise<import("../typescript").IBalances>;
            getExecutions(startTime: string): (endTime: string) => Promise<import("../typescript").IExecution[]>;
            getOrders(stateFilter?: string | undefined): import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>;
            getOrdersByIds(orderId: number[]): Promise<import("../typescript").IOrder[]>;
            getPositions(): Promise<import("../typescript").IPosition[]>;
            getServerTime(): Promise<Date>;
        }>;
        asyncActivities: Promise<((startTime: string) => (endTime: string) => Promise<import("../typescript").IAccountActivity[]>) & ((startTime: string) => (endTime: string) => Promise<import("../typescript").IAccountActivity[]>)>;
        asyncAllAccounts: Promise<(() => Promise<import("../typescript").IAccount[]>) & (() => Promise<import("../typescript").IAccount[]>)>;
        asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
        asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
        asyncApi: {
            asyncAccount: Promise<import("../typescript").QtApiAccount & {
                currentAccount: string;
                getActivities(startTime: string): (endTime: string) => Promise<import("../typescript").IAccountActivity[]>;
                getAllAccounts(): Promise<import("../typescript").IAccount[]>;
                getBalances(): Promise<import("../typescript").IBalances>;
                getExecutions(startTime: string): (endTime: string) => Promise<import("../typescript").IExecution[]>;
                getOrders(stateFilter?: string | undefined): import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>;
                getOrdersByIds(orderId: number[]): Promise<import("../typescript").IOrder[]>;
                getPositions(): Promise<import("../typescript").IPosition[]>;
                getServerTime(): Promise<Date>;
            }>;
            asyncCurrentAccount: Promise<string>;
            asyncMyBalances: Promise<import("../typescript").QtApiMyBalances>;
            asyncServerTime: Promise<Date | "ERROR">;
            getOptionChains: {
                asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
            };
            getOptionsQuotes: {
                asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
                asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
            };
            getQuotes: {
                asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
                asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
            };
            getSymbols: {
                asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
            };
            market: {
                asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
                asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
            };
            search: {
                asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
                asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
                asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
            };
        };
        asyncBalances: Promise<(() => Promise<import("../typescript").IBalances>) & (() => Promise<import("../typescript").IBalances>)>;
        asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
        asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
        asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
        asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
        asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
        asyncCurrentAccount: Promise<string>;
        asyncExecutions: Promise<((startTime: string) => (endTime: string) => Promise<import("../typescript").IExecution[]>) & ((startTime: string) => (endTime: string) => Promise<import("../typescript").IExecution[]>)>;
        asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
        asyncGetOptionChains: {
            asyncByStockId: Promise<((stockId: number) => Promise<import("../typescript").IOptionChain[]>) & ((stockId: number) => Promise<import("../typescript").IOptionChain[]>)>;
        };
        asyncGetOptionsQuotes: {
            asyncByOptionsIds: Promise<((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>) & ((optionIds: number[]) => Promise<import("../typescript").IOptionsQuote[]>)>;
            asyncFromFilter: Promise<((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>) & ((filters: OptionsFilters) => Promise<import("../typescript").IOptionsQuote[]>)>;
        };
        asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
        asyncGetQuotes: {
            asyncByStrategies: Promise<((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>) & ((strategyVariantRequestData: StrategyVariantRequest) => Promise<import("../typescript").IStrategiesQuotes>)>;
            asyncGetQuoteByStockIds: Promise<((ids: number[]) => Promise<import("../typescript").IQuote[]>) & ((ids: number[]) => Promise<import("../typescript").IQuote[]>)>;
        };
        asyncGetServerTime: Promise<(() => Promise<Date>) & (() => Promise<Date>)>;
        asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
        asyncGetSymbols: {
            asyncGetSymbolByStockIds: Promise<((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>) & ((stockIds: number[]) => Promise<import("../typescript").ISymbol[]>)>;
        };
        asyncMarket: {
            asyncAllMarkets: Promise<(() => Promise<import("../typescript").IMarket[]>) & (() => Promise<import("../typescript").IMarket[]>)>;
            asyncCandlesByStockId: Promise<((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>) & ((symbolID: number) => (interval?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").ICandle[]>>)>;
        };
        asyncMyBalances: Promise<import("../typescript").QtApiMyBalances>;
        asyncOrders: Promise<((stateFilter?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>) & ((stateFilter?: string | undefined) => import("../typescript").DateRange<Promise<import("../typescript").IOrder[]>>)>;
        asyncOrdersByIds: Promise<((orderId: number[]) => Promise<import("../typescript").IOrder[]>) & ((orderId: number[]) => Promise<import("../typescript").IOrder[]>)>;
        asyncPositions: Promise<(() => Promise<import("../typescript").IPosition[]>) & (() => Promise<import("../typescript").IPosition[]>)>;
        asyncQtApi: Promise<import("../typescript").QuestradeApi & import("./IQuestradeAPIv2_0").IQuestradeAPIv2_0>;
        asyncSearch: {
            asyncAllStocks: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
            asyncCountResults: Promise<((prefix: string) => Promise<number>) & ((prefix: string) => Promise<number>)>;
            asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
        };
        asyncServerTime: Promise<Date | "ERROR">;
        asyncStock: Promise<((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>) & ((prefix: string, offset?: number | undefined) => Promise<import("../typescript").ISymbolSearchResult[]>)>;
    };
    _stockIdList?: number[];
    _stockId?: number;
    _symbolName?: string;
    _orderIdList?: number[];
    _startTime?: string;
    _endTime?: string;
    _interval?: string;
    _optionIdList?: number[];
    _offset?: number;
    _stateFilter?: string;
    _OptionsFilters?: OptionsFilters;
    _strategyVariantRequestData?: StrategyVariantRequest;
    symbolName(symbolName: string, offset?: number): this;
    stockId(stockId: number): this;
    stockIdList(...idList: number[]): this;
    optionIdList(...values: number[]): this;
    orderIdList(...values: number[]): this;
    startTime(startTime: string): this;
    endTime(endTime: string): this;
    interval(interval: string | undefined): this;
    stateFilter(state: string): this;
    optionsFilters(filters: OptionsFilters): this;
    strategyVariantRequestData(value: StrategyVariantRequest): this;
    constructor(credentials: Credentials, apiCallQ: ApiCallQ_, proxy?: ((cred: Credentials) => ProxyFactory_) | undefined);
}
//# sourceMappingURL=questradeChainAPI.d.ts.map