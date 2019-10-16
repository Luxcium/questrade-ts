"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getBalances
/** _getBalances */
exports._getBalances = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        //
        return [2 /*return*/, API_Request_AXIOS_1._axiosAccountGetApi(credentials)('/balances')()];
    });
}); }; };
//# sourceMappingURL=_getBalances.js.map