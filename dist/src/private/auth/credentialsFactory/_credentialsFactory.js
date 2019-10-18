"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AccountsCalls_1 = require("../../api/AccountsCalls");
var axiosCredentials_oAUTH_1 = require("../axiosCredentials_oAUTH");
var _getPrimaryAccountNumber_1 = require("./_getPrimaryAccountNumber");
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
exports._credentialsFactory = function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var token, credentials, accounts, time, timZoneOffset, timZone, serverTime, expireAt, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                token = typeof options === 'string'
                    ? options
                    : options.seedToken
                        ? options.seedToken
                        : '';
                if (!token)
                    throw new Error('Missing Token');
                return [4 /*yield*/, axiosCredentials_oAUTH_1._oAuthAxiosCredentials(options)];
            case 1:
                credentials = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                return [4 /*yield*/, AccountsCalls_1._getAccounts(credentials)()];
            case 3:
                accounts = _a.sent();
                return [4 /*yield*/, AccountsCalls_1._getServerTime(credentials)()];
            case 4:
                time = _a.sent();
                timZoneOffset = new Date(time).getTimezoneOffset();
                timZone = -1 * 60 * 1000 * timZoneOffset;
                serverTime = new Date(time).getTime();
                expireAt = serverTime + credentials.expiresIn * 1000;
                credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
                credentials.tokenExpiration = new Date(timZone + expireAt);
                credentials.expiresAtRaw = expireAt;
                credentials.serverTime = new Date(timZone + serverTime);
                credentials.serverTimeRaw = serverTime;
                credentials.accountNumber = _getPrimaryAccountNumber_1._getPrimaryAccountNumber(accounts);
                if (credentials.accountNumber === '00000000') {
                    console.info('\n🧐\n🤡 MOCK Server Time:   ', new Date().toISOString(), '\n🍦 Status: MOCKING!!!\n🤨');
                }
                else {
                    console.info('Questrade Server Time:', time, '\nStatus: ready\n');
                }
                return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1.message);
                console.info(credentials);
                throw new Error('_oAuth Error getting credentials');
            case 6: return [2 /*return*/, credentials];
        }
    });
}); };
//# sourceMappingURL=_credentialsFactory.js.map