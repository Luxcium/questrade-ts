"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
exports._getMarketsQuotesStrategies = function (credentials) { return function (strategyVariantRequestData) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/, API_Request_AXIOS_1._axiosPostApi(credentials)(strategyVariantRequestData)('markets/quotes/strategies')()];
    });
}); }; };
//# sourceMappingURL=_getMarketsQuotesStrategies.js.map