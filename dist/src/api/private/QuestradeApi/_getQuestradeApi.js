"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../utils");
const AccountsCalls_1 = require("./AccountsCalls");
const MarketsCalls_1 = require("./MarketsCalls");
exports._getQuestradeApi = (_axios = axios_1.default) => async (credentials) => {
    const [getAccounts, getActivities, getBalances, getCandles, getExecutions, getMarkets, getMarketsQuotesStrategies, getOptionsById, getOrders, getOrdersByIds, getPositions, getQuotesByIds, getQuotesOptionsbyFilterAndIds, getQuotesOptionsByIds, getQuotesOptionsFilter, getServerTime, getSymbolsByIds, getSymbolSearchAll, getSymbolSearchAndCount, getSymbolSearchCount,] = [
        AccountsCalls_1._getAccounts(_axios),
        AccountsCalls_1._getActivities(_axios),
        AccountsCalls_1._getBalances(_axios),
        MarketsCalls_1._getCandles(_axios),
        AccountsCalls_1._getExecutions(_axios),
        MarketsCalls_1._getMarkets(_axios),
        MarketsCalls_1._getMarketsQuotesStrategies(_axios),
        MarketsCalls_1._getOptionsById(_axios),
        AccountsCalls_1._getOrders(_axios),
        AccountsCalls_1._getOrdersByIds(_axios),
        AccountsCalls_1._getPositions(_axios),
        MarketsCalls_1._getQuotesByIds(_axios),
        MarketsCalls_1._getQuotesOptionsbyFilterAndIds(_axios),
        MarketsCalls_1._getQuotesOptionsByIds(_axios),
        MarketsCalls_1._getQuotesOptionsFilter(_axios),
        AccountsCalls_1._getServerTime(_axios),
        MarketsCalls_1._getSymbolsByIds(_axios),
        MarketsCalls_1._getSymbolSearchAll(_axios),
        MarketsCalls_1._getSymbolSearchAndCount(_axios),
        MarketsCalls_1._getSymbolSearchCount(_axios),
    ];
    const [accounts, activities, balances, candles, executions, markets, marketsQuotesStrategies, optionsById, orders, ordersByIds, positions, quotesByIds, quotesOptionsbyFilterAndIds, quotesOptionsByIds, quotesOptionsFilter, serverTime, symbolsByIds, symbolSearchAll, symbolSearchAndCount, symbolSearchCount,] = [
        getAccounts(credentials),
        getActivities(credentials),
        getBalances(credentials),
        getCandles(credentials),
        getExecutions(credentials),
        getMarkets(credentials),
        getMarketsQuotesStrategies(credentials),
        getOptionsById(credentials),
        getOrders(credentials),
        getOrdersByIds(credentials),
        getPositions(credentials),
        getQuotesByIds(credentials),
        getQuotesOptionsbyFilterAndIds(credentials),
        getQuotesOptionsByIds(credentials),
        getQuotesOptionsFilter(credentials),
        getServerTime(credentials),
        getSymbolsByIds(credentials),
        getSymbolSearchAll(credentials),
        getSymbolSearchAndCount(credentials),
        getSymbolSearchCount(credentials),
    ];
    // unused for the moment
    utils_1.void0(quotesOptionsbyFilterAndIds);
    return {
        myBalances: AccountsCalls_1._myBalances(await balances()),
        currentAccount: credentials.accountNumber,
        serverTime: await serverTime(),
        get: {
            account: {
                activities(startTime) {
                    return activities(startTime);
                },
                orders(stateFilter) {
                    return orders(stateFilter);
                },
                allOrders(startTime) {
                    return orders('All')(startTime);
                },
                async ordersByIds(orderId) {
                    return ordersByIds(orderId);
                },
                executions(startTime) {
                    return executions(startTime);
                },
                async balances() {
                    return balances();
                },
                async positions() {
                    return positions();
                },
                async allAccounts() {
                    return accounts();
                },
            },
            market: {
                async allMarkets() {
                    return markets();
                },
                candlesByStockId(startDate) {
                    return candles(startDate);
                },
            },
            quotes: {
                optionsQuotes: {
                    async fromFilter(filters) {
                        return quotesOptionsFilter(filters);
                    },
                    async byOptionsIds(optionIds) {
                        return quotesOptionsByIds(optionIds);
                    },
                },
                async byStrategies(strategyVariantRequestData) {
                    return marketsQuotesStrategies(strategyVariantRequestData);
                },
                async byStockIds(ids) {
                    return quotesByIds(ids);
                },
            },
            search: {
                async stock(prefix, offset) {
                    return symbolSearchAndCount(prefix, offset);
                },
                async allStocks(prefix, offset) {
                    return symbolSearchAll(prefix, offset);
                },
                async countResults(prefix) {
                    return symbolSearchCount(prefix);
                },
            },
            symbols: {
                optionChains: {
                    async byStockId(stockId) {
                        return optionsById(stockId);
                    },
                },
                async byStockIds(stockIds) {
                    return symbolsByIds(stockIds);
                },
            },
        },
    };
};
//# sourceMappingURL=_getQuestradeApi.js.map