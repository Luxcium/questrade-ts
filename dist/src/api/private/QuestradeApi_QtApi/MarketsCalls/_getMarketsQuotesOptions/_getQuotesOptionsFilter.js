"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _getMarketsQuotesOptions_1 = require("./_getMarketsQuotesOptions");
exports._getQuotesOptionsFilter = function (credentials) { return function (filters) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice;
    return tslib_1.__generator(this, function (_a) {
        underlyingId = filters.underlyingId, expiryDate = filters.expiryDate, optionType = filters.optionType, minstrikePrice = filters.minstrikePrice, maxstrikePrice = filters.maxstrikePrice;
        return [2 /*return*/, _getMarketsQuotesOptions_1._getMarketsQuotesOptions(credentials)(null, underlyingId, expiryDate, optionType, minstrikePrice, maxstrikePrice)];
    });
}); }; };
//# sourceMappingURL=_getQuotesOptionsFilter.js.map