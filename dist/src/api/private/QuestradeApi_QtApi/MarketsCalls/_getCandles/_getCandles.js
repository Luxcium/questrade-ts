"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../../utils");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getCandles
/** _getCandles */
exports._getCandles = function (credentials) { return function (symbolID) { return function (interval) {
    if (interval === void 0) { interval = 'OneDay'; }
    return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, API_Request_AXIOS_1._axiosGetApi(credentials)("/markets/candles/" + symbolID + "?startTime=" + startDate + "&endTime=" + endDate + "&interval=" + interval)()];
                case 1: return [2 /*return*/, (_a.sent()).candles.map(function (result) {
                        result.symbolID = symbolID;
                        result.granularity = interval;
                        var _a = utils_1.getHash(JSON.stringify(result)), short = _a[0], long = _a[1];
                        result.hash = { short: short, long: long };
                        return result;
                    })];
            }
        });
    }); }; };
}; }; };
//# sourceMappingURL=_getCandles.js.map