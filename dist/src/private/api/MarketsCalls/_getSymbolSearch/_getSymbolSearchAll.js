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
        var results_1, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix.toUpperCase() + "&offset=" + offset)()];
                case 1:
                    results_1 = _a.sent();
                    if (results_1 && results_1.symbols) {
                        return [2 /*return*/, results_1.symbols.map(function (result) {
                                result.count = results_1.symbols.length || 0;
                                return result;
                            })];
                    }
                    return [2 /*return*/, results_1.symbols];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    });
}; };
utils_1.void0(utils_1.void0);
//# sourceMappingURL=_getSymbolSearchAll.js.map