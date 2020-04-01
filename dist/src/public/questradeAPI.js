"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var private_1 = require("../private");
// export const getQuestradeApi = ;
exports.questradeApi = function (credentials) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var qtApi, api;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._getQuestradeApi(credentials)];
            case 1:
                qtApi = _a.sent();
                api = {
                    currentAccount: qtApi.currentAccount,
                    myBalances: qtApi.myBalances,
                    serverTime: qtApi.serverTime,
                    account: {
                        getActivities: qtApi.account.getActivities,
                        getAllAccounts: qtApi.account.getAllAccounts,
                        getBalances: qtApi.account.getBalances,
                        getExecutions: qtApi.account.getExecutions,
                        getOrders: qtApi.account.getOrders,
                        getOrdersByIds: qtApi.account.getOrdersByIds,
                        getPositions: qtApi.account.getPositions,
                        getServerTime: qtApi.account.getServerTime,
                    },
                    market: {
                        getAllMarkets: qtApi.market.getAllMarkets,
                        getCandlesByStockId: qtApi.market.getCandlesByStockId,
                    },
                    getOptionsQuotes: {
                        byOptionsIds: qtApi.getOptionsQuotes.byOptionsIds,
                        fromFilter: qtApi.getOptionsQuotes.fromFilter,
                    },
                    getQuotes: {
                        byStockIds: qtApi.getQuotes.byStockIds,
                        byStrategies: qtApi.getQuotes.byStrategies,
                    },
                    getOptionChains: {
                        byStockId: qtApi.getOptionChains.byStockId,
                    },
                    getSymbols: {
                        byStockIds: qtApi.getSymbols.byStockIds,
                    },
                    search: {
                        stock: qtApi.search.stock,
                        allStocks: qtApi.search.allStocks,
                        countResults: qtApi.search.countResults,
                    },
                };
                return [2 /*return*/, api];
        }
    });
}); };
//# sourceMappingURL=questradeAPI.js.map