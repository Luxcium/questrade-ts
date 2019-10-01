"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
var timeutil_1 = require("../utils/timeutil");
var _marketsQuotesOptions_1 = require("./_marketsQuotesOptions");
exports._getDataFromApi = (function () {
    var _getBalances = function (credentials) {
        return _1._axiosAccountGetApi(credentials)('/balances');
    };
    var _getCandles = function (credentials) { return function (startDate) { return function (endDate) { return function (interval) {
        if (interval === void 0) { interval = 'OneDay'; }
        return function (symbolID) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _1._axiosGetApi(credentials)("/markets/candles/" + symbolID + "?startTime=" + startDate + "&endTime=" + endDate + "&interval=" + interval)()];
                    case 1: return [2, (_a.sent()).candles];
                }
            });
        }); };
    }; }; }; };
    var _getExecutions = function (credentials) { return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosAccountGetApi(credentials)("/executions?" + timeutil_1.endpointFormatDateTool(startDate, endDate))()];
                case 1: return [2, (_a.sent()).executions];
            }
        });
    }); }; }; };
    var _getMarkets = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, _1._axiosGetApi(credentials)('/markets')()];
            case 1: return [2, (_a.sent()).markets];
        }
    }); }); }; };
    var _getOptionsById = function (credentials) { return function (symbolID) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosGetApi(credentials)("/symbols/" + symbolID + "/options")()];
                case 1: return [2, (_a.sent()).optionChain];
            }
        });
    }); }; };
    var _getOrders = function (credentials) { return function (startDate) { return function (endDate) { return function (stateFilter) {
        if (stateFilter === void 0) { stateFilter = 'All'; }
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _1._axiosAccountGetApi(credentials)("/orders?" + timeutil_1.endpointFormatDateTool(startDate, endDate) + "stateFilter=" + stateFilter)()];
                    case 1: return [2, (_a.sent()).orders];
                }
            });
        });
    }; }; }; };
    var _getOrdersByIds = function (credentials) { return function (orderId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosAccountGetApi(credentials)("/orders?ids=" + orderId.join(','))()];
                case 1: return [2, (_a.sent()).orders];
            }
        });
    }); }; };
    var _getPositions = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosAccountGetApi(credentials)('/positions')()];
                case 1: return [2, (_a.sent())
                        .positions];
            }
        });
    }); }; };
    var _getQuotesByIds = function (credentials) { return function (ids) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosGetApi(credentials)("/markets/quotes?ids=" + ids.join(','))()];
                case 1: return [2, (_a.sent()).quotes];
            }
        });
    }); }; };
    var _getSymbolsByIds = function (credentials) { return function (symbolId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2, _1._axiosGetApi(credentials)("/symbols?ids=" + symbolId.join())()];
    }); }); }; };
    var _getSymbolSearch = function (credentials) { return function (prefix, offset) {
        if (offset === void 0) { offset = 0; }
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var symbols, count, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix)()];
                    case 1:
                        symbols = (_a.sent()).symbols;
                        count = symbols.length;
                        result = symbols[offset];
                        result.count = count;
                        return [2, result];
                }
            });
        });
    }; };
    var _getSymbolSearchAll = function (credentials) { return function (prefix, offset) {
        if (offset === void 0) { offset = 0; }
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix + "&offset=" + offset)()];
                    case 1: return [2, (_a.sent()).symbols];
                }
            });
        });
    }; };
    var _getSymbolSearchCount = function (credentials) { return function (prefix) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, _1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix)()];
                case 1: return [2, (_a.sent()).symbols.length];
            }
        });
    }); }; };
    var _getServerTime = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = Date.bind;
                return [4, _1._axiosGetApi(credentials)('/time')()];
            case 1: return [2, new (_a.apply(Date, [void 0, (_b.sent()).time]))()];
        }
    }); }); }; };
    var _postGetStrategiesQuotes = function (credentials) {
        return _1._axiosAccountGetApi(credentials)('_getAccounts');
    };
    var _getAccounts = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, _1._axiosGetApi(credentials)('/accounts')()];
            case 1: return [2, (_a.sent()).accounts];
        }
    }); }); }; };
    var _getActivities = function (credentials) { return function (startTime) { return function (endTime) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var dateTime, endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dateTime = timeutil_1.endpointFormatDateTool(startTime, endTime);
                    endpoint = "/activities?" + dateTime;
                    return [4, _1._axiosAccountGetApi(credentials)(endpoint)()];
                case 1: return [2, (_a.sent())
                        .activities];
            }
        });
    }); }; }; };
    return function (credentials) {
        var symbolSearch = _getSymbolSearch(credentials);
        symbolSearch.count = _getSymbolSearchCount(credentials);
        var quotesOptionsFilter = _marketsQuotesOptions_1._getQuotesOptionsFilter(credentials);
        quotesOptionsFilter.byIds = _marketsQuotesOptions_1._getQuotesOptionsByIds(credentials);
        var setAccount = credentials.accountNumber;
        var allAccounts = _getAccounts(credentials);
        var activities = _getActivities(credentials);
        var balances = _getBalances(credentials);
        var marketCandlesById = _getCandles(credentials);
        var executions = _getExecutions(credentials);
        var markets = _getMarkets(credentials);
        var optionsById = _getOptionsById(credentials);
        var ordersByIds = _getOrdersByIds(credentials);
        var orders = _getOrders(credentials);
        var ordersAll = _getOrders(credentials)('All');
        var positions = _getPositions(credentials);
        var marketsQuotesByIds = _getQuotesByIds(credentials);
        var quotesOptionsbyFilterAndIds = quotesOptionsFilter;
        var getServerTime = _getServerTime(credentials);
        var symbolsByIds = _getSymbolsByIds(credentials);
        var search = symbolSearch;
        var searchAll = _getSymbolSearchAll(credentials);
        var searchCount = _getSymbolSearchCount(credentials);
        var byStrategies = _postGetStrategiesQuotes(credentials);
        return {
            setAccount: setAccount,
            getServerTime: getServerTime,
            get: {
                accounts: {
                    activities: activities,
                    orders: orders,
                    ordersAll: ordersAll,
                    ordersByIds: ordersByIds,
                    executions: executions,
                    balances: balances,
                    positions: positions,
                    allAccounts: allAccounts,
                    time: getServerTime,
                },
                markets: {
                    candlesById: marketCandlesById,
                    quotes: {
                        byStrategies: byStrategies,
                        options: quotesOptionsbyFilterAndIds,
                        byIds: marketsQuotesByIds,
                    },
                    allMarkets: markets,
                },
                symbols: {
                    optionsById: optionsById,
                    byIds: symbolsByIds,
                    search: search,
                    searchAll: searchAll,
                    searchCount: searchCount,
                },
            },
        };
    };
})();
//# sourceMappingURL=_getDataFromApi.js.map