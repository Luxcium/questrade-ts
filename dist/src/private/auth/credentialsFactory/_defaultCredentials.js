"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
        return JSON.parse(JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, this), { accessToken: '[string:PRIVATE]', keyFile: './keys/[PRIVATE]', refreshToken: '[string:PRIVATE]', seedToken: '[string:PRIVATE]' })));
    },
    toString: function () {
        return JSON.stringify(tslib_1.__assign(tslib_1.__assign({}, this), { accessToken: ' [ PRIVATE ] ', keyFile: './keys/[ PRIVATE ] ', refreshToken: ' [ PRIVATE ] ', seedToken: ' [ PRIVATE ] ' }));
    },
};
//# sourceMappingURL=_defaultCredentials.js.map