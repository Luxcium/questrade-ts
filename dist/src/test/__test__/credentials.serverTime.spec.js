"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var private_1 = require("../../private");
test("should set getServerTime to 'ERROR'", function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var qtApi, serverTime;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, private_1._getQuestradeApi(private_1._emptyCredentials())];
            case 1:
                qtApi = _a.sent();
                serverTime = qtApi.serverTime;
                console.log(serverTime);
                expect(serverTime).toEqual('ERROR');
                done();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=credentials.serverTime.spec.js.map