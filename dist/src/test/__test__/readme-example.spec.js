"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = require("../../index");
var utils_1 = require("../../utils");
test('Validating all README examples', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var yourRefreshToken;
    return tslib_1.__generator(this, function (_a) {
        yourRefreshToken = 'RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0';
        // inside of an async function or async IIFE
        (function (doneTesting) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var log, _a, qtApi, credentials, serverTime, balances;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log = console.log;
                        utils_1.void0(log);
                        return [4 /*yield*/, index_1.redeemToken(yourRefreshToken)];
                    case 1:
                        _a = _b.sent(), qtApi = _a.qtApi, credentials = _a.credentials;
                        serverTime = qtApi.serverTime;
                        utils_1.void0(serverTime);
                        return [4 /*yield*/, qtApi.account.getBalances()];
                    case 2:
                        balances = _b.sent();
                        utils_1.void0(balances);
                        utils_1.void0(credentials);
                        return [2 /*return*/, doneTesting];
                }
            });
        }); })(done)
            .then(function (doneTesting) { return doneTesting(); })
            .catch(function (error) { return console.error(error.message); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=readme-example.spec.js.map