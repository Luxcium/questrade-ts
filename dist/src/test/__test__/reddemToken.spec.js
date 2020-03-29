"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var __1 = require("../..");
var utils_1 = require("../../utils");
describe('Redeem Token ', function () {
    it('should not be able to recive an empty string', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var canReciveEmptyString, _a, qtApi, credentials, e_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    canReciveEmptyString = true;
                    return [4 /*yield*/, __1.redeemToken('')];
                case 1:
                    _a = _b.sent(), qtApi = _a.qtApi, credentials = _a.credentials;
                    utils_1.void0([qtApi, credentials]);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    console.error(e_1.message);
                    canReciveEmptyString = false;
                    return [3 /*break*/, 3];
                case 3:
                    expect(canReciveEmptyString).toBe(false);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to recive a keyfile', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.redeemToken({
                        account: 12345678,
                        apiVersion: 'v1',
                        test: false,
                        practiceAccount: false,
                        seedToken: 'MOCK',
                        keyFile: 'MOCKfile',
                    })];
                case 1:
                    credentials = (_a.sent()).credentials;
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to recive practice account = true', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.redeemToken({
                        account: 12345678,
                        apiVersion: 'v1',
                        test: false,
                        practiceAccount: true,
                        seedToken: 'MOCK',
                        keyFile: 'MOCKfile',
                    })];
                case 1:
                    credentials = (_a.sent()).credentials;
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to recive no apiVersion and default to v1', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.redeemToken({
                        account: 12345678,
                        test: false,
                        practiceAccount: true,
                        seedToken: 'MOCK',
                        keyFile: 'MOCKfile',
                    })];
                case 1:
                    credentials = (_a.sent()).credentials;
                    expect(credentials.apiVersion).toBe('v1');
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to recive a file path as a string containing the token', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.redeemToken('./keys/RocgyhkqWp-USE-YOUR-OWN-TOKEN-M3BSDjd0')];
                case 1:
                    credentials = _a.sent();
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=reddemToken.spec.js.map