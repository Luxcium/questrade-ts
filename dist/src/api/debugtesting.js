"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _1 = require(".");
var utils_1 = require("./utils");
var myRefreshToken = 'IskeVOywsgf1xx3305wA64BGKwyVibRQ0';
var aValue = 0;
var startTime = new Date(Date.now() - utils_1.day(1)).toISOString();
var endTime = new Date(Date.now()).toISOString();
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, qt, credentials, _b;
    return tslib_1.__generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, _1.redeemToken(myRefreshToken)];
            case 1:
                _a = _c.sent(), qt = _a.qtApi, credentials = _a.credentials;
                return [4, utils_1.id0(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        return [2, qt.getServerTime()];
                    }); }); })];
            case 2:
                _c.sent();
                _b = utils_1.log;
                return [4, qt.get.accounts.executions(startTime)(endTime)];
            case 3:
                _b.apply(void 0, [_c.sent()]);
                return [2, credentials];
        }
    });
}); })()
    .then(function (cred) {
    utils_1.id0(function () { return cred; });
})
    .catch(function (error) {
    return console.log('Test #', aValue, 'error message in debugtesting:', error.message);
});
//# sourceMappingURL=debugtesting.js.map