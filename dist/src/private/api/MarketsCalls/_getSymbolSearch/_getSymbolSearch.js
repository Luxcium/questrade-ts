"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _getSymbolSearchAll_1 = require("./_getSymbolSearchAll");
// + _getSymbolSearch
/** _getSymbolSearch */
exports._getSymbolSearch = function (credentials) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var symbols, count, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _getSymbolSearchAll_1._getSymbolSearchAll(credentials)(prefix, offset)];
                case 1:
                    symbols = _a.sent();
                    count = symbols.length;
                    result = symbols[0];
                    result.count = count;
                    return [2 /*return*/, result];
            }
        });
    });
}; };
//# sourceMappingURL=_getSymbolSearch.js.map