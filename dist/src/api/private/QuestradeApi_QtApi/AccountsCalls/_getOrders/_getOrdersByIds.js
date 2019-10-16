"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getOrderByIds
/** _getOrders */
exports._getOrdersByIds = function (credentials) { return function (orderId) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, API_Request_AXIOS_1._axiosAccountGetApi(credentials)("/orders?ids=" + orderId.join(','))()];
            case 1: 
            //
            return [2 /*return*/, (_a.sent()).orders];
        }
    });
}); }; };
//# sourceMappingURL=_getOrdersByIds.js.map