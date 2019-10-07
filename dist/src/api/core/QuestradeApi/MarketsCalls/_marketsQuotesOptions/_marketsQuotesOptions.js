"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getQuotesOptionsByIds = (_axios = axios_1.default) => (credentials) => async (optionIds) => exports._getMarketsQuotesOptions(_axios)(credentials)(optionIds, void 0, void 0, null, 0, 0);
exports._getQuotesOptionsFilter = (_axios = axios_1.default) => (credentials) => async (filters) => {
    const { underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice, } = filters;
    return exports._getMarketsQuotesOptions(_axios)(credentials)(null, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice);
};
exports._getMarketsQuotesOptions = (_axios = axios_1.default) => (credentials) => async (optionIds = [], underlyingId, expiryDate, optionType = void 0, minstrikePrice = 0, maxstrikePrice = 0) => {
    try {
        const postData = !!optionIds && optionIds.length > 0
            ? {
                optionIds,
            }
            : {
                filters: [
                    {
                        underlyingId,
                        expiryDate,
                        optionType: optionType || void 0,
                        minstrikePrice: minstrikePrice || 0,
                        maxstrikePrice: maxstrikePrice || 0,
                    },
                ],
            };
        return __1._axiosApiPost(_axios)(credentials)(postData)('/markets/quotes/options')();
    }
    catch (error) {
        console.error('/markets/quotes/options', error.message);
        throw error;
    }
};
//# sourceMappingURL=_marketsQuotesOptions.js.map