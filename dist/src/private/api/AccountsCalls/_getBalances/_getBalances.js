"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getBalances
/** _getBalances */
exports._getBalances = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        //
        return [2 /*return*/, routes_1._axiosAccountGetApi(credentials)('/balances')()];
    });
}); }; };
//# sourceMappingURL=_getBalances.js.map