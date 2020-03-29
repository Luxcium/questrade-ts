"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _getSymbolSearchAll_1 = require("./_getSymbolSearchAll");
// + _getSymbolSearch
/** _getSymbolSearch */
exports._getSymbolSearch = function (credentials) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var symbols, count, result, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, _getSymbolSearchAll_1._getSymbolSearchAll(credentials)(prefix, offset)];
                case 1:
                    symbols = _a.sent();
                    count = symbols.length;
                    result = null;
                    if (!!symbols[0]) {
                        result = symbols[0];
                        result.count = count || 0;
                        result.all = symbols;
                        return [2 /*return*/, [result]];
                    }
                    return [2 /*return*/, []];
                case 2:
                    error_1 = _a.sent();
                    //
                    console.log(error_1.message);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}; };
//# sourceMappingURL=_getSymbolSearch.js.map