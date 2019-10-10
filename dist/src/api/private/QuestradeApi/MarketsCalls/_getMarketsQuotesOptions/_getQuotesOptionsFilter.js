"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _getMarketsQuotesOptions_1 = require("./_getMarketsQuotesOptions");
exports._getQuotesOptionsFilter = (_axios = axios_1.default) => (credentials) => async (filters) => {
    const { underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice, } = filters;
    return _getMarketsQuotesOptions_1._getMarketsQuotesOptions(_axios)(credentials)(null, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice);
};
//# sourceMappingURL=_getQuotesOptionsFilter.js.map