"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var fs_1 = require("fs");
var path_1 = require("path");
var _1 = require(".");
var utils_1 = require("../utils");
var _getServerTime = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, _1._axiosGetApi(credentials)('/time')()];
}); }); }; };
var _getAccounts = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
    return [2, _1._axiosGetApi(credentials)('/accounts')()];
}); }); }; };
exports._credentialsFactory = function (token) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var credentials, allAccounts, serverTimeNow, accounts, time, timZoneOffset, timZone, serverTime, expireAt, error_1;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (token.length === 4) {
                }
                return [4, _oAuthCredentials(token)];
            case 1:
                credentials = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, 5, , 6]);
                allAccounts = _getAccounts(credentials);
                serverTimeNow = _getServerTime(credentials);
                return [4, allAccounts()];
            case 3:
                accounts = (_a.sent()).accounts;
                return [4, serverTimeNow()];
            case 4:
                time = (_a.sent()).time;
                timZoneOffset = new Date(time).getTimezoneOffset();
                timZone = -1 * 60 * 1000 * timZoneOffset;
                serverTime = new Date(time).getTime();
                expireAt = serverTime + credentials.expiresIn * 1000;
                credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
                credentials.tokenExpiration = new Date(timZone + expireAt);
                credentials.expiresAtRaw = expireAt;
                credentials.serverTime = new Date(timZone + serverTime);
                credentials.serverTimeRaw = serverTime;
                credentials.accountNumber = exports._getPrimaryAccountNumber(accounts);
                console.info('Questrade Server Time:', time, '\nStatus: ready\n');
                return [3, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1.message);
                throw new Error('_oAuth Error getting credentials');
            case 6: return [2, credentials];
        }
    });
}); };
var _oAuthCredentials = function (token) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, refreshToken, credentials, axiosConfig, response;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = validateToken(token), refreshToken = _a.refreshToken, credentials = _a.credentials;
                axiosConfig = {
                    url: credentials.authUrl + "/oauth2/token",
                    params: {
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    },
                };
                return [4, axios_1.default(axiosConfig)];
            case 1:
                response = _b.sent();
                if (!response.data) {
                    throw new Error('!! validate credntials Invalid data back from axios client');
                }
                return [2, writeToken(credentials, response)];
        }
    });
}); };
var writeToken = function (credentials, response) {
    var refreshCreds = response.data;
    credentials.accessToken = refreshCreds.access_token;
    credentials.apiServer = refreshCreds.api_server;
    credentials.expiresIn = refreshCreds.expires_in;
    credentials.refreshToken = refreshCreds.refresh_token;
    credentials.tokenType = refreshCreds.token_type;
    credentials.apiUrl = "" + credentials.apiServer + credentials.apiVersion;
    fs_1.writeFileSync(credentials.keyFile, credentials.refreshToken, 'utf8');
    return credentials;
};
var validateToken = function (options) {
    var credentials = buildCredentialsFromToken(options);
    var refreshToken = credentials.seedToken || '';
    try {
        if (!!credentials.keyFile) {
            utils_1.sync(path_1.dirname(credentials.keyFile));
        }
        else {
            utils_1.sync(credentials.keyDir);
        }
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        refreshToken = fs_1.readFileSync(credentials.keyFile, 'utf8');
    }
    catch (_) {
        credentials.keyFile =
            credentials.keyFile || credentials.keyDir + "/" + credentials.seedToken;
        fs_1.access(credentials.keyFile, fs_1.constants.F_OK, function (none) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (none) {
                    fs_1.writeFileSync(credentials.keyFile, credentials.seedToken, {
                        encoding: 'utf8',
                    });
                }
                return [2];
            });
        }); });
    }
    return { refreshToken: refreshToken, credentials: credentials };
};
var buildCredentialsFromToken = function (token) {
    var credentials = emptyCredentials();
    if (typeof token === 'undefined' || !token) {
        throw new Error('questrade_missing_api_key or options');
    }
    if (typeof token === 'string' && token.indexOf('/') !== -1) {
        credentials.keyFile = token;
    }
    if (typeof token === 'string' && token.indexOf('/') === -1) {
        credentials.seedToken = token;
    }
    if (typeof token === 'object') {
        credentials.practice = !!token.practiceAccount;
        credentials.keyDir = token.keyDir || './keys';
        credentials.apiVersion = token.apiVersion || 'v1';
        credentials.keyFile = token.keyFile || '';
        credentials.seedToken = token.seedToken || '';
        credentials.accountNumber = "" + token.account || '';
    }
    credentials.authUrl = credentials.practice
        ? 'https://practicelogin.q.com'
        : 'https://login.questrade.com';
    return credentials;
};
var emptyCredentials = function () {
    var credentials = exports._defaultCredentials;
    credentials.accountNumber = '';
    credentials.apiVersion = 'v1';
    credentials.keyDir = './keys';
    credentials.keyFile = '';
    credentials.practice = false;
    credentials.seedToken = '';
    credentials.expiresIn = 0;
    credentials.tokenType = '';
    credentials.refreshToken = '';
    credentials.accessToken = '';
    credentials.apiUrl = '';
    credentials.apiServer = '';
    return credentials;
};
exports._getPrimaryAccountNumber = function (accounts) {
    if (accounts.length < 1) {
        throw new Error('No account number found');
    }
    if (accounts.length === 1) {
        return accounts[0].number;
    }
    var primary = accounts.filter(function (account) { return account.isPrimary; });
    if (primary.length > 0) {
        return primary[0].number;
    }
    return accounts[0].number;
};
exports._defaultCredentials = {
    accessToken: '',
    accountNumber: '',
    apiServer: '',
    apiUrl: '',
    apiVersion: 'v1',
    authUrl: '',
    expiresAt: undefined,
    tokenExpiration: undefined,
    expiresIn: 0,
    keyDir: './keys',
    keyFile: '',
    practice: false,
    refreshToken: '',
    seedToken: '',
    serverTime: undefined,
    tokenType: '',
    toValue: function () {
        return tslib_1.__assign(tslib_1.__assign({}, this), { accessToken: '[string:PRIVATE]', keyFile: './keys/[PRIVATE]', refreshToken: '[string:PRIVATE]', seedToken: '[string:PRIVATE]' }).toString();
    },
    toString: function () {
        return tslib_1.__assign(tslib_1.__assign({}, this), { accessToken: ' [ PRIVATE ] ', keyFile: './keys/[ PRIVATE ] ', refreshToken: ' [ PRIVATE ] ', seedToken: ' [ PRIVATE ] ' }).toString();
    },
};
//# sourceMappingURL=_credentialsFactory.js.map