"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getAccounts
/** _getAccounts */
function _getAccounts(credentials) {
    var _this = this;
    //
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var getAccounts, accounts, data, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    getAccounts = routes_1._axiosGetApi(credentials);
                    accounts = getAccounts('/accounts');
                    return [4 /*yield*/, accounts()];
                case 1:
                    data = _a.sent();
                    //
                    return [2 /*return*/, data.accounts];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1.message);
                    return [2 /*return*/, []];
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports._getAccounts = _getAccounts;
//# sourceMappingURL=_getAccounts.js.map