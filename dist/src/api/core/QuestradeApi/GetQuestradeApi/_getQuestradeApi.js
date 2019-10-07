"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _getAccounts_1 = require("../AccountsCalls/_getAccounts");
const _getActivities_1 = require("../AccountsCalls/_getActivities");
const _getBalances_1 = require("../AccountsCalls/_getBalances");
const _getExecutions_1 = require("../AccountsCalls/_getExecutions");
const _getOrders_1 = require("../AccountsCalls/_getOrders");
const _getPositions_1 = require("../AccountsCalls/_getPositions");
const _getServerTime_1 = require("../AccountsCalls/_getServerTime");
const _getCandles_1 = require("../MarketsCalls/_getCandles");
const _getMarkets_1 = require("../MarketsCalls/_getMarkets");
const _getOptionsById_1 = require("../MarketsCalls/_getOptionsById");
const _getQuotesByIds_1 = require("../MarketsCalls/_getQuotesByIds");
const _getSymbolsByIds_1 = require("../MarketsCalls/_getSymbolsByIds");
const _getSymbolSearch_1 = require("../MarketsCalls/_getSymbolSearch");
const _marketsQuotesOptions_1 = require("../MarketsCalls/_marketsQuotesOptions");
const _marketsQuotesStrategies_1 = require("../MarketsCalls/_marketsQuotesStrategies");
exports._getQuestradeApi = (_axios = axios_1.default) => (credentials) => {
    const setAccount = credentials.accountNumber;
    const allAccounts = _getAccounts_1._getAccounts(_axios)(credentials);
    const activities = _getActivities_1._getActivities(_axios)(credentials);
    const balances = _getBalances_1._getBalances(_axios)(credentials);
    const marketCandlesById = _getCandles_1._getCandles(_axios)(credentials);
    const executions = _getExecutions_1._getExecutions(_axios)(credentials);
    const markets = _getMarkets_1._getMarkets(_axios)(credentials);
    const optionsById = _getOptionsById_1._getOptionsById(_axios)(credentials);
    const options = _marketsQuotesOptions_1._quotesOptionsbyFilterAndIds(_axios)(credentials);
    const ordersByIds = _getOrders_1._getOrdersByIds(_axios)(credentials);
    const orders = _getOrders_1._getOrders(_axios)(credentials);
    const ordersAll = _getOrders_1._getOrders(_axios)(credentials)('All');
    const positions = _getPositions_1._getPositions(_axios)(credentials);
    const marketsQuotesByIds = _getQuotesByIds_1._getQuotesByIds(_axios)(credentials);
    const search = _getSymbolSearch_1._symbolSearchAndCount(_axios)(credentials);
    const getServerTime = _getServerTime_1._getServerTime(_axios)(credentials);
    const symbolsByIds = _getSymbolsByIds_1._getSymbolsByIds(_axios)(credentials);
    const searchAll = _getSymbolSearch_1._getSymbolSearchAll(_axios)(credentials);
    const searchCount = _getSymbolSearch_1._getSymbolSearchCount(_axios)(credentials);
    const byStrategies = _marketsQuotesStrategies_1._marketsQuotesStrategies(_axios)(credentials);
    return {
        setAccount,
        getServerTime,
        get: {
            accounts: {
                activities,
                orders,
                ordersAll,
                ordersByIds,
                executions,
                balances,
                positions,
                allAccounts: allAccounts,
                time: getServerTime,
            },
            markets: {
                candlesById: marketCandlesById,
                quotes: {
                    byStrategies,
                    options,
                    byIds: marketsQuotesByIds,
                },
                allMarkets: markets,
            },
            symbols: {
                optionsById,
                byIds: symbolsByIds,
                search,
                searchAll,
                searchCount,
            },
        },
    };
};
//# sourceMappingURL=_getQuestradeApi.js.map