import { _Filters } from './_marketsQuotesOptions';
import { Credentials, IBalances, ICandle, IOptionsQuotes, ISymbol, ISymbols } from './typescript';
export declare const _getDataFromApi: (credentials: Credentials) => {
    setAccount: string;
    getServerTime: () => Promise<Date>;
    get: {
        accounts: {
            activities: (startTime: string) => (endTime: string) => Promise<import("./typescript").IAccountActivity[]>;
            orders: (startDate: string) => (endDate: string) => (stateFilter?: string) => Promise<import("./typescript").IOrder[]>;
            ordersAll: (endDate: string) => (stateFilter?: string) => Promise<import("./typescript").IOrder[]>;
            ordersByIds: (orderId: number[]) => Promise<import("./typescript").IOrder[]>;
            executions: (startDate: string) => (endDate: string) => Promise<import("./typescript").IExecution[]>;
            balances: () => Promise<IBalances>;
            positions: () => Promise<import("./typescript").IPosition[]>;
            allAccounts: () => Promise<import("./typescript").IAccount[]>;
            time: () => Promise<Date>;
        };
        markets: {
            candlesById: (startDate: string) => (endDate: string) => (interval?: string) => (symbolID: number) => Promise<ICandle[]>;
            quotes: {
                byStrategies: () => Promise<any>;
                options: QuotesOptionsbyFilterAndIds;
                byIds: (ids: number[]) => Promise<import("./typescript").IQuote[]>;
            };
            allMarkets: () => Promise<import("./typescript").IMarket[]>;
        };
        symbols: {
            optionsById: (symbolID: number) => Promise<any[]>;
            byIds: (symbolId: number[]) => Promise<ISymbols>;
            search: SymbolSearchAndCount;
            searchAll: (prefix: string, offset?: number) => Promise<ISymbol[]>;
            searchCount: (prefix: string) => Promise<number>;
        };
    };
};
export interface ISymbolSearchCount {
    count: (prefix: string) => Promise<number>;
}
export declare type SymbolSearch = (prefix: string, offset?: number) => Promise<ISymbol>;
export declare type SymbolSearchAndCount = SymbolSearch & ISymbolSearchCount;
export interface IQuotesOptionsByIds {
    byIds: (optionIds: number[]) => Promise<IOptionsQuotes>;
}
export declare type QuotesOptions = (filters: _Filters) => Promise<IOptionsQuotes>;
export declare type QuotesOptionsbyFilterAndIds = IQuotesOptionsByIds & QuotesOptions;
//# sourceMappingURL=_getDataFromApi.d.ts.map