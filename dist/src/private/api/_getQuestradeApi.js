"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questradeApiFactory = void 0;
const tslib_1 = require("tslib");
const routes_1 = require("../routes");
const _clientAccountGetApi_1 = require("../routes/clientAccountGetApi/_clientAccountGetApi");
const _getAccounts_1 = require("./AccountsCalls/_getAccounts/_getAccounts");
const _getActivities_1 = require("./AccountsCalls/_getActivities/_getActivities");
const _getBalances_1 = require("./AccountsCalls/_getBalances/_getBalances");
const _myBalances_1 = require("./AccountsCalls/_getBalances/_myBalances");
const _getExecutions_1 = require("./AccountsCalls/_getExecutions/_getExecutions");
const _getOrders_1 = require("./AccountsCalls/_getOrders/_getOrders");
const _getOrdersByIds_1 = require("./AccountsCalls/_getOrders/_getOrdersByIds");
const _getPositions_1 = require("./AccountsCalls/_getPositions/_getPositions");
const _getServerTime_1 = require("./AccountsCalls/_getServerTime/_getServerTime");
const MarketsCalls_1 = require("./MarketsCalls");
function questradeApiFactory(credentials, apiCallQ, proxy, errorlog = (...error) => error) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const proxyFactory = proxy ? proxy(credentials) : null;
        void proxy;
        const getApi = () => routes_1._clientGetApi(credentials, apiCallQ, proxyFactory);
        const postApi = () => routes_1._clientPostApi(credentials, apiCallQ, proxyFactory);
        const accGetApi = () => _clientAccountGetApi_1._clientAccountGetApi(credentials, apiCallQ, proxyFactory);
        const api = {
            accounts: _getAccounts_1._getAccounts(getApi(), errorlog),
            activities: _getActivities_1._getActivities(accGetApi(), errorlog),
            balances: _getBalances_1._getBalances(accGetApi(), errorlog),
            candles: MarketsCalls_1._getCandles(getApi(), errorlog),
            executions: _getExecutions_1._getExecutions(accGetApi(), errorlog),
            markets: MarketsCalls_1._getMarkets(getApi(), errorlog),
            marketsQuotesStrategies: MarketsCalls_1._getMarketsQuotesStrategies(postApi(), errorlog),
            optionsById: MarketsCalls_1._getOptionsById(getApi(), errorlog),
            orders: _getOrders_1._getOrders(accGetApi(), errorlog),
            ordersByIds: _getOrdersByIds_1._getOrdersByIds(accGetApi(), errorlog),
            positions: _getPositions_1._getPositions(accGetApi(), errorlog),
            quotesByIds: MarketsCalls_1._getQuotesByIds(getApi(), errorlog),
            quotesOptionsByIds: MarketsCalls_1._getQuotesOptionsByIds(postApi(), errorlog),
            quotesOptionsFilter: MarketsCalls_1._getQuotesOptionsFilter(postApi() /* , errorlog */),
            serverTime: _getServerTime_1._getServerTime(getApi() /* , errorlog */),
            symbolSearch: MarketsCalls_1._getSymbolSearch(getApi(), errorlog),
            symbolSearchAll: MarketsCalls_1._getSymbolSearchAll(getApi(), errorlog),
            symbolSearchCount: MarketsCalls_1._getSymbolSearchCount(getApi(), errorlog),
            symbolsByIds: MarketsCalls_1._getSymbolsByIds(getApi(), errorlog),
        };
        return {
            account: {
                currentAccount: credentials.accountNumber,
                getActivities(startTime) {
                    return api.activities(startTime);
                },
                getAllAccounts() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.accounts();
                    });
                },
                getBalances() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.balances();
                    });
                },
                getExecutions(startTime) {
                    return api.executions(startTime);
                },
                getOrders(stateFilter) {
                    return api.orders(stateFilter);
                },
                getOrdersByIds(orderId) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.ordersByIds(orderId);
                    });
                },
                getPositions() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.positions();
                    });
                },
                getServerTime() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.serverTime();
                    });
                },
            },
            getOptionChains: {
                byStockId(stockId) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.optionsById(stockId);
                    });
                },
            },
            getOptionsQuotes: {
                byOptionsIds(optionIds) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.quotesOptionsByIds(optionIds);
                    });
                },
                fromFilter(filters) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.quotesOptionsFilter(filters);
                    });
                },
            },
            getQuotes: {
                byStockIds(ids) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.quotesByIds(ids);
                    });
                },
                byStrategies(strategyVariantRequestData) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.marketsQuotesStrategies(strategyVariantRequestData);
                    });
                },
            },
            getSymbols: {
                byStockIds(stockIds) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.symbolsByIds(stockIds);
                    });
                },
            },
            market: {
                getAllMarkets() {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.markets();
                    });
                },
                getCandlesByStockId(symbolID) {
                    return api.candles(symbolID);
                },
            },
            myBalances() {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    return _myBalances_1._myBalances(yield api.balances());
                });
            },
            search: {
                allStocks(prefix, offset) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.symbolSearchAll(prefix, offset);
                    });
                },
                countResults(prefix) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.symbolSearchCount(prefix);
                    });
                },
                stock(prefix, offset) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        return api.symbolSearch(prefix, offset);
                        // return symbolSearchAndCount(prefix, offset);
                    });
                },
            },
            serverTime: credentials.serverTime || 'ERROR',
        };
    });
}
exports.questradeApiFactory = questradeApiFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2dldFF1ZXN0cmFkZUFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcml2YXRlL2FwaS9fZ2V0UXVlc3RyYWRlQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFXQSxzQ0FBMEQ7QUFDMUQsNkZBQTBGO0FBQzFGLDRFQUF5RTtBQUN6RSxrRkFBK0U7QUFDL0UsNEVBQXlFO0FBQ3pFLDBFQUF1RTtBQUN2RSxrRkFBK0U7QUFDL0Usc0VBQW1FO0FBQ25FLGdGQUE2RTtBQUM3RSwrRUFBNEU7QUFDNUUsa0ZBQStFO0FBQy9FLGlEQWN3QjtBQUV4QixTQUFzQixtQkFBbUIsQ0FDdkMsV0FBd0IsRUFDeEIsUUFBbUIsRUFDbkIsS0FBb0QsRUFDcEQsV0FBbUIsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSzs7UUFFN0MsTUFBTSxZQUFZLEdBQXlCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFN0UsS0FBSyxLQUFLLENBQUM7UUFDWCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxzQkFBYSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEUsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsdUJBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzFFLE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRSxDQUNyQiwyQ0FBb0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTVELE1BQU0sR0FBRyxHQUFHO1lBQ1YsUUFBUSxFQUFFLDJCQUFZLENBQUMsTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDO1lBQzFDLFVBQVUsRUFBRSwrQkFBYyxDQUFDLFNBQVMsRUFBRSxFQUFFLFFBQVEsQ0FBQztZQUNqRCxRQUFRLEVBQUUs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Q0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ3hDLCtDQUErQztvQkFDakQsQ0FBQztpQkFBQTthQUNGO1lBQ0QsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFVLElBQUksT0FBTztTQUM5QyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBcEhELGtEQW9IQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGVycm9ybG9nIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cyc7XG5pbXBvcnQgeyBJUXVlc3RyYWRlQVBJdjJfMCB9IGZyb20gJy4uLy4uL3B1YmxpYy9JUXVlc3RyYWRlQVBJdjJfMCc7XG5pbXBvcnQgdHlwZSB7XG4gIENyZWRlbnRpYWxzLFxuICBMb2dnZXIsXG4gIE9wdGlvbnNGaWx0ZXJzLFxuICBQcm94eUZhY3RvcnlfLFxuICBRdWVzdHJhZGVBcGksXG4gIFN0cmF0ZWd5VmFyaWFudFJlcXVlc3QsXG59IGZyb20gJy4uLy4uL3R5cGVzY3JpcHQnO1xuaW1wb3J0IHR5cGUgeyBBcGlDYWxsUV8gfSBmcm9tICcuLi9jb3JlL25leHQtcmF0ZS1saW1pdGVyL3F1ZXVlJztcbmltcG9ydCB7IF9jbGllbnRHZXRBcGksIF9jbGllbnRQb3N0QXBpIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCB7IF9jbGllbnRBY2NvdW50R2V0QXBpIH0gZnJvbSAnLi4vcm91dGVzL2NsaWVudEFjY291bnRHZXRBcGkvX2NsaWVudEFjY291bnRHZXRBcGknO1xuaW1wb3J0IHsgX2dldEFjY291bnRzIH0gZnJvbSAnLi9BY2NvdW50c0NhbGxzL19nZXRBY2NvdW50cy9fZ2V0QWNjb3VudHMnO1xuaW1wb3J0IHsgX2dldEFjdGl2aXRpZXMgfSBmcm9tICcuL0FjY291bnRzQ2FsbHMvX2dldEFjdGl2aXRpZXMvX2dldEFjdGl2aXRpZXMnO1xuaW1wb3J0IHsgX2dldEJhbGFuY2VzIH0gZnJvbSAnLi9BY2NvdW50c0NhbGxzL19nZXRCYWxhbmNlcy9fZ2V0QmFsYW5jZXMnO1xuaW1wb3J0IHsgX215QmFsYW5jZXMgfSBmcm9tICcuL0FjY291bnRzQ2FsbHMvX2dldEJhbGFuY2VzL19teUJhbGFuY2VzJztcbmltcG9ydCB7IF9nZXRFeGVjdXRpb25zIH0gZnJvbSAnLi9BY2NvdW50c0NhbGxzL19nZXRFeGVjdXRpb25zL19nZXRFeGVjdXRpb25zJztcbmltcG9ydCB7IF9nZXRPcmRlcnMgfSBmcm9tICcuL0FjY291bnRzQ2FsbHMvX2dldE9yZGVycy9fZ2V0T3JkZXJzJztcbmltcG9ydCB7IF9nZXRPcmRlcnNCeUlkcyB9IGZyb20gJy4vQWNjb3VudHNDYWxscy9fZ2V0T3JkZXJzL19nZXRPcmRlcnNCeUlkcyc7XG5pbXBvcnQgeyBfZ2V0UG9zaXRpb25zIH0gZnJvbSAnLi9BY2NvdW50c0NhbGxzL19nZXRQb3NpdGlvbnMvX2dldFBvc2l0aW9ucyc7XG5pbXBvcnQgeyBfZ2V0U2VydmVyVGltZSB9IGZyb20gJy4vQWNjb3VudHNDYWxscy9fZ2V0U2VydmVyVGltZS9fZ2V0U2VydmVyVGltZSc7XG5pbXBvcnQge1xuICBfZ2V0Q2FuZGxlcyxcbiAgX2dldE1hcmtldHMsXG4gIF9nZXRNYXJrZXRzUXVvdGVzU3RyYXRlZ2llcyxcbiAgX2dldE9wdGlvbnNCeUlkLFxuICBfZ2V0UXVvdGVzQnlJZHMsXG4gIC8vIF9nZXRRdW90ZXNPcHRpb25zYnlGaWx0ZXJBbmRJZHMsXG4gIF9nZXRRdW90ZXNPcHRpb25zQnlJZHMsXG4gIF9nZXRRdW90ZXNPcHRpb25zRmlsdGVyLFxuICBfZ2V0U3ltYm9sc0J5SWRzLFxuICAvLyBfZ2V0U3ltYm9sU2VhcmNoQW5kQ291bnQsXG4gIF9nZXRTeW1ib2xTZWFyY2gsXG4gIF9nZXRTeW1ib2xTZWFyY2hBbGwsXG4gIF9nZXRTeW1ib2xTZWFyY2hDb3VudCxcbn0gZnJvbSAnLi9NYXJrZXRzQ2FsbHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlc3RyYWRlQXBpRmFjdG9yeShcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBhcGlDYWxsUTogQXBpQ2FsbFFfLFxuICBwcm94eTogKChjcmVkOiBDcmVkZW50aWFscykgPT4gUHJveHlGYWN0b3J5XykgfCBudWxsLFxuICBlcnJvcmxvZzogTG9nZ2VyID0gKC4uLmVycm9yOiBhbnlbXSkgPT4gZXJyb3IsXG4pOiBQcm9taXNlPFF1ZXN0cmFkZUFwaSAmIElRdWVzdHJhZGVBUEl2Ml8wPiB7XG4gIGNvbnN0IHByb3h5RmFjdG9yeTogUHJveHlGYWN0b3J5XyB8IG51bGwgPSBwcm94eSA/IHByb3h5KGNyZWRlbnRpYWxzKSA6IG51bGw7XG5cbiAgdm9pZCBwcm94eTtcbiAgY29uc3QgZ2V0QXBpID0gKCkgPT4gX2NsaWVudEdldEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSk7XG4gIGNvbnN0IHBvc3RBcGkgPSAoKSA9PiBfY2xpZW50UG9zdEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSk7XG4gIGNvbnN0IGFjY0dldEFwaSA9ICgpID0+XG4gICAgX2NsaWVudEFjY291bnRHZXRBcGkoY3JlZGVudGlhbHMsIGFwaUNhbGxRLCBwcm94eUZhY3RvcnkpO1xuXG4gIGNvbnN0IGFwaSA9IHtcbiAgICBhY2NvdW50czogX2dldEFjY291bnRzKGdldEFwaSgpLCBlcnJvcmxvZyksXG4gICAgYWN0aXZpdGllczogX2dldEFjdGl2aXRpZXMoYWNjR2V0QXBpKCksIGVycm9ybG9nKSxcbiAgICBiYWxhbmNlczogX2dldEJhbGFuY2VzKGFjY0dldEFwaSgpLCBlcnJvcmxvZyksXG4gICAgY2FuZGxlczogX2dldENhbmRsZXMoZ2V0QXBpKCksIGVycm9ybG9nKSxcbiAgICBleGVjdXRpb25zOiBfZ2V0RXhlY3V0aW9ucyhhY2NHZXRBcGkoKSwgZXJyb3Jsb2cpLFxuICAgIG1hcmtldHM6IF9nZXRNYXJrZXRzKGdldEFwaSgpLCBlcnJvcmxvZyksXG4gICAgbWFya2V0c1F1b3Rlc1N0cmF0ZWdpZXM6IF9nZXRNYXJrZXRzUXVvdGVzU3RyYXRlZ2llcyhwb3N0QXBpKCksIGVycm9ybG9nKSxcbiAgICBvcHRpb25zQnlJZDogX2dldE9wdGlvbnNCeUlkKGdldEFwaSgpLCBlcnJvcmxvZyksXG4gICAgb3JkZXJzOiBfZ2V0T3JkZXJzKGFjY0dldEFwaSgpLCBlcnJvcmxvZyksXG4gICAgb3JkZXJzQnlJZHM6IF9nZXRPcmRlcnNCeUlkcyhhY2NHZXRBcGkoKSwgZXJyb3Jsb2cpLFxuICAgIHBvc2l0aW9uczogX2dldFBvc2l0aW9ucyhhY2NHZXRBcGkoKSwgZXJyb3Jsb2cpLFxuICAgIHF1b3Rlc0J5SWRzOiBfZ2V0UXVvdGVzQnlJZHMoZ2V0QXBpKCksIGVycm9ybG9nKSxcbiAgICBxdW90ZXNPcHRpb25zQnlJZHM6IF9nZXRRdW90ZXNPcHRpb25zQnlJZHMocG9zdEFwaSgpLCBlcnJvcmxvZyksXG4gICAgcXVvdGVzT3B0aW9uc0ZpbHRlcjogX2dldFF1b3Rlc09wdGlvbnNGaWx0ZXIocG9zdEFwaSgpIC8qICwgZXJyb3Jsb2cgKi8pLFxuICAgIHNlcnZlclRpbWU6IF9nZXRTZXJ2ZXJUaW1lKGdldEFwaSgpIC8qICwgZXJyb3Jsb2cgKi8pLFxuICAgIHN5bWJvbFNlYXJjaDogX2dldFN5bWJvbFNlYXJjaChnZXRBcGkoKSwgZXJyb3Jsb2cpLFxuICAgIHN5bWJvbFNlYXJjaEFsbDogX2dldFN5bWJvbFNlYXJjaEFsbChnZXRBcGkoKSwgZXJyb3Jsb2cpLFxuICAgIHN5bWJvbFNlYXJjaENvdW50OiBfZ2V0U3ltYm9sU2VhcmNoQ291bnQoZ2V0QXBpKCksIGVycm9ybG9nKSxcbiAgICBzeW1ib2xzQnlJZHM6IF9nZXRTeW1ib2xzQnlJZHMoZ2V0QXBpKCksIGVycm9ybG9nKSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFjY291bnQ6IHtcbiAgICAgIGN1cnJlbnRBY2NvdW50OiBjcmVkZW50aWFscy5hY2NvdW50TnVtYmVyLFxuICAgICAgZ2V0QWN0aXZpdGllcyhzdGFydFRpbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXBpLmFjdGl2aXRpZXMoc3RhcnRUaW1lKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBnZXRBbGxBY2NvdW50cygpIHtcbiAgICAgICAgcmV0dXJuIGFwaS5hY2NvdW50cygpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldEJhbGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gYXBpLmJhbGFuY2VzKCk7XG4gICAgICB9LFxuICAgICAgZ2V0RXhlY3V0aW9ucyhzdGFydFRpbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXBpLmV4ZWN1dGlvbnMoc3RhcnRUaW1lKTtcbiAgICAgIH0sXG4gICAgICBnZXRPcmRlcnMoc3RhdGVGaWx0ZXI/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFwaS5vcmRlcnMoc3RhdGVGaWx0ZXIpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldE9yZGVyc0J5SWRzKG9yZGVySWQ6IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBhcGkub3JkZXJzQnlJZHMob3JkZXJJZCk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0UG9zaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gYXBpLnBvc2l0aW9ucygpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldFNlcnZlclRpbWUoKSB7XG4gICAgICAgIHJldHVybiBhcGkuc2VydmVyVGltZSgpO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZ2V0T3B0aW9uQ2hhaW5zOiB7XG4gICAgICBhc3luYyBieVN0b2NrSWQoc3RvY2tJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBhcGkub3B0aW9uc0J5SWQoc3RvY2tJZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgZ2V0T3B0aW9uc1F1b3Rlczoge1xuICAgICAgYXN5bmMgYnlPcHRpb25zSWRzKG9wdGlvbklkczogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdW90ZXNPcHRpb25zQnlJZHMob3B0aW9uSWRzKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBmcm9tRmlsdGVyKGZpbHRlcnM6IE9wdGlvbnNGaWx0ZXJzKSB7XG4gICAgICAgIHJldHVybiBhcGkucXVvdGVzT3B0aW9uc0ZpbHRlcihmaWx0ZXJzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBnZXRRdW90ZXM6IHtcbiAgICAgIGFzeW5jIGJ5U3RvY2tJZHMoaWRzOiBudW1iZXJbXSkge1xuICAgICAgICByZXR1cm4gYXBpLnF1b3Rlc0J5SWRzKGlkcyk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgYnlTdHJhdGVnaWVzKHN0cmF0ZWd5VmFyaWFudFJlcXVlc3REYXRhOiBTdHJhdGVneVZhcmlhbnRSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBhcGkubWFya2V0c1F1b3Rlc1N0cmF0ZWdpZXMoc3RyYXRlZ3lWYXJpYW50UmVxdWVzdERhdGEpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGdldFN5bWJvbHM6IHtcbiAgICAgIGFzeW5jIGJ5U3RvY2tJZHMoc3RvY2tJZHM6IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sc0J5SWRzKHN0b2NrSWRzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJrZXQ6IHtcbiAgICAgIGFzeW5jIGdldEFsbE1hcmtldHMoKSB7XG4gICAgICAgIHJldHVybiBhcGkubWFya2V0cygpO1xuICAgICAgfSxcbiAgICAgIGdldENhbmRsZXNCeVN0b2NrSWQoc3ltYm9sSUQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXBpLmNhbmRsZXMoc3ltYm9sSUQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFzeW5jIG15QmFsYW5jZXMoKSB7XG4gICAgICByZXR1cm4gX215QmFsYW5jZXMoYXdhaXQgYXBpLmJhbGFuY2VzKCkpO1xuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICBhc3luYyBhbGxTdG9ja3MocHJlZml4OiBzdHJpbmcsIG9mZnNldD86IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXBpLnN5bWJvbFNlYXJjaEFsbChwcmVmaXgsIG9mZnNldCk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgY291bnRSZXN1bHRzKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sU2VhcmNoQ291bnQocHJlZml4KTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBzdG9jayhwcmVmaXg6IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sU2VhcmNoKHByZWZpeCwgb2Zmc2V0KTtcbiAgICAgICAgLy8gcmV0dXJuIHN5bWJvbFNlYXJjaEFuZENvdW50KHByZWZpeCwgb2Zmc2V0KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXJUaW1lOiBjcmVkZW50aWFscy5zZXJ2ZXJUaW1lIHx8ICdFUlJPUicsXG4gIH07XG59XG4iXX0=