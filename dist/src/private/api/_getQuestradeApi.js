"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../utils");
var AccountsCalls_1 = require("./AccountsCalls");
var MarketsCalls_1 = require("./MarketsCalls");
exports._getQuestradeApi = function (credentials) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, accounts, activities, balances, candles, executions, markets, 
    // marketsQuotesStrategies,
    optionsById, orders, ordersByIds, positions, quotesByIds, quotesOptionsbyFilterAndIds, quotesOptionsByIds, quotesOptionsFilter, serverTime, symbolsByIds, symbolSearchAll, symbolSearchAndCount, symbolSearchCount;
    return tslib_1.__generator(this, function (_b) {
        _a = [
            AccountsCalls_1._getAccounts(credentials),
            AccountsCalls_1._getActivities(credentials),
            AccountsCalls_1._getBalances(credentials),
            MarketsCalls_1._getCandles(credentials),
            AccountsCalls_1._getExecutions(credentials),
            MarketsCalls_1._getMarkets(credentials),
            // _getMarketsQuotesStrategies(credentials),
            MarketsCalls_1._getOptionsById(credentials),
            AccountsCalls_1._getOrders(credentials),
            AccountsCalls_1._getOrdersByIds(credentials),
            AccountsCalls_1._getPositions(credentials),
            MarketsCalls_1._getQuotesByIds(credentials),
            MarketsCalls_1._getQuotesOptionsbyFilterAndIds(credentials),
            MarketsCalls_1._getQuotesOptionsByIds(credentials),
            MarketsCalls_1._getQuotesOptionsFilter(credentials),
            AccountsCalls_1._getServerTime(credentials),
            MarketsCalls_1._getSymbolsByIds(credentials),
            MarketsCalls_1._getSymbolSearchAll(credentials),
            MarketsCalls_1._getSymbolSearchAndCount(credentials),
            MarketsCalls_1._getSymbolSearchCount(credentials),
        ], accounts = _a[0], activities = _a[1], balances = _a[2], candles = _a[3], executions = _a[4], markets = _a[5], optionsById = _a[6], orders = _a[7], ordersByIds = _a[8], positions = _a[9], quotesByIds = _a[10], quotesOptionsbyFilterAndIds = _a[11], quotesOptionsByIds = _a[12], quotesOptionsFilter = _a[13], serverTime = _a[14], symbolsByIds = _a[15], symbolSearchAll = _a[16], symbolSearchAndCount = _a[17], symbolSearchCount = _a[18];
        // unused for the moment
        utils_1.void0(quotesOptionsbyFilterAndIds);
        return [2 /*return*/, {
                myBalances: function () {
                    return tslib_1.__awaiter(this, void 0, void 0, function () {
                        var _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = AccountsCalls_1._myBalances;
                                    return [4 /*yield*/, balances()];
                                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                            }
                        });
                    });
                },
                currentAccount: credentials.accountNumber,
                serverTime: credentials.serverTime || 'ERROR',
                account: {
                    getActivities: function (startTime) {
                        return activities(startTime);
                    },
                    getOrders: function (stateFilter) {
                        return orders(stateFilter);
                    },
                    getOrdersByIds: function (orderId) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, ordersByIds(orderId)];
                            });
                        });
                    },
                    getExecutions: function (startTime) {
                        return executions(startTime);
                    },
                    getBalances: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, balances()];
                            });
                        });
                    },
                    getPositions: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, positions()];
                            });
                        });
                    },
                    getAllAccounts: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, accounts()];
                            });
                        });
                    },
                    getServerTime: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, serverTime()];
                            });
                        });
                    },
                },
                market: {
                    getAllMarkets: function () {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, markets()];
                            });
                        });
                    },
                    getCandlesByStockId: function (symbolID) {
                        return candles(symbolID);
                    },
                },
                getOptionsQuotes: {
                    fromFilter: function (filters) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesOptionsFilter(filters)];
                            });
                        });
                    },
                    byOptionsIds: function (optionIds) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesOptionsByIds(optionIds)];
                            });
                        });
                    },
                },
                getQuotes: {
                    // async byStrategies(strategyVariantRequestData: StrategyVariantRequest) {
                    //   return marketsQuotesStrategies(strategyVariantRequestData);
                    // },
                    byStockIds: function (ids) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, quotesByIds(ids)];
                            });
                        });
                    },
                },
                search: {
                    stock: function (prefix, offset) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearchAndCount(prefix, offset)];
                            });
                        });
                    },
                    allStocks: function (prefix, offset) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearchAll(prefix, offset)];
                            });
                        });
                    },
                    countResults: function (prefix) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolSearchCount(prefix)];
                            });
                        });
                    },
                },
                getOptionChains: {
                    byStockId: function (stockId) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, optionsById(stockId)];
                            });
                        });
                    },
                },
                getSymbols: {
                    byStockIds: function (stockIds) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, symbolsByIds(stockIds)];
                            });
                        });
                    },
                },
            }];
    });
}); };
//# sourceMappingURL=_getQuestradeApi.js.map