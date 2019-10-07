"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../..");
const _oAuthCredentials_1 = require("../_oAuthCredentials");
const _getServerTime = (_axios = axios_1.default) => (credentials) => async () => __1._axiosGetApi(_axios)(credentials)('/time')();
const _getAccounts = (_axios = axios_1.default) => (credentials) => async () => __1._axiosGetApi(_axios)(credentials)('/accounts')();
exports._credentialsFactory = (_axios = axios_1.default) => async (token) => {
    if (token.length === 4) {
    }
    const credentials = await _oAuthCredentials_1._oAuthCredentials()(token);
    try {
        const allAccounts = _getAccounts(_axios)(credentials);
        const serverTimeNow = _getServerTime(_axios)(credentials);
        const { accounts } = await allAccounts();
        const { time } = await serverTimeNow();
        const timZoneOffset = new Date(time).getTimezoneOffset();
        const timZone = -1 * 60 * 1000 * timZoneOffset;
        const serverTime = new Date(time).getTime();
        const expireAt = serverTime + credentials.expiresIn * 1000;
        credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
        credentials.tokenExpiration = new Date(timZone + expireAt);
        credentials.expiresAtRaw = expireAt;
        credentials.serverTime = new Date(timZone + serverTime);
        credentials.serverTimeRaw = serverTime;
        credentials.accountNumber = exports._getPrimaryAccountNumber(accounts);
        console.info('Questrade Server Time:', time, '\nStatus: ready\n');
    }
    catch (error) {
        console.log(error.message);
        throw new Error('_oAuth Error getting credentials');
    }
    return credentials;
};
exports._getPrimaryAccountNumber = (accounts) => {
    if (accounts.length < 1) {
        throw new Error('No account number found');
    }
    if (accounts.length === 1) {
        return accounts[0].number;
    }
    const primary = accounts.filter(account => account.isPrimary);
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
    toValue() {
        return {
            ...this,
            accessToken: '[string:PRIVATE]',
            keyFile: './keys/[PRIVATE]',
            refreshToken: '[string:PRIVATE]',
            seedToken: '[string:PRIVATE]',
        }.toString();
    },
    toString() {
        return {
            ...this,
            accessToken: ' [ PRIVATE ] ',
            keyFile: './keys/[ PRIVATE ] ',
            refreshToken: ' [ PRIVATE ] ',
            seedToken: ' [ PRIVATE ] ',
        }.toString();
    },
};
//# sourceMappingURL=_credentialsFactory.js.map