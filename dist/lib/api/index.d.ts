import { qtEnumerations } from 'questrade-api-enumerations';
declare function redeemToken(refreshToken: string): Promise<{
    qtApi: {
        setAccount: string;
        getServerTime: () => Promise<Date>;
        get: {
            accounts: {
                activities: (startTime: string) => (endTime: string) => Promise<import("./core/typescript").IAccountActivity[]>;
                orders: (startDate: string) => (endDate: string) => (stateFilter?: string) => Promise<import("./core/typescript").IOrder[]>;
                ordersAll: (endDate: string) => (stateFilter?: string) => Promise<import("./core/typescript").IOrder[]>;
                ordersByIds: (orderId: number[]) => Promise<import("./core/typescript").IOrder[]>;
                executions: (startDate: string) => (endDate: string) => Promise<import("./core/typescript").IExecution[]>;
                balances: () => Promise<import("./core/typescript").IBalances>;
                positions: () => Promise<import("./core/typescript").IPosition[]>;
                allAccounts: () => Promise<import("./core/typescript").IAccount[]>;
                time: () => Promise<Date>;
            };
            markets: {
                candlesById: (startDate: string) => (endDate: string) => (interval?: string) => (symbolID: number) => Promise<import("./core/typescript").ICandle[]>;
                quotes: {
                    byStrategies: () => Promise<any>;
                    options: import("./core/_getApi").QuotesOptionsbyFilterAndIds;
                    byIds: (ids: number[]) => Promise<import("./core/typescript").IQuote[]>;
                };
                allMarkets: () => Promise<import("./core/typescript").IMarket[]>;
            };
            symbols: {
                optionsById: (symbolID: number) => Promise<any[]>;
                byIds: (symbolId: number[]) => Promise<import("./core/typescript").ISymbols>;
                search: import("./core/_getApi").SymbolSearchAndCount;
                searchAll: (prefix: string, offset?: number) => Promise<import("./core/typescript").ISymbol[]>;
                searchCount: (prefix: string) => Promise<number>;
            };
        };
    };
    credentials: import("./core/typescript").Credentials;
}>;
export { id0, log, day } from './utils';
export { redeemToken };
export { testExamples } from './testExamples';
export { qtEnumerations as Enumerations };
//# sourceMappingURL=index.d.ts.map