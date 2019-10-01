"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
exports._getQuotesOptionsByIds = function (credentials) { return function (optionIds) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, exports._getMarketsQuotesOptions(credentials)(optionIds, void 0, void 0, null, 0, 0)];
}); }); }; };
exports._getQuotesOptionsFilter = function (credentials) { return function (filters) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice;
    return tslib_1.__generator(this, function (_a) {
        underlyingId = filters.underlyingId, expiryDate = filters.expiryDate, optionType = filters.optionType, minstrikePrice = filters.minstrikePrice, maxstrikePrice = filters.maxstrikePrice;
        return [2, exports._getMarketsQuotesOptions(credentials)(null, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice)];
    });
}); }; };
exports._getMarketsQuotesOptions = function (credentials) { return function (optionIds, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice) {
    if (optionIds === void 0) { optionIds = []; }
    if (optionType === void 0) { optionType = void 0; }
    if (minstrikePrice === void 0) { minstrikePrice = 0; }
    if (maxstrikePrice === void 0) { maxstrikePrice = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var postData;
        return tslib_1.__generator(this, function (_a) {
            try {
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
                return [2, _1._axiosApiPost(credentials)(postData)('/markets/quotes/options')];
            }
            catch (error) {
                console.error('/markets/quotes/options', error.message);
                throw error;
            }
            return [2];
        });
    });
}; };
//# sourceMappingURL=_marketsQuotesOptions.js.map