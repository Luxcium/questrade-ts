"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._marketsQuotesStrategies = (_axios = axios_1.default) => (credentials) => async (strategyVariantRequestData) => __1._axiosApiPost(_axios)(credentials)(strategyVariantRequestData)('markets/quotes/strategies')();
//# sourceMappingURL=_marketsQuotesStrategies.js.map