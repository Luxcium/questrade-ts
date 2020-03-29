"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axiosCredentials_oAUTH_1 = require("../../private/auth/axiosCredentials_oAUTH");
var credentialsFactory_1 = require("../../private/auth/credentialsFactory");
var utils_1 = require("../../utils");
describe('auth Credential from QuestradeApi via AXIOS', function () {
    it('should be able to recive a keydir', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials({
                        account: 12345678,
                        apiVersion: 'v1',
                        test: false,
                        practiceAccount: false,
                        seedToken: 'MOCK',
                        keyDir: './keys/MOCKdir',
                    })];
                case 1:
                    credentials = _a.sent();
                    // console.log(credentials);
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to recive a keyfile', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials({
                        account: 12345678,
                        apiVersion: 'v1',
                        test: false,
                        practiceAccount: false,
                        seedToken: 'MOCK',
                        keyFile: 'MOCKfile',
                    })];
                case 1:
                    credentials = _a.sent();
                    // console.log(credentials);
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to recive an empty string', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var canReciveEmptyString, credentials, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    credentials = credentialsFactory_1._emptyCredentials();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    canReciveEmptyString = true;
                    return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials('')];
                case 2:
                    credentials = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.error(e_1.message);
                    canReciveEmptyString = false;
                    return [3 /*break*/, 4];
                case 4:
                    expect(canReciveEmptyString).toBe(false);
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to recive an empty account number', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var credentials;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials({
                        account: '',
                        apiVersion: 'v1',
                        test: false,
                        practiceAccount: false,
                        seedToken: 'MOCK',
                        keyFile: 'MOCKfile',
                    })];
                case 1:
                    credentials = _a.sent();
                    // console.log(credentials);
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
                case 0: return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials('./keys/MOCK')];
                case 1:
                    credentials = _a.sent();
                    // console.log(credentials);
                    utils_1.void0(credentials);
                    done();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=_axiosCredentials_oAUTH.spec.js.map