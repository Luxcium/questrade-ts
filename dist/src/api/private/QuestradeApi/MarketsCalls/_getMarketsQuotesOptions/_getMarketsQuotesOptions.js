"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
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
        return AxiosRequestApiFactory_1._axiosPostApi(_axios)(credentials)(postData)('/markets/quotes/options')();
    }
    catch (error) {
        console.error('/markets/quotes/options', error.message);
        throw error;
    }
};
//# sourceMappingURL=_getMarketsQuotesOptions.js.map