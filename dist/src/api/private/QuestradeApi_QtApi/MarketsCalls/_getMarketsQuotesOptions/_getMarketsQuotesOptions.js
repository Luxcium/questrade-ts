"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
exports._getMarketsQuotesOptions = function (credentials) { return function (optionIds, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice) {
    if (optionType === void 0) { optionType = void 0; }
    if (minstrikePrice === void 0) { minstrikePrice = 0; }
    if (maxstrikePrice === void 0) { maxstrikePrice = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var postData;
        return tslib_1.__generator(this, function (_a) {
            postData = !!optionIds && optionIds.length > 0
                ? {
                    optionIds: optionIds,
                }
                : {
                    filters: [
                        {
                            underlyingId: underlyingId,
                            expiryDate: expiryDate,
                            optionType: optionType || void 0,
                            minstrikePrice: minstrikePrice || 0,
                            maxstrikePrice: maxstrikePrice || 0,
                        },
                    ],
                };
            return [2 /*return*/, API_Request_AXIOS_1._axiosPostApi(credentials)(postData)('/markets/quotes/options')()];
        });
    });
}; };
//# sourceMappingURL=_getMarketsQuotesOptions.js.map