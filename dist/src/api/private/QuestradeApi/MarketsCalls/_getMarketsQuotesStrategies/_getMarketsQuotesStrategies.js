"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
exports._getMarketsQuotesStrategies = (_axios = axios_1.default) => (credentials) => async (strategyVariantRequestData) => AxiosRequestApiFactory_1._axiosPostApi(_axios)(credentials)(strategyVariantRequestData)('markets/quotes/strategies')();
//# sourceMappingURL=_getMarketsQuotesStrategies.js.map