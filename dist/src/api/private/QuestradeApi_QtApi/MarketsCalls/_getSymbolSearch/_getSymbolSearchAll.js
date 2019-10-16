"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getSymbolSearchAll
/** _getSymbolSearch */
exports._getSymbolSearchAll = function (credentials) { return function (prefix, offset) {
    if (offset === void 0) { offset = 0; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var results;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, API_Request_AXIOS_1._axiosGetApi(credentials)("/symbols/search?prefix=" + prefix + "&offset=" + offset)()];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.symbols.map(function (result) {
                            result.count = results.symbols.length;
                            return result;
                        })];
            }
        });
    });
}; };
//# sourceMappingURL=_getSymbolSearchAll.js.map