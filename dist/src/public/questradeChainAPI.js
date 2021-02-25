"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainApiClass = exports.asyncQuestradeApi = void 0;
const _getQuestradeApi_1 = require("../private/api/_getQuestradeApi");
const asyncQuestradeApi = (credentials, apiCallQ, proxy) => {
    // XXX: WORKING ON questradeApiFactory CALLS
    const asyncQtApi = _getQuestradeApi_1.questradeApiFactory(credentials, apiCallQ, proxy);
    const asyncAccount = asyncQtApi.then(t => t.account);
    const asyncCurrentAccount = asyncQtApi.then(t => t.account.currentAccount);
    const asyncMyBalances = asyncQtApi.then(t => t.myBalances);
    const asyncServerTime = asyncQtApi.then(t => t.serverTime);
    const asyncGetServerTime = asyncQtApi.then(t => t.account.getServerTime);
    const asyncActivities = asyncQtApi.then(t => t.account.getActivities);
    const asyncAllAccounts = asyncQtApi.then(t => t.account.getAllAccounts);
    const asyncBalances = asyncQtApi.then(t => t.account.getBalances);
    const asyncExecutions = asyncQtApi.then(t => t.account.getExecutions);
    const asyncOrders = asyncQtApi.then(t => t.account.getOrders);
    const asyncOrdersByIds = asyncQtApi.then(t => t.account.getOrdersByIds);
    const asyncPositions = asyncQtApi.then(t => t.account.getPositions);
    const asyncAllMarkets = asyncQtApi.then(t => t.market.getAllMarkets);
    const asyncCandlesByStockId = asyncQtApi.then(t => t.market.getCandlesByStockId);
    const asyncByOptionsIds = asyncQtApi.then(t => t.getOptionsQuotes.byOptionsIds);
    const asyncFromFilter = asyncQtApi.then(t => t.getOptionsQuotes.fromFilter);
    const asyncGetQuoteByStockIds = asyncQtApi.then(t => t.getQuotes.byStockIds);
    const asyncByStrategies = asyncQtApi.then(t => t.getQuotes.byStrategies);
    const asyncByStockId = asyncQtApi.then(t => t.getOptionChains.byStockId);
    const asyncGetSymbolByStockIds = asyncQtApi.then(t => t.getSymbols.byStockIds);
    const asyncStock = asyncQtApi.then(t => t.search.stock);
    const asyncAllStocks = asyncQtApi.then(t => t.search.allStocks);
    const asyncCountResults = asyncQtApi.then(t => t.search.countResults);
    // const asyncCountResults = asyncQtApi.then(t => t.search.countResults);
    const market = {
        asyncAllMarkets,
        asyncCandlesByStockId,
    };
    const getOptionsQuotes = {
        asyncByOptionsIds,
        asyncFromFilter,
    };
    const getQuotes = {
        asyncByStrategies,
        asyncGetQuoteByStockIds,
    };
    const getOptionChains = {
        asyncByStockId,
    };
    const getSymbols = {
        asyncGetSymbolByStockIds,
    };
    const search = {
        asyncAllStocks,
        asyncCountResults,
        asyncStock,
    };
    const api = {
        asyncAccount,
        asyncCurrentAccount,
        asyncMyBalances,
        asyncServerTime,
        getOptionChains,
        getOptionsQuotes,
        getQuotes,
        getSymbols,
        market,
        search,
    };
    const all = {
        asyncAccount,
        asyncActivities,
        asyncAllAccounts,
        asyncAllMarkets,
        asyncAllStocks,
        asyncApi: api,
        asyncBalances,
        asyncByOptionsIds,
        asyncByStockId,
        asyncByStrategies,
        asyncCandlesByStockId,
        asyncCountResults,
        asyncCurrentAccount,
        asyncExecutions,
        asyncFromFilter,
        asyncGetOptionChains: getOptionChains,
        asyncGetOptionsQuotes: getOptionsQuotes,
        asyncGetQuoteByStockIds,
        asyncGetQuotes: getQuotes,
        asyncGetServerTime,
        asyncGetSymbolByStockIds,
        asyncGetSymbols: getSymbols,
        asyncMarket: market,
        asyncMyBalances,
        asyncOrders,
        asyncOrdersByIds,
        asyncPositions,
        asyncQtApi,
        asyncSearch: search,
        asyncServerTime,
        asyncStock,
    };
    return Object.assign({}, all);
};
exports.asyncQuestradeApi = asyncQuestradeApi;
class ChainApiClass {
    constructor(credentials, apiCallQ, proxy) {
        Object.defineProperty(this, "credentials", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: credentials
        });
        Object.defineProperty(this, "apiCallQ", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: apiCallQ
        });
        Object.defineProperty(this, "proxy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: proxy
        });
        // public asyncActivities: Promise<(startTime: string) => (endTime: string) => Promise<IAccountActivity[]>>;
        // public asyncAllAccounts: Promise<() => Promise<IAccount[]>>;
        // public asyncBalances: Promise<() => Promise<IBalances>>;
        // public asyncExecutions: Promise<(startTime: string) => (endTime: string) => Promise<IExecution[]>>;
        // public asyncOrders: Promise<(stateFilter?: string | undefined) => (startTime: string) => (endTime: string) => Promise<IOrder[]>>;
        // public asyncOrdersByIds: Promise<(orderId: number[]) => Promise<IOrder[]>>;
        // public asyncPositions: Promise<() => Promise<IPosition[]>>;
        // public asyncAllStocks: Promise<(prefix: string, offset?: number | undefined) => Promise<ISymbolSearchResult[]>>;
        // public asyncAllMarkets: Promise<() => Promise<IMarket[]>>;
        // public asyncByOptionsIds: Promise<(optionIds: number[]) => Promise<IOptionsQuote[]>>;
        // public asyncByStockId: Promise<(stockId: number) => Promise<IOptionChain[]>>;
        // public asyncByStrategies: Promise<(strategyVariantRequestData: StrategyVariantRequest) => Promise<IStrategiesQuotes>>;
        // public asyncAccount: Promise<QtApiAccount>;
        // public asyncCandlesByStockId: Promise<(symbolID: number) => (interval?: string | undefined) => (startTime: string) => (endTime: string) => Promise<ICandle[]>>;
        // public asyncCountResults: Promise<(prefix: string) => Promise<number>>;
        // public asyncCurrentAccount: Promise<string>;
        // public asyncFromFilter: Promise<(filters: OptionsFilters) => Promise<IOptionsQuote[]>>;
        // public asyncQuoteByStockIds: Promise<(ids: number[]) => Promise<IQuote[]>>;
        // public asyncGetServerTime: Promise<() => Promise<Date>>;
        // public asyncGetSymbolByStockIds: Promise<(stockIds: number[]) => Promise<ISymbol[]>>;
        // public asyncMyBalances: Promise<QtApiMyBalances>;
        // public asyncServerTime: Promise<Date | 'ERROR'>;
        // public asyncStock: Promise<(prefix: string, offset?: number | undefined) => Promise<ISymbolSearchResult[]>>;
        // public asyncQtApi: Promise<QuestradeApi>;
        Object.defineProperty(this, "asyncApi", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // public market;
        // public getOptionsQuotes;
        // public getOptionChains;
        // public getQuotes;
        // public getSymbols;
        // public search;
        Object.defineProperty(this, "_stockIdList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_stockId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_symbolName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_orderIdList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_startTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_endTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_interval", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_optionIdList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_offset", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_stateFilter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_OptionsFilters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_strategyVariantRequestData", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.asyncApi = exports.asyncQuestradeApi(this.credentials, this.apiCallQ, this.proxy || null);
        // this.asyncAccount = this.asyncApi.asyncAccount;
        // this.asyncActivities = this.asyncApi.asyncActivities;
        // this.asyncAllAccounts = this.asyncApi.asyncAllAccounts;
        // this.asyncAllMarkets = this.asyncApi.asyncAllMarkets;
        // this.asyncAllStocks = this.asyncApi.asyncAllStocks;
        // this.asyncBalances = this.asyncApi.asyncBalances;
        // this.asyncByOptionsIds = this.asyncApi.asyncByOptionsIds;
        // this.asyncByStockId = this.asyncApi.asyncByStockId;
        // this.asyncByStrategies = this.asyncApi.asyncByStrategies;
        // this.asyncCandlesByStockId = this.asyncApi.asyncCandlesByStockId;
        // this.asyncCountResults = this.asyncApi.asyncCountResults;
        // this.asyncCurrentAccount = this.asyncApi.asyncCurrentAccount;
        // this.asyncExecutions = this.asyncApi.asyncExecutions;
        // this.asyncFromFilter = this.asyncApi.asyncFromFilter;
        // this.getOptionChains = this.asyncApi.asyncGetOptionChains;
        // this.getOptionsQuotes = this.asyncApi.asyncGetOptionsQuotes;
        // this.asyncQuoteByStockIds = this.asyncApi.asyncGetQuoteByStockIds;
        // this.getQuotes = this.asyncApi.asyncGetQuotes;
        // this.asyncGetServerTime = this.asyncApi.asyncGetServerTime;
        // this.asyncGetSymbolByStockIds = this.asyncApi.asyncGetSymbolByStockIds;
        // this.getSymbols = this.asyncApi.asyncGetSymbols;
        // this.market = this.asyncApi.asyncMarket;
        // this.asyncMyBalances = this.asyncApi.asyncMyBalances;
        // this.asyncOrders = this.asyncApi.asyncOrders;
        // this.asyncOrdersByIds = this.asyncApi.asyncOrdersByIds;
        // this.asyncPositions = this.asyncApi.asyncPositions;
        // this.search = this.asyncApi.asyncSearch;
        // this.asyncServerTime = this.asyncApi.asyncServerTime;
        // this.asyncStock = this.asyncApi.asyncStock;
        // this.asyncQtApi = this.asyncApi.asyncQtApi;
        // this.endTime = null;
        // this.startTime = null;
    }
    symbolName(symbolName, offset) {
        this._symbolName = symbolName;
        this._offset = offset;
        return this;
    }
    stockId(stockId) {
        this._stockId = stockId;
        return this;
    }
    stockIdList(...idList) {
        this._stockIdList = idList;
        return this;
    }
    optionIdList(...values) {
        this._optionIdList = values;
        return this;
    }
    orderIdList(...values) {
        this._orderIdList = values;
        return this;
    }
    startTime(startTime) {
        this._startTime = startTime;
        return this;
    }
    endTime(endTime) {
        this._endTime = endTime;
        return this;
    }
    interval(interval) {
        this._interval = interval;
        return this;
    }
    stateFilter(state) {
        this._stateFilter = state;
        return this;
    }
    optionsFilters(filters) {
        this._OptionsFilters = filters;
        return this;
    }
    strategyVariantRequestData(value) {
        this._strategyVariantRequestData = value;
        return this;
    }
}
exports.ChainApiClass = ChainApiClass;
void function myFunct(credentials, apiCallQ) {
    return new ChainApiClass(credentials, apiCallQ);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3RyYWRlQ2hhaW5BUEkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHVibGljL3F1ZXN0cmFkZUNoYWluQVBJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFzRTtBQVMvRCxNQUFNLGlCQUFpQixHQUFHLENBQy9CLFdBQXdCLEVBQ3hCLFFBQW1CLEVBRW5CLEtBQW9ELEVBQ3BELEVBQUU7SUFDRiw0Q0FBNEM7SUFDNUMsTUFBTSxVQUFVLEdBQUcsc0NBQW1CLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNyRSxNQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDM0UsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxNQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNELE1BQU0sa0JBQWtCLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekUsTUFBTSxlQUFlLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsTUFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMs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TSxRQUFRLENBQUMsUUFBNEI7UUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQXVCO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDBCQUEwQixDQUFDLEtBQTZCO1FBQzdELElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBNkNGO0FBdktELHNDQXVLQztBQUNELEtBQUssU0FBUyxPQUFPLENBQUMsV0FBd0IsRUFBRSxRQUFtQjtJQUNqRSxPQUFPLElBQUksYUFBYSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNsRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVzdHJhZGVBcGlGYWN0b3J5IH0gZnJvbSAnLi4vcHJpdmF0ZS9hcGkvX2dldFF1ZXN0cmFkZUFwaSc7XG5pbXBvcnQgeyBBcGlDYWxsUV8gfSBmcm9tICcuLi9wcml2YXRlL2NvcmUvbmV4dC1yYXRlLWxpbWl0ZXIvcXVldWUnO1xuaW1wb3J0IHtcbiAgQ3JlZGVudGlhbHMsXG4gIE9wdGlvbnNGaWx0ZXJzLFxuICBQcm94eUZhY3RvcnlfLFxuICBTdHJhdGVneVZhcmlhbnRSZXF1ZXN0LFxufSBmcm9tICcuLi90eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IGFzeW5jUXVlc3RyYWRlQXBpID0gKFxuICBjcmVkZW50aWFsczogQ3JlZGVudGlhbHMsXG4gIGFwaUNhbGxROiBBcGlDYWxsUV8sXG5cbiAgcHJveHk6ICgoY3JlZDogQ3JlZGVudGlhbHMpID0+IFByb3h5RmFjdG9yeV8pIHwgbnVsbCxcbikgPT4ge1xuICAvLyBYWFg6IFdPUktJTkcgT04gcXVlc3RyYWRlQXBpRmFjdG9yeSBDQUxMU1xuICBjb25zdCBhc3luY1F0QXBpID0gcXVlc3RyYWRlQXBpRmFjdG9yeShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5KTtcbiAgY29uc3QgYXN5bmNBY2NvdW50ID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5hY2NvdW50KTtcbiAgY29uc3QgYXN5bmNDdXJyZW50QWNjb3VudCA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuYWNjb3VudC5jdXJyZW50QWNjb3VudCk7XG4gIGNvbnN0IGFzeW5jTXlCYWxhbmNlcyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQubXlCYWxhbmNlcyk7XG4gIGNvbnN0IGFzeW5jU2VydmVyVGltZSA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuc2VydmVyVGltZSk7XG4gIGNvbnN0IGFzeW5jR2V0U2VydmVyVGltZSA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuYWNjb3VudC5nZXRTZXJ2ZXJUaW1lKTtcbiAgY29uc3QgYXN5bmNBY3Rpdml0aWVzID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5hY2NvdW50LmdldEFjdGl2aXRpZXMpO1xuICBjb25zdCBhc3luY0FsbEFjY291bnRzID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5hY2NvdW50LmdldEFsbEFjY291bnRzKTtcbiAgY29uc3QgYXN5bmNCYWxhbmNlcyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuYWNjb3VudC5nZXRCYWxhbmNlcyk7XG4gIGNvbnN0IGFzeW5jRXhlY3V0aW9ucyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuYWNjb3VudC5nZXRFeGVjdXRpb25zKTtcbiAgY29uc3QgYXN5bmNPcmRlcnMgPSBhc3luY1F0QXBpLnRoZW4odCA9PiB0LmFjY291bnQuZ2V0T3JkZXJzKTtcbiAgY29uc3QgYXN5bmNPcmRlcnNCeUlkcyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuYWNjb3VudC5nZXRPcmRlcnNCeUlkcyk7XG4gIGNvbnN0IGFzeW5jUG9zaXRpb25zID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5hY2NvdW50LmdldFBvc2l0aW9ucyk7XG4gIGNvbnN0IGFzeW5jQWxsTWFya2V0cyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQubWFya2V0LmdldEFsbE1hcmtldHMpO1xuICBjb25zdCBhc3luY0NhbmRsZXNCeVN0b2NrSWQgPSBhc3luY1F0QXBpLnRoZW4oXG4gICAgdCA9PiB0Lm1hcmtldC5nZXRDYW5kbGVzQnlTdG9ja0lkLFxuICApO1xuXG4gIGNvbnN0IGFzeW5jQnlPcHRpb25zSWRzID0gYXN5bmNRdEFwaS50aGVuKFxuICAgIHQgPT4gdC5nZXRPcHRpb25zUXVvdGVzLmJ5T3B0aW9uc0lkcyxcbiAgKTtcblxuICBjb25zdCBhc3luY0Zyb21GaWx0ZXIgPSBhc3luY1F0QXBpLnRoZW4odCA9PiB0LmdldE9wdGlvbnNRdW90ZXMuZnJvbUZpbHRlcik7XG4gIGNvbnN0IGFzeW5jR2V0UXVvdGVCeVN0b2NrSWRzID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5nZXRRdW90ZXMuYnlTdG9ja0lkcyk7XG4gIGNvbnN0IGFzeW5jQnlTdHJhdGVnaWVzID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5nZXRRdW90ZXMuYnlTdHJhdGVnaWVzKTtcbiAgY29uc3QgYXN5bmNCeVN0b2NrSWQgPSBhc3luY1F0QXBpLnRoZW4odCA9PiB0LmdldE9wdGlvbkNoYWlucy5ieVN0b2NrSWQpO1xuICBjb25zdCBhc3luY0dldFN5bWJvbEJ5U3RvY2tJZHMgPSBhc3luY1F0QXBpLnRoZW4oXG4gICAgdCA9PiB0LmdldFN5bWJvbHMuYnlTdG9ja0lkcyxcbiAgKTtcblxuICBjb25zdCBhc3luY1N0b2NrID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5zZWFyY2guc3RvY2spO1xuICBjb25zdCBhc3luY0FsbFN0b2NrcyA9IGFzeW5jUXRBcGkudGhlbih0ID0+IHQuc2VhcmNoLmFsbFN0b2Nrcyk7XG4gIGNvbnN0IGFzeW5jQ291bnRSZXN1bHRzID0gYXN5bmNRdEFwaS50aGVuKHQgPT4gdC5zZWFyY2guY291bnRSZXN1bHRzKTtcbiAgLy8gY29uc3QgYXN5bmNDb3VudFJlc3VsdHMgPSBhc3luY1F0QXBpLnRoZW4odCA9PiB0LnNlYXJjaC5jb3VudFJlc3VsdHMpO1xuICBjb25zdCBtYXJrZXQgPSB7XG4gICAgYXN5bmNBbGxNYXJrZXRzLFxuICAgIGFzeW5jQ2FuZGxlc0J5U3RvY2tJZCxcbiAgfTtcblxuICBjb25zdCBnZXRPcHRpb25zUXVvdGVzID0ge1xuICAgIGFzeW5jQnlPcHRpb25zSWRzLFxuICAgIGFzeW5jRnJvbUZpbHRlcixcbiAgfTtcblxuICBjb25zdCBnZXRRdW90ZXMgPSB7XG4gICAgYXN5bmNCeVN0cmF0ZWdpZXMsXG4gICAgYXN5bmNHZXRRdW90ZUJ5U3RvY2tJZHMsXG4gIH07XG5cbiAgY29uc3QgZ2V0T3B0aW9uQ2hhaW5zID0ge1xuICAgIGFzeW5jQnlTdG9ja0lkLFxuICB9O1xuXG4gIGNvbnN0IGdldFN5bWJvbHMgPSB7XG4gICAgYXN5bmNHZXRTeW1ib2xCeVN0b2NrSWRzLFxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaCA9IHtcbiAgICBhc3luY0FsbFN0b2NrcyxcbiAgICBhc3luY0NvdW50UmVzdWx0cyxcbiAgICBhc3luY1N0b2NrLFxuICB9O1xuXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBhc3luY0FjY291bnQsXG4gICAgYXN5bmNDdXJyZW50QWNjb3VudCxcbiAgICBhc3luY015QmFsYW5jZXMsXG4gICAgYXN5bmNTZXJ2ZXJUaW1lLFxuICAgIGdldE9wdGlvbkNoYWlucyxcbiAgICBnZXRPcHRpb25zUXVvdGVzLFxuICAgIGdldFF1b3RlcyxcbiAgICBnZXRTeW1ib2xzLFxuICAgIG1hcmtldCxcbiAgICBzZWFyY2gsXG4gIH07XG5cbiAgY29uc3QgYWxsID0ge1xuICAgIGFzeW5jQWNjb3VudCxcbiAgICBhc3luY0FjdGl2aXRpZXMsXG4gICAgYXN5bmNBbGxBY2NvdW50cyxcbiAgICBhc3luY0FsbE1hcmtldHMsXG4gICAgYXN5bmNBbGxTdG9ja3MsXG4gICAgYXN5bmNBcGk6IGFwaSxcbiAgICBhc3luY0JhbGFuY2VzLFxuICAgIGFzeW5jQnlPcHRpb25zSWRzLFxuICAgIGFzeW5jQnlTdG9ja0lkLFxuICAgIGFzeW5jQnlTdHJhdGVnaWVzLFxuICAgIGFzeW5jQ2FuZGxlc0J5U3RvY2tJZCxcbiAgICBhc3luY0NvdW50UmVzdWx0cyxcbiAgICBhc3luY0N1cnJlbnRBY2NvdW50LFxuICAgIGFzeW5jRXhlY3V0aW9ucyxcbiAgICBhc3luY0Zyb21GaWx0ZXIsXG4gICAgYXN5bmNHZXRPcHRpb25DaGFpbnM6IGdldE9wdGlvbkNoYWlucyxcbiAgICBhc3luY0dldE9wdGlvbnNRdW90ZXM6IGdldE9wdGlvbnNRdW90ZXMsXG4gICAgYXN5bmNHZXRRdW90ZUJ5U3RvY2tJZHMsXG4gICAgYXN5bmNHZXRRdW90ZXM6IGdldFF1b3RlcyxcbiAgICBhc3luY0dldFNlcnZlclRpbWUsXG4gICAgYXN5bmNHZXRTeW1ib2xCeVN0b2NrSWRzLFxuICAgIGFzeW5jR2V0U3ltYm9sczogZ2V0U3ltYm9scyxcbiAgICBhc3luY01hcmtldDogbWFya2V0LFxuICAgIGFzeW5jTXlCYWxhbmNlcyxcbiAgICBhc3luY09yZGVycyxcbiAgICBhc3luY09yZGVyc0J5SWRzLFxuICAgIGFzeW5jUG9zaXRpb25zLFxuICAgIGFzeW5jUXRBcGksXG4gICAgYXN5bmNTZWFyY2g6IHNlYXJjaCxcbiAgICBhc3luY1NlcnZlclRpbWUsXG4gICAgYXN5bmNTdG9jayxcbiAgfTtcblxuICByZXR1cm4geyAuLi5hbGwgfTtcbn07XG5cbmV4cG9ydCBjbGFzcyBDaGFpbkFwaUNsYXNzIHtcbiAgLy8gcHVibGljIGFzeW5jQWN0aXZpdGllczogUHJvbWlzZTwoc3RhcnRUaW1lOiBzdHJpbmcpID0+IChlbmRUaW1lOiBzdHJpbmcpID0+IFByb21pc2U8SUFjY291bnRBY3Rpdml0eVtdPj47XG4gIC8vIHB1YmxpYyBhc3luY0FsbEFjY291bnRzOiBQcm9taXNlPCgpID0+IFByb21pc2U8SUFjY291bnRbXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNCYWxhbmNlczogUHJvbWlzZTwoKSA9PiBQcm9taXNlPElCYWxhbmNlcz4+O1xuICAvLyBwdWJsaWMgYXN5bmNFeGVjdXRpb25zOiBQcm9taXNlPChzdGFydFRpbWU6IHN0cmluZykgPT4gKGVuZFRpbWU6IHN0cmluZykgPT4gUHJvbWlzZTxJRXhlY3V0aW9uW10+PjtcbiAgLy8gcHVibGljIGFzeW5jT3JkZXJzOiBQcm9taXNlPChzdGF0ZUZpbHRlcj86IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gKHN0YXJ0VGltZTogc3RyaW5nKSA9PiAoZW5kVGltZTogc3RyaW5nKSA9PiBQcm9taXNlPElPcmRlcltdPj47XG4gIC8vIHB1YmxpYyBhc3luY09yZGVyc0J5SWRzOiBQcm9taXNlPChvcmRlcklkOiBudW1iZXJbXSkgPT4gUHJvbWlzZTxJT3JkZXJbXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNQb3NpdGlvbnM6IFByb21pc2U8KCkgPT4gUHJvbWlzZTxJUG9zaXRpb25bXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNBbGxTdG9ja3M6IFByb21pc2U8KHByZWZpeDogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIgfCB1bmRlZmluZWQpID0+IFByb21pc2U8SVN5bWJvbFNlYXJjaFJlc3VsdFtdPj47XG4gIC8vIHB1YmxpYyBhc3luY0FsbE1hcmtldHM6IFByb21pc2U8KCkgPT4gUHJvbWlzZTxJTWFya2V0W10+PjtcbiAgLy8gcHVibGljIGFzeW5jQnlPcHRpb25zSWRzOiBQcm9taXNlPChvcHRpb25JZHM6IG51bWJlcltdKSA9PiBQcm9taXNlPElPcHRpb25zUXVvdGVbXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNCeVN0b2NrSWQ6IFByb21pc2U8KHN0b2NrSWQ6IG51bWJlcikgPT4gUHJvbWlzZTxJT3B0aW9uQ2hhaW5bXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNCeVN0cmF0ZWdpZXM6IFByb21pc2U8KHN0cmF0ZWd5VmFyaWFudFJlcXVlc3REYXRhOiBTdHJhdGVneVZhcmlhbnRSZXF1ZXN0KSA9PiBQcm9taXNlPElTdHJhdGVnaWVzUXVvdGVzPj47XG4gIC8vIHB1YmxpYyBhc3luY0FjY291bnQ6IFByb21pc2U8UXRBcGlBY2NvdW50PjtcbiAgLy8gcHVibGljIGFzeW5jQ2FuZGxlc0J5U3RvY2tJZDogUHJvbWlzZTwoc3ltYm9sSUQ6IG51bWJlcikgPT4gKGludGVydmFsPzogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiAoc3RhcnRUaW1lOiBzdHJpbmcpID0+IChlbmRUaW1lOiBzdHJpbmcpID0+IFByb21pc2U8SUNhbmRsZVtdPj47XG4gIC8vIHB1YmxpYyBhc3luY0NvdW50UmVzdWx0czogUHJvbWlzZTwocHJlZml4OiBzdHJpbmcpID0+IFByb21pc2U8bnVtYmVyPj47XG4gIC8vIHB1YmxpYyBhc3luY0N1cnJlbnRBY2NvdW50OiBQcm9taXNlPHN0cmluZz47XG4gIC8vIHB1YmxpYyBhc3luY0Zyb21GaWx0ZXI6IFByb21pc2U8KGZpbHRlcnM6IE9wdGlvbnNGaWx0ZXJzKSA9PiBQcm9taXNlPElPcHRpb25zUXVvdGVbXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNRdW90ZUJ5U3RvY2tJZHM6IFByb21pc2U8KGlkczogbnVtYmVyW10pID0+IFByb21pc2U8SVF1b3RlW10+PjtcbiAgLy8gcHVibGljIGFzeW5jR2V0U2VydmVyVGltZTogUHJvbWlzZTwoKSA9PiBQcm9taXNlPERhdGU+PjtcbiAgLy8gcHVibGljIGFzeW5jR2V0U3ltYm9sQnlTdG9ja0lkczogUHJvbWlzZTwoc3RvY2tJZHM6IG51bWJlcltdKSA9PiBQcm9taXNlPElTeW1ib2xbXT4+O1xuICAvLyBwdWJsaWMgYXN5bmNNeUJhbGFuY2VzOiBQcm9taXNlPFF0QXBpTXlCYWxhbmNlcz47XG4gIC8vIHB1YmxpYyBhc3luY1NlcnZlclRpbWU6IFByb21pc2U8RGF0ZSB8ICdFUlJPUic+O1xuICAvLyBwdWJsaWMgYXN5bmNTdG9jazogUHJvbWlzZTwocHJlZml4OiBzdHJpbmcsIG9mZnNldD86IG51bWJlciB8IHVuZGVmaW5lZCkgPT4gUHJvbWlzZTxJU3ltYm9sU2VhcmNoUmVzdWx0W10+PjtcbiAgLy8gcHVibGljIGFzeW5jUXRBcGk6IFByb21pc2U8UXVlc3RyYWRlQXBpPjtcbiAgcHVibGljIGFzeW5jQXBpO1xuXG4gIC8vIHB1YmxpYyBtYXJrZXQ7XG4gIC8vIHB1YmxpYyBnZXRPcHRpb25zUXVvdGVzO1xuICAvLyBwdWJsaWMgZ2V0T3B0aW9uQ2hhaW5zO1xuICAvLyBwdWJsaWMgZ2V0UXVvdGVzO1xuICAvLyBwdWJsaWMgZ2V0U3ltYm9scztcbiAgLy8gcHVibGljIHNlYXJjaDtcbiAgcHVibGljIF9zdG9ja0lkTGlzdD86IG51bWJlcltdO1xuXG4gIHB1YmxpYyBfc3RvY2tJZD86IG51bWJlcjtcblxuICBwdWJsaWMgX3N5bWJvbE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIF9vcmRlcklkTGlzdD86IG51bWJlcltdO1xuXG4gIHB1YmxpYyBfc3RhcnRUaW1lPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBfZW5kVGltZT86IHN0cmluZztcblxuICBwdWJsaWMgX2ludGVydmFsPzogc3RyaW5nO1xuXG4gIHB1YmxpYyBfb3B0aW9uSWRMaXN0PzogbnVtYmVyW107XG5cbiAgcHVibGljIF9vZmZzZXQ/OiBudW1iZXI7XG5cbiAgcHVibGljIF9zdGF0ZUZpbHRlcj86IHN0cmluZztcblxuICBwdWJsaWMgX09wdGlvbnNGaWx0ZXJzPzogT3B0aW9uc0ZpbHRlcnM7XG5cbiAgcHVibGljIF9zdHJhdGVneVZhcmlhbnRSZXF1ZXN0RGF0YT86IFN0cmF0ZWd5VmFyaWFudFJlcXVlc3Q7XG5cbiAgcHVibGljIHN5bWJvbE5hbWUoc3ltYm9sTmFtZTogc3RyaW5nLCBvZmZzZXQ/OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zeW1ib2xOYW1lID0gc3ltYm9sTmFtZTtcbiAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdG9ja0lkKHN0b2NrSWQ6IG51bWJlcikge1xuICAgIHRoaXMuX3N0b2NrSWQgPSBzdG9ja0lkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc3RvY2tJZExpc3QoLi4uaWRMaXN0OiBudW1iZXJbXSkge1xuICAgIHRoaXMuX3N0b2NrSWRMaXN0ID0gaWRMaXN0O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgb3B0aW9uSWRMaXN0KC4uLnZhbHVlczogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9vcHRpb25JZExpc3QgPSB2YWx1ZXM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBvcmRlcklkTGlzdCguLi52YWx1ZXM6IG51bWJlcltdKSB7XG4gICAgdGhpcy5fb3JkZXJJZExpc3QgPSB2YWx1ZXM7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdGFydFRpbWUoc3RhcnRUaW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBlbmRUaW1lKGVuZFRpbWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VuZFRpbWUgPSBlbmRUaW1lO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgaW50ZXJ2YWwoaW50ZXJ2YWw6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0ZUZpbHRlcihzdGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdGVGaWx0ZXIgPSBzdGF0ZTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG9wdGlvbnNGaWx0ZXJzKGZpbHRlcnM6IE9wdGlvbnNGaWx0ZXJzKSB7XG4gICAgdGhpcy5fT3B0aW9uc0ZpbHRlcnMgPSBmaWx0ZXJzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgc3RyYXRlZ3lWYXJpYW50UmVxdWVzdERhdGEodmFsdWU6IFN0cmF0ZWd5VmFyaWFudFJlcXVlc3QpIHtcbiAgICB0aGlzLl9zdHJhdGVneVZhcmlhbnRSZXF1ZXN0RGF0YSA9IHZhbHVlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgICBwcml2YXRlIGFwaUNhbGxROiBBcGlDYWxsUV8sXG4gICAgcHJpdmF0ZSBwcm94eT86IChjcmVkOiBDcmVkZW50aWFscykgPT4gUHJveHlGYWN0b3J5XyxcbiAgKSB7XG4gICAgdGhpcy5hc3luY0FwaSA9IGFzeW5jUXVlc3RyYWRlQXBpKFxuICAgICAgdGhpcy5jcmVkZW50aWFscyxcbiAgICAgIHRoaXMuYXBpQ2FsbFEsXG4gICAgICB0aGlzLnByb3h5IHx8IG51bGwsXG4gICAgKTtcbiAgICAvLyB0aGlzLmFzeW5jQWNjb3VudCA9IHRoaXMuYXN5bmNBcGkuYXN5bmNBY2NvdW50O1xuICAgIC8vIHRoaXMuYXN5bmNBY3Rpdml0aWVzID0gdGhpcy5hc3luY0FwaS5hc3luY0FjdGl2aXRpZXM7XG4gICAgLy8gdGhpcy5hc3luY0FsbEFjY291bnRzID0gdGhpcy5hc3luY0FwaS5hc3luY0FsbEFjY291bnRzO1xuICAgIC8vIHRoaXMuYXN5bmNBbGxNYXJrZXRzID0gdGhpcy5hc3luY0FwaS5hc3luY0FsbE1hcmtldHM7XG4gICAgLy8gdGhpcy5hc3luY0FsbFN0b2NrcyA9IHRoaXMuYXN5bmNBcGkuYXN5bmNBbGxTdG9ja3M7XG4gICAgLy8gdGhpcy5hc3luY0JhbGFuY2VzID0gdGhpcy5hc3luY0FwaS5hc3luY0JhbGFuY2VzO1xuICAgIC8vIHRoaXMuYXN5bmNCeU9wdGlvbnNJZHMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jQnlPcHRpb25zSWRzO1xuICAgIC8vIHRoaXMuYXN5bmNCeVN0b2NrSWQgPSB0aGlzLmFzeW5jQXBpLmFzeW5jQnlTdG9ja0lkO1xuICAgIC8vIHRoaXMuYXN5bmNCeVN0cmF0ZWdpZXMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jQnlTdHJhdGVnaWVzO1xuICAgIC8vIHRoaXMuYXN5bmNDYW5kbGVzQnlTdG9ja0lkID0gdGhpcy5hc3luY0FwaS5hc3luY0NhbmRsZXNCeVN0b2NrSWQ7XG4gICAgLy8gdGhpcy5hc3luY0NvdW50UmVzdWx0cyA9IHRoaXMuYXN5bmNBcGkuYXN5bmNDb3VudFJlc3VsdHM7XG4gICAgLy8gdGhpcy5hc3luY0N1cnJlbnRBY2NvdW50ID0gdGhpcy5hc3luY0FwaS5hc3luY0N1cnJlbnRBY2NvdW50O1xuICAgIC8vIHRoaXMuYXN5bmNFeGVjdXRpb25zID0gdGhpcy5hc3luY0FwaS5hc3luY0V4ZWN1dGlvbnM7XG4gICAgLy8gdGhpcy5hc3luY0Zyb21GaWx0ZXIgPSB0aGlzLmFzeW5jQXBpLmFzeW5jRnJvbUZpbHRlcjtcbiAgICAvLyB0aGlzLmdldE9wdGlvbkNoYWlucyA9IHRoaXMuYXN5bmNBcGkuYXN5bmNHZXRPcHRpb25DaGFpbnM7XG4gICAgLy8gdGhpcy5nZXRPcHRpb25zUXVvdGVzID0gdGhpcy5hc3luY0FwaS5hc3luY0dldE9wdGlvbnNRdW90ZXM7XG4gICAgLy8gdGhpcy5hc3luY1F1b3RlQnlTdG9ja0lkcyA9IHRoaXMuYXN5bmNBcGkuYXN5bmNHZXRRdW90ZUJ5U3RvY2tJZHM7XG4gICAgLy8gdGhpcy5nZXRRdW90ZXMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jR2V0UXVvdGVzO1xuICAgIC8vIHRoaXMuYXN5bmNHZXRTZXJ2ZXJUaW1lID0gdGhpcy5hc3luY0FwaS5hc3luY0dldFNlcnZlclRpbWU7XG4gICAgLy8gdGhpcy5hc3luY0dldFN5bWJvbEJ5U3RvY2tJZHMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jR2V0U3ltYm9sQnlTdG9ja0lkcztcbiAgICAvLyB0aGlzLmdldFN5bWJvbHMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jR2V0U3ltYm9scztcbiAgICAvLyB0aGlzLm1hcmtldCA9IHRoaXMuYXN5bmNBcGkuYXN5bmNNYXJrZXQ7XG4gICAgLy8gdGhpcy5hc3luY015QmFsYW5jZXMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jTXlCYWxhbmNlcztcbiAgICAvLyB0aGlzLmFzeW5jT3JkZXJzID0gdGhpcy5hc3luY0FwaS5hc3luY09yZGVycztcbiAgICAvLyB0aGlzLmFzeW5jT3JkZXJzQnlJZHMgPSB0aGlzLmFzeW5jQXBpLmFzeW5jT3JkZXJzQnlJZHM7XG4gICAgLy8gdGhpcy5hc3luY1Bvc2l0aW9ucyA9IHRoaXMuYXN5bmNBcGkuYXN5bmNQb3NpdGlvbnM7XG4gICAgLy8gdGhpcy5zZWFyY2ggPSB0aGlzLmFzeW5jQXBpLmFzeW5jU2VhcmNoO1xuICAgIC8vIHRoaXMuYXN5bmNTZXJ2ZXJUaW1lID0gdGhpcy5hc3luY0FwaS5hc3luY1NlcnZlclRpbWU7XG4gICAgLy8gdGhpcy5hc3luY1N0b2NrID0gdGhpcy5hc3luY0FwaS5hc3luY1N0b2NrO1xuICAgIC8vIHRoaXMuYXN5bmNRdEFwaSA9IHRoaXMuYXN5bmNBcGkuYXN5bmNRdEFwaTtcbiAgICAvLyB0aGlzLmVuZFRpbWUgPSBudWxsO1xuICAgIC8vIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgfVxufVxudm9pZCBmdW5jdGlvbiBteUZ1bmN0KGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscywgYXBpQ2FsbFE6IEFwaUNhbGxRXykge1xuICByZXR1cm4gbmV3IENoYWluQXBpQ2xhc3MoY3JlZGVudGlhbHMsIGFwaUNhbGxRKTtcbn07XG4iXX0=