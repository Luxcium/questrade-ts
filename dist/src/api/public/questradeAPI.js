"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var private_1 = require("../private");
// export const getQuestradeApi = ;
exports.questradeApi = function (credentials) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var qtApi, currentAccount, myBalances, serverTime, accountActivities, accountAllAccounts, accountBalances, accountExecutions, accountOrders, accountOrdersByIds, accountPositions, marketAllMarkets, marketCandlesByStockId, quotesByStockIds, quotesByStrategies, quotesByOptionsIds, quotesFromFilter, symbolsOptionChainsByStockId, symbolsByStockIds, searchAllStocks, searchStock, searchCountResults, api;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._getQuestradeApi(credentials)];
            case 1:
                qtApi = _a.sent();
                currentAccount = qtApi.currentAccount;
                myBalances = qtApi.myBalances;
                serverTime = qtApi.serverTime;
                accountActivities = qtApi.get.account.activities;
                accountAllAccounts = qtApi.get.account.allAccounts;
                accountBalances = qtApi.get.account.balances;
                accountExecutions = qtApi.get.account.executions;
                accountOrders = qtApi.get.account.orders;
                accountOrdersByIds = qtApi.get.account.ordersByIds;
                accountPositions = qtApi.get.account.positions;
                marketAllMarkets = qtApi.get.market.allMarkets;
                marketCandlesByStockId = qtApi.get.market.candlesByStockId;
                quotesByStockIds = qtApi.get.quotes.byStockIds;
                quotesByStrategies = qtApi.get.quotes.byStrategies;
                quotesByOptionsIds = qtApi.get.quotes.optionsQuotes.byOptionsIds;
                quotesFromFilter = qtApi.get.quotes.optionsQuotes.fromFilter;
                symbolsOptionChainsByStockId = qtApi.get.symbols.optionChains.byStockId;
                symbolsByStockIds = qtApi.get.symbols.byStockIds;
                searchAllStocks = qtApi.get.search.allStocks;
                searchStock = qtApi.get.search.stock;
                searchCountResults = qtApi.get.search.countResults;
                api = {
                    currentAccount: currentAccount,
                    myBalances: myBalances,
                    serverTime: serverTime,
                    get: {
                        account: {
                            activities: accountActivities,
                            allAccounts: accountAllAccounts,
                            balances: accountBalances,
                            executions: accountExecutions,
                            orders: accountOrders,
                            ordersByIds: accountOrdersByIds,
                            positions: accountPositions,
                        },
                        market: {
                            allMarkets: marketAllMarkets,
                            candlesByStockId: marketCandlesByStockId,
                        },
                        quotes: {
                            byStockIds: quotesByStockIds,
                            byStrategies: quotesByStrategies,
                            optionsQuotes: {
                                byOptionsIds: quotesByOptionsIds,
                                fromFilter: quotesFromFilter,
                            },
                        },
                        symbols: {
                            optionChains: {
                                byStockId: symbolsOptionChainsByStockId,
                            },
                            byStockIds: symbolsByStockIds,
                        },
                        search: {
                            allStocks: searchAllStocks,
                            stock: searchStock,
                            countResults: searchCountResults,
                        },
                    },
                };
                return [2 /*return*/, api];
        }
    });
}); };
//# sourceMappingURL=questradeAPI.js.map