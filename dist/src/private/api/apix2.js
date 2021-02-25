"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questradeApiFactory3 = exports.questradeApiFactory2 = exports.questradeApiFactory1 = exports.questradeApiFactory = void 0;
const tslib_1 = require("tslib");
const routes_1 = require("../routes");
const _clientAccountGetApi_1 = require("../routes/clientAccountGetApi/_clientAccountGetApi");
const _myBalances_1 = require("./AccountsCalls/_getBalances/_myBalances");
const apix_1 = require("./apix");
apix_1.endPoint;
function questradeApiFactory(credentials, apiCallQ, proxy, errorlog = (...error) => error) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return questradeApiFactory3(questradeApiFactory2(questradeApiFactory1(credentials, apiCallQ, proxy, errorlog)));
    });
}
exports.questradeApiFactory = questradeApiFactory;
function questradeApiFactory1(credentials, apiCallQ, proxy, errorlog = (...error) => error) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const proxyFactory = proxy ? proxy(credentials) : null;
        const get = (placeHolder) => placeHolder(routes_1._clientGetApi(credentials, apiCallQ, proxyFactory), errorlog);
        const get2 = (placeHolder) => placeHolder(routes_1._clientGetApi(credentials, apiCallQ, proxyFactory));
        const post = (placeHolder) => placeHolder(routes_1._clientPostApi(credentials, apiCallQ, proxyFactory), errorlog);
        const post2 = (placeHolder) => placeHolder(routes_1._clientPostApi(credentials, apiCallQ, proxyFactory));
        const accGet = (placeHolder) => placeHolder(_clientAccountGetApi_1._clientAccountGetApi(credentials, apiCallQ, proxyFactory), errorlog);
        return {
            accGet,
            credentials,
            get,
            get2,
            post,
            post2,
        };
    });
}
exports.questradeApiFactory1 = questradeApiFactory1;
function questradeApiFactory2(someArgsName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { get, get2, post, post2, accGet, credentials } = yield someArgsName;
        return {
            accounts: get(apix_1.endPoint.accounts),
            activities: accGet(apix_1.endPoint.activities),
            balances: accGet(apix_1.endPoint.balances),
            candles: get(apix_1.endPoint.candles),
            credentials,
            executions: accGet(apix_1.endPoint.executions),
            markets: get(apix_1.endPoint.markets),
            marketsQuotesStrategies: post(apix_1.endPoint.strategies),
            optionsById: get(apix_1.endPoint.optionsById),
            orders: accGet(apix_1.endPoint.orders),
            ordersByIds: accGet(apix_1.endPoint.ordersByIds),
            positions: accGet(apix_1.endPoint.positions),
            quotesByIds: get(apix_1.endPoint.quotesByIds),
            quotesOptionsByIds: post(apix_1.endPoint.quotesOptionsByIds),
            quotesOptionsFilter: post2(apix_1.endPoint.optionsFilter),
            serverTime: get2(apix_1.endPoint.time),
            symbolSearch: get(apix_1.endPoint.symbolSearch),
            symbolSearchAll: get(apix_1.endPoint.symbolSearchAll),
            symbolSearchCount: get(apix_1.endPoint.symbolSearchCount),
            symbolsByIds: get(apix_1.endPoint.symbolsByIds),
        };
    });
}
exports.questradeApiFactory2 = questradeApiFactory2;
function questradeApiFactory3(api) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { credentials } = api;
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
exports.questradeApiFactory3 = questradeApiFactory3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpeDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJpdmF0ZS9hcGkvYXBpeDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVVBLHNDQUEwRDtBQUMxRCw2RkFBMEY7QUFDMUYsMEVBQXVFO0FBQ3ZFLGlDQUFrQztBQUVsQyxlQUFRLENBQUM7QUFFVCxTQUFzQixtQkFBbUIsQ0FDdkMsV0FBd0IsRUFDeEIsUUFBbUIsRUFDbkIsS0FBb0QsRUFDcEQsV0FBbUIsQ0FBQyxHQUFHLEtBQVksRUFBRSxFQUFFLENBQUMsS0FBSzs7UUFFN0MsT0FBTyxvQkFBb0IsQ0FDekIsb0JBQW9CLENBQ2xCLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUM3RCxDQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFYRCxrREFXQztBQUVELFNBQXNCLG9CQUFvQixDQUN4QyxXQUF3QixFQUN4QixRQUFtQixFQUNuQixLQUFvRCxFQUNwRCxXQUFtQixDQUFDLEdBQUcsS0FBWSxFQUFFLEVBQUUsQ0FBQyxLQUFLOztRQUU3QyxNQUFNLFlBQVksR0FBeUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3RSxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUMvQixXQUFXLENBQUMsc0JBQWEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTVFLE1BQU0sSUFBSSxHQUFHLENBQUMsV0FBZ0IsRUFBRSxFQUFFLENBQ2hDLFdBQVcsQ0FBQyxzQkFBYSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLElBQUksR0FBRyxDQUFDLFdBQWdCLEVBQUUsRUFBRSxDQUNoQyxXQUFXLENBQUMs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QkFBQTthQUNGO1lBQ0QsVUFBVSxFQUFFO2dCQUNKLFVBQVUsQ0FBQyxRQUFrQjs7d0JBQ2pDLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDcEMsQ0FBQztpQkFBQTthQUNGO1lBQ0QsTUFBTSxFQUFFO2dCQUNBLGFBQWE7O3dCQUNqQixPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztpQkFBQTtnQkFDRCxtQkFBbUIsQ0FBQyxRQUFnQjtvQkFDbEMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2FBQ0Y7WUFDSyxVQUFVOztvQkFDZCxPQUFPLHlCQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDM0MsQ0FBQzthQUFBO1lBQ0QsTUFBTSxFQUFFO2dCQUNBLFNBQVMsQ0FBQyxNQUFjLEVBQUUsTUFBZTs7d0JBQzdDLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzdDLENBQUM7aUJBQUE7Z0JBQ0ssWUFBWSxDQUFDLE1BQWM7O3dCQUMvQixPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztpQkFBQTtnQkFDSyxLQUFLLENBQUMsTUFBYyxFQUFFLE1BQWU7O3dCQUN6QyxPQUFPLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QywrQ0FBK0M7b0JBQ2pELENBQUM7aUJBQUE7YUFDRjtZQUNELFVBQVUsRUFBRSxXQUFXLENBQUMsVUFBVSxJQUFJLE9BQU87U0FDOUMsQ0FBQztJQUNKLENBQUM7Q0FBQTtBQW5GRCxvREFtRkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBzb3J0LWtleXMgKi9cbi8vIGltcG9ydCB7IGVycm9ybG9nIH0gZnJvbSAnLi4vLi4vcmVzb3VyY2VzL3NpZGUtZWZmZWN0cyc7XG5pbXBvcnQgdHlwZSB7XG4gIENyZWRlbnRpYWxzLFxuICBMb2dnZXIsXG4gIE9wdGlvbnNGaWx0ZXJzLFxuICBQcm94eUZhY3RvcnlfLFxuICBTdHJhdGVneVZhcmlhbnRSZXF1ZXN0LFxufSBmcm9tICcuLi8uLi90eXBlc2NyaXB0JztcbmltcG9ydCB0eXBlIHsgQXBpQ2FsbFFfIH0gZnJvbSAnLi4vY29yZS9uZXh0LXJhdGUtbGltaXRlci9xdWV1ZSc7XG5pbXBvcnQgeyBfY2xpZW50R2V0QXBpLCBfY2xpZW50UG9zdEFwaSB9IGZyb20gJy4uL3JvdXRlcyc7XG5pbXBvcnQgeyBfY2xpZW50QWNjb3VudEdldEFwaSB9IGZyb20gJy4uL3JvdXRlcy9jbGllbnRBY2NvdW50R2V0QXBpL19jbGllbnRBY2NvdW50R2V0QXBpJztcbmltcG9ydCB7IF9teUJhbGFuY2VzIH0gZnJvbSAnLi9BY2NvdW50c0NhbGxzL19nZXRCYWxhbmNlcy9fbXlCYWxhbmNlcyc7XG5pbXBvcnQgeyBlbmRQb2ludCB9IGZyb20gJy4vYXBpeCc7XG5cbmVuZFBvaW50O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlc3RyYWRlQXBpRmFjdG9yeShcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBhcGlDYWxsUTogQXBpQ2FsbFFfLFxuICBwcm94eTogKChjcmVkOiBDcmVkZW50aWFscykgPT4gUHJveHlGYWN0b3J5XykgfCBudWxsLFxuICBlcnJvcmxvZzogTG9nZ2VyID0gKC4uLmVycm9yOiBhbnlbXSkgPT4gZXJyb3IsXG4pIHtcbiAgcmV0dXJuIHF1ZXN0cmFkZUFwaUZhY3RvcnkzKFxuICAgIHF1ZXN0cmFkZUFwaUZhY3RvcnkyKFxuICAgICAgcXVlc3RyYWRlQXBpRmFjdG9yeTEoY3JlZGVudGlhbHMsIGFwaUNhbGxRLCBwcm94eSwgZXJyb3Jsb2cpLFxuICAgICksXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVzdHJhZGVBcGlGYWN0b3J5MShcbiAgY3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBhcGlDYWxsUTogQXBpQ2FsbFFfLFxuICBwcm94eTogKChjcmVkOiBDcmVkZW50aWFscykgPT4gUHJveHlGYWN0b3J5XykgfCBudWxsLFxuICBlcnJvcmxvZzogTG9nZ2VyID0gKC4uLmVycm9yOiBhbnlbXSkgPT4gZXJyb3IsXG4pIHtcbiAgY29uc3QgcHJveHlGYWN0b3J5OiBQcm94eUZhY3RvcnlfIHwgbnVsbCA9IHByb3h5ID8gcHJveHkoY3JlZGVudGlhbHMpIDogbnVsbDtcbiAgY29uc3QgZ2V0ID0gKHBsYWNlSG9sZGVyOiBhbnkpID0+XG4gICAgcGxhY2VIb2xkZXIoX2NsaWVudEdldEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSksIGVycm9ybG9nKTtcblxuICBjb25zdCBnZXQyID0gKHBsYWNlSG9sZGVyOiBhbnkpID0+XG4gICAgcGxhY2VIb2xkZXIoX2NsaWVudEdldEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSkpO1xuXG4gIGNvbnN0IHBvc3QgPSAocGxhY2VIb2xkZXI6IGFueSkgPT5cbiAgICBwbGFjZUhvbGRlcihfY2xpZW50UG9zdEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSksIGVycm9ybG9nKTtcblxuICBjb25zdCBwb3N0MiA9IChwbGFjZUhvbGRlcjogYW55KSA9PlxuICAgIHBsYWNlSG9sZGVyKF9jbGllbnRQb3N0QXBpKGNyZWRlbnRpYWxzLCBhcGlDYWxsUSwgcHJveHlGYWN0b3J5KSk7XG5cbiAgY29uc3QgYWNjR2V0ID0gKHBsYWNlSG9sZGVyOiBhbnkpID0+XG4gICAgcGxhY2VIb2xkZXIoXG4gICAgICBfY2xpZW50QWNjb3VudEdldEFwaShjcmVkZW50aWFscywgYXBpQ2FsbFEsIHByb3h5RmFjdG9yeSksXG4gICAgICBlcnJvcmxvZyxcbiAgICApO1xuXG4gIHJldHVybiB7XG4gICAgYWNjR2V0LFxuICAgIGNyZWRlbnRpYWxzLFxuICAgIGdldCxcbiAgICBnZXQyLFxuICAgIHBvc3QsXG4gICAgcG9zdDIsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBxdWVzdHJhZGVBcGlGYWN0b3J5Mihzb21lQXJnc05hbWU6IGFueSkge1xuICBjb25zdCB7IGdldCwgZ2V0MiwgcG9zdCwgcG9zdDIsIGFjY0dldCwgY3JlZGVudGlhbHMgfSA9IGF3YWl0IHNvbWVBcmdzTmFtZTtcblxuICByZXR1cm4ge1xuICAgIGFjY291bnRzOiBnZXQoZW5kUG9pbnQuYWNjb3VudHMpLFxuICAgIGFjdGl2aXRpZXM6IGFjY0dldChlbmRQb2ludC5hY3Rpdml0aWVzKSxcbiAgICBiYWxhbmNlczogYWNjR2V0KGVuZFBvaW50LmJhbGFuY2VzKSxcbiAgICBjYW5kbGVzOiBnZXQoZW5kUG9pbnQuY2FuZGxlcyksXG4gICAgY3JlZGVudGlhbHMsXG4gICAgZXhlY3V0aW9uczogYWNjR2V0KGVuZFBvaW50LmV4ZWN1dGlvbnMpLFxuICAgIG1hcmtldHM6IGdldChlbmRQb2ludC5tYXJrZXRzKSxcbiAgICBtYXJrZXRzUXVvdGVzU3RyYXRlZ2llczogcG9zdChlbmRQb2ludC5zdHJhdGVnaWVzKSxcbiAgICBvcHRpb25zQnlJZDogZ2V0KGVuZFBvaW50Lm9wdGlvbnNCeUlkKSxcbiAgICBvcmRlcnM6IGFjY0dldChlbmRQb2ludC5vcmRlcnMpLFxuICAgIG9yZGVyc0J5SWRzOiBhY2NHZXQoZW5kUG9pbnQub3JkZXJzQnlJZHMpLFxuICAgIHBvc2l0aW9uczogYWNjR2V0KGVuZFBvaW50LnBvc2l0aW9ucyksXG4gICAgcXVvdGVzQnlJZHM6IGdldChlbmRQb2ludC5xdW90ZXNCeUlkcyksXG4gICAgcXVvdGVzT3B0aW9uc0J5SWRzOiBwb3N0KGVuZFBvaW50LnF1b3Rlc09wdGlvbnNCeUlkcyksXG4gICAgcXVvdGVzT3B0aW9uc0ZpbHRlcjogcG9zdDIoZW5kUG9pbnQub3B0aW9uc0ZpbHRlciksXG4gICAgc2VydmVyVGltZTogZ2V0MihlbmRQb2ludC50aW1lKSxcbiAgICBzeW1ib2xTZWFyY2g6IGdldChlbmRQb2ludC5zeW1ib2xTZWFyY2gpLFxuICAgIHN5bWJvbFNlYXJjaEFsbDogZ2V0KGVuZFBvaW50LnN5bWJvbFNlYXJjaEFsbCksXG4gICAgc3ltYm9sU2VhcmNoQ291bnQ6IGdldChlbmRQb2ludC5zeW1ib2xTZWFyY2hDb3VudCksXG4gICAgc3ltYm9sc0J5SWRzOiBnZXQoZW5kUG9pbnQuc3ltYm9sc0J5SWRzKSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHF1ZXN0cmFkZUFwaUZhY3RvcnkzKGFwaTogYW55KSB7XG4gIGNvbnN0IHsgY3JlZGVudGlhbHMgfSA9IGFwaTtcblxuICByZXR1cm4ge1xuICAgIGFjY291bnQ6IHtcbiAgICAgIGN1cnJlbnRBY2NvdW50OiBjcmVkZW50aWFscy5hY2NvdW50TnVtYmVyLFxuICAgICAgZ2V0QWN0aXZpdGllcyhzdGFydFRpbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXBpLmFjdGl2aXRpZXMoc3RhcnRUaW1lKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBnZXRBbGxBY2NvdW50cygpIHtcbiAgICAgICAgcmV0dXJuIGFwaS5hY2NvdW50cygpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldEJhbGFuY2VzKCkge1xuICAgICAgICByZXR1cm4gYXBpLmJhbGFuY2VzKCk7XG4gICAgICB9LFxuICAgICAgZ2V0RXhlY3V0aW9ucyhzdGFydFRpbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXBpLmV4ZWN1dGlvbnMoc3RhcnRUaW1lKTtcbiAgICAgIH0sXG4gICAgICBnZXRPcmRlcnMoc3RhdGVGaWx0ZXI/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFwaS5vcmRlcnMoc3RhdGVGaWx0ZXIpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldE9yZGVyc0J5SWRzKG9yZGVySWQ6IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBhcGkub3JkZXJzQnlJZHMob3JkZXJJZCk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgZ2V0UG9zaXRpb25zKCkge1xuICAgICAgICByZXR1cm4gYXBpLnBvc2l0aW9ucygpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jIGdldFNlcnZlclRpbWUoKSB7XG4gICAgICAgIHJldHVybiBhcGkuc2VydmVyVGltZSgpO1xuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZ2V0T3B0aW9uQ2hhaW5zOiB7XG4gICAgICBhc3luYyBieVN0b2NrSWQoc3RvY2tJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBhcGkub3B0aW9uc0J5SWQoc3RvY2tJZCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgZ2V0T3B0aW9uc1F1b3Rlczoge1xuICAgICAgYXN5bmMgYnlPcHRpb25zSWRzKG9wdGlvbklkczogbnVtYmVyW10pIHtcbiAgICAgICAgcmV0dXJuIGFwaS5xdW90ZXNPcHRpb25zQnlJZHMob3B0aW9uSWRzKTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBmcm9tRmlsdGVyKGZpbHRlcnM6IE9wdGlvbnNGaWx0ZXJzKSB7XG4gICAgICAgIHJldHVybiBhcGkucXVvdGVzT3B0aW9uc0ZpbHRlcihmaWx0ZXJzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBnZXRRdW90ZXM6IHtcbiAgICAgIGFzeW5jIGJ5U3RvY2tJZHMoaWRzOiBudW1iZXJbXSkge1xuICAgICAgICByZXR1cm4gYXBpLnF1b3Rlc0J5SWRzKGlkcyk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgYnlTdHJhdGVnaWVzKHN0cmF0ZWd5VmFyaWFudFJlcXVlc3REYXRhOiBTdHJhdGVneVZhcmlhbnRSZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBhcGkubWFya2V0c1F1b3Rlc1N0cmF0ZWdpZXMoc3RyYXRlZ3lWYXJpYW50UmVxdWVzdERhdGEpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGdldFN5bWJvbHM6IHtcbiAgICAgIGFzeW5jIGJ5U3RvY2tJZHMoc3RvY2tJZHM6IG51bWJlcltdKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sc0J5SWRzKHN0b2NrSWRzKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJrZXQ6IHtcbiAgICAgIGFzeW5jIGdldEFsbE1hcmtldHMoKSB7XG4gICAgICAgIHJldHVybiBhcGkubWFya2V0cygpO1xuICAgICAgfSxcbiAgICAgIGdldENhbmRsZXNCeVN0b2NrSWQoc3ltYm9sSUQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXBpLmNhbmRsZXMoc3ltYm9sSUQpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFzeW5jIG15QmFsYW5jZXMoKSB7XG4gICAgICByZXR1cm4gX215QmFsYW5jZXMoYXdhaXQgYXBpLmJhbGFuY2VzKCkpO1xuICAgIH0sXG4gICAgc2VhcmNoOiB7XG4gICAgICBhc3luYyBhbGxTdG9ja3MocHJlZml4OiBzdHJpbmcsIG9mZnNldD86IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYXBpLnN5bWJvbFNlYXJjaEFsbChwcmVmaXgsIG9mZnNldCk7XG4gICAgICB9LFxuICAgICAgYXN5bmMgY291bnRSZXN1bHRzKHByZWZpeDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sU2VhcmNoQ291bnQocHJlZml4KTtcbiAgICAgIH0sXG4gICAgICBhc3luYyBzdG9jayhwcmVmaXg6IHN0cmluZywgb2Zmc2V0PzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBhcGkuc3ltYm9sU2VhcmNoKHByZWZpeCwgb2Zmc2V0KTtcbiAgICAgICAgLy8gcmV0dXJuIHN5bWJvbFNlYXJjaEFuZENvdW50KHByZWZpeCwgb2Zmc2V0KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXJUaW1lOiBjcmVkZW50aWFscy5zZXJ2ZXJUaW1lIHx8ICdFUlJPUicsXG4gIH07XG59XG4iXX0=