"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketsCalls_1 = require("../../MarketsCalls");
exports._getQuotesOptionsbyFilterAndIds = function (credentials) {
    var quotesOptionsFilter = MarketsCalls_1._getQuotesOptionsFilter(credentials);
    quotesOptionsFilter.byIds = MarketsCalls_1._getQuotesOptionsByIds(credentials);
    return quotesOptionsFilter;
};
//# sourceMappingURL=_getQuotesOptionsbyFilterAndIds.js.map