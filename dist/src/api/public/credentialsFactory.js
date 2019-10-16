"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var private_1 = require("../private");
var questradeAPI_1 = require("./questradeAPI");
var _redeemToken = function (refreshToken) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var credentials, questrade, qtApi;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._credentialsFactory(refreshToken)];
            case 1:
                credentials = _a.sent();
                return [4 /*yield*/, questradeAPI_1.questradeApi(credentials)];
            case 2:
                questrade = _a.sent();
                qtApi = questrade;
                return [2 /*return*/, { qtApi: qtApi, credentials: credentials }];
        }
    });
}); };
var redeemToken = _redeemToken;
exports.redeemToken = redeemToken;
//# sourceMappingURL=credentialsFactory.js.map