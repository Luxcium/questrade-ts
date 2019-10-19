"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
exports._getMarketsQuotesStrategies = function (credentials) { return function (strategyVariantRequestData) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, routes_1._axiosPostApi(credentials)(strategyVariantRequestData)('/markets/quotes/strategies')()];
    });
}); }; };
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
//# sourceMappingURL=_getMarketsQuotesStrategies.js.map