"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
exports._emptyCredentials = () => {
    const credentials = _1._defaultCredentials;
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
//# sourceMappingURL=_emptyCredentials.js.map