"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../../utils");
var routes_1 = require("../../../routes");
// + _getSymbolSearchAll
/** _getSymbolSearch */
exports._getSymbolSearchAll = function (credentials) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var results;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix.toUpperCase() + "&offset=" + offset)()];
                case 1:
                    results = _a.sent();
                    // https://api01.iq.questrade.com/v1
                    // /symbols/search?prefix=AAPL
                    // /symbols/search?prefix=BMO
                    // /symbols/search?prefix=aapl offset &offset=0',
                    // /symbols/search?prefix=aapl',
                    utils_1.void0(offset);
                    return [2 /*return*/, results.symbols.map(function (result) {
                            result.count = results.symbols.length;
                            return result;
                        })];
            }
        });
    });
}; };
//# sourceMappingURL=_getSymbolSearchAll.js.map