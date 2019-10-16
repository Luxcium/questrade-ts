"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarketsCalls_1 = require("../../MarketsCalls");
var _getSymbolSearch_1 = require("./_getSymbolSearch");
exports._getSymbolSearchAndCount = function (credentials) {
    var symbolSearch = _getSymbolSearch_1._getSymbolSearch(credentials);
    symbolSearch.count = MarketsCalls_1._getSymbolSearchCount(credentials);
    return symbolSearch;
};
//# sourceMappingURL=_getSymbolSearchAndCount.js.map