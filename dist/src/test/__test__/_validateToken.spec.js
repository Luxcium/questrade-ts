"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _validateToken_1 = require("../../private/auth/axiosCredentials_oAUTH/_validateToken");
describe('oAuth Validate Token', function () {
    it('should validate with a numeric account number', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            _validateToken_1._validateToken({
                account: 12345678,
                apiVersion: 'v1',
                test: false,
                practiceAccount: false,
                seedToken: '',
                keyFile: '',
                keyDir: '',
            });
            return [2 /*return*/];
        });
    }); });
    it('should validate with a string account number', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            _validateToken_1._validateToken({
                account: '12345678',
                apiVersion: 'v1',
                test: false,
                practiceAccount: false,
                seedToken: '',
                keyFile: '',
                keyDir: '',
            });
            return [2 /*return*/];
        });
    }); });
    it('should validate with a key file', function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            _validateToken_1._validateToken({
                account: '12345678',
                apiVersion: 'v1',
                test: false,
                practiceAccount: false,
                seedToken: '',
                keyFile: 'MOCKfile',
                keyDir: '',
            });
            return [2 /*return*/];
        });
    }); });
    it('should validate with a key dir', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, _validateToken_1._validateToken({
                                    account: '12345678',
                                    apiVersion: 'v1',
                                    test: false,
                                    practiceAccount: false,
                                    seedToken: '',
                                    keyFile: '',
                                    keyDir: './build/tmp',
                                })];
                        });
                    }); })()];
                case 1:
                    _a.sent();
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=_validateToken.spec.js.map