"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../../utils");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getOrders
/** _getOrders */
exports._getOrders = function (credentials) { return function (stateFilter) {
    if (stateFilter === void 0) { stateFilter = 'All'; }
    return function (startDate) { return function (endDate) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, API_Request_AXIOS_1._axiosAccountGetApi(credentials)("/orders?" + utils_1.endpointFormatDateTool(startDate, endDate) + "stateFilter=" + stateFilter)()];
                case 1: return [2 /*return*/, (_a.sent()).orders];
            }
        });
    }); }; };
}; };
//# sourceMappingURL=_getOrders.js.map