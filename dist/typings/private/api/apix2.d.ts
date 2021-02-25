import type { Credentials, Logger, OptionsFilters, ProxyFactory_, StrategyVariantRequest } from '../../typescript';
import type { ApiCallQ_ } from '../core/next-rate-limiter/queue';
export declare function questradeApiFactory(credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ((cred: Credentials) => ProxyFactory_) | null, errorlog?: Logger): Promise<{
    account: {
        currentAccount: any;
        getActivities(startTime: string): any;
        getAllAccounts(): Promise<any>;
        getBalances(): Promise<any>;
        getExecutions(startTime: string): any;
        getOrders(stateFilter?: string | undefined): any;
        getOrdersByIds(orderId: number[]): Promise<any>;
        getPositions(): Promise<any>;
        getServerTime(): Promise<any>;
    };
    getOptionChains: {
        byStockId(stockId: number): Promise<any>;
    };
    getOptionsQuotes: {
        byOptionsIds(optionIds: number[]): Promise<any>;
        fromFilter(filters: OptionsFilters): Promise<any>;
    };
    getQuotes: {
        byStockIds(ids: number[]): Promise<any>;
        byStrategies(strategyVariantRequestData: StrategyVariantRequest): Promise<any>;
    };
    getSymbols: {
        byStockIds(stockIds: number[]): Promise<any>;
    };
    market: {
        getAllMarkets(): Promise<any>;
        getCandlesByStockId(symbolID: number): any;
    };
    myBalances(): Promise<import("../../typescript").IMyBalances>;
    search: {
        allStocks(prefix: string, offset?: number | undefined): Promise<any>;
        countResults(prefix: string): Promise<any>;
        stock(prefix: string, offset?: number | undefined): Promise<any>;
    };
    serverTime: any;
}>;
export declare function questradeApiFactory1(credentials: Credentials, apiCallQ: ApiCallQ_, proxy: ((cred: Credentials) => ProxyFactory_) | null, errorlog?: Logger): Promise<{
    accGet: (placeHolder: any) => any;
    credentials: Credentials;
    get: (placeHolder: any) => any;
    get2: (placeHolder: any) => any;
    post: (placeHolder: any) => any;
    post2: (placeHolder: any) => any;
}>;
export declare function questradeApiFactory2(someArgsName: any): Promise<{
    accounts: any;
    activities: any;
    balances: any;
    candles: any;
    credentials: any;
    executions: any;
    markets: any;
    marketsQuotesStrategies: any;
    optionsById: any;
    orders: any;
    ordersByIds: any;
    positions: any;
    quotesByIds: any;
    quotesOptionsByIds: any;
    quotesOptionsFilter: any;
    serverTime: any;
    symbolSearch: any;
    symbolSearchAll: any;
    symbolSearchCount: any;
    symbolsByIds: any;
}>;
export declare function questradeApiFactory3(api: any): Promise<{
    account: {
        currentAccount: any;
        getActivities(startTime: string): any;
        getAllAccounts(): Promise<any>;
        getBalances(): Promise<any>;
        getExecutions(startTime: string): any;
        getOrders(stateFilter?: string | undefined): any;
        getOrdersByIds(orderId: number[]): Promise<any>;
        getPositions(): Promise<any>;
        getServerTime(): Promise<any>;
    };
    getOptionChains: {
        byStockId(stockId: number): Promise<any>;
    };
    getOptionsQuotes: {
        byOptionsIds(optionIds: number[]): Promise<any>;
        fromFilter(filters: OptionsFilters): Promise<any>;
    };
    getQuotes: {
        byStockIds(ids: number[]): Promise<any>;
        byStrategies(strategyVariantRequestData: StrategyVariantRequest): Promise<any>;
    };
    getSymbols: {
        byStockIds(stockIds: number[]): Promise<any>;
    };
    market: {
        getAllMarkets(): Promise<any>;
        getCandlesByStockId(symbolID: number): any;
    };
    myBalances(): Promise<import("../../typescript").IMyBalances>;
    search: {
        allStocks(prefix: string, offset?: number | undefined): Promise<any>;
        countResults(prefix: string): Promise<any>;
        stock(prefix: string, offset?: number | undefined): Promise<any>;
    };
    serverTime: any;
}>;
//# sourceMappingURL=apix2.d.ts.map