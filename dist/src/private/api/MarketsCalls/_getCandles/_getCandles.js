"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../../utils");
var routes_1 = require("../../../routes");
// + _getCandles
/** _getCandles */
exports._getCandles = function (credentials) { return function (symbolID) { return function (interval) {
    if (interval === void 0) { interval = 'OneDay'; }
    return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, routes_1._axiosGetApi(credentials)("/markets/candles/" + symbolID + "?startTime=" + startDate + "&endTime=" + endDate + "&interval=" + interval)()];
                case 1: return [2 /*return*/, (_a.sent()).candles.map(function (result) {
                        result.symbolID = symbolID;
                        result.granularity = interval;
                        var _a = tslib_1.__read(utils_1.getHash(JSON.stringify(result)), 2), short = _a[0], long = _a[1];
                        result.hash = { short: short, long: long };
                        return result;
                    })];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); }; };
}; }; };
//# sourceMappingURL=_getCandles.js.map