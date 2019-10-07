"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const ramda_1 = tslib_1.__importDefault(require("ramda"));
const api_1 = require("./api");
const utils_1 = require("./utils");
(async () => {
    utils_1.void0(ramda_1.default);
    const { credentials, qtApi } = await api_1._redeemToken(axios_1.default)('JPkAws5CSK1GkAzpVovk4Q3nwVbUTUPA0');
    const [timeStart, timeEnd] = utils_1.dateRangeFromNow(10);
    const results = {
        setAccount: qtApi.setAccount,
        getServerTime: await qtApi.getServerTime(),
        get: {
            accounts: {
                activities: (await qtApi.get.accounts.activities(timeStart)(timeEnd))[0],
                orders: (await qtApi.get.accounts.orders()(timeStart)(timeEnd))[0],
                ordersAll: (await qtApi.get.accounts.ordersAll(timeStart)(timeEnd))[0],
                ordersByIds: qtApi.get.accounts.ordersByIds,
                executions: (await qtApi.get.accounts.executions(timeStart)(timeEnd))[0],
                balances: await qtApi.get.accounts.balances(),
                positions: await qtApi.get.accounts.positions(),
                allAccounts: await qtApi.get.accounts.allAccounts(),
                time: await qtApi.get.accounts.time(),
            },
            markets: {
                candlesById: qtApi.get.markets.candlesById(timeStart)(timeEnd),
                quotes: {
                    byStrategies: qtApi.get.markets.quotes.byStrategies,
                    options: qtApi.get.markets.quotes.options.byIds,
                    byIds: qtApi.get.markets.quotes.byIds,
                },
                allMarkets: utils_1.void0(await qtApi.get.markets.allMarkets()),
            },
            symbols: {
                optionsById: qtApi.get.symbols.optionsById,
                byIds: qtApi.get.symbols.byIds,
                search: qtApi.get.symbols.search,
                searchAll: qtApi.get.symbols.searchAll,
                searchCount: qtApi.get.symbols.searchCount,
            },
        },
    };
    const candles = await results.get.markets.candlesById('OneDay')(8049);
    candles.map(candle => {
        console.log(candle.hash.short);
    });
    return credentials;
})()
    .catch(error => console.log('error message:', error.message));
//# sourceMappingURL=debugAndTesting.js.map