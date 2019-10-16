"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getAccounts
/** _getAccounts */
function _getAccounts(credentials) {
    var _this = this;
    //
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var getAccounts, accounts, data;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getAccounts = API_Request_AXIOS_1._axiosGetApi(credentials);
                    accounts = getAccounts('/accounts');
                    return [4 /*yield*/, accounts()];
                case 1:
                    data = _a.sent();
                    //
                    return [2 /*return*/, data.accounts];
            }
        });
    }); };
}
exports._getAccounts = _getAccounts;
//# sourceMappingURL=_getAccounts.js.map