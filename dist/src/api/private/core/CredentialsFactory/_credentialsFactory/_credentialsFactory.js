"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AccountsCalls_1 = require("../../../QuestradeApi/AccountsCalls");
const _oAuthCredentials_1 = require("../_oAuthCredentials");
const _getPrimaryAccountNumber_1 = require("./_getPrimaryAccountNumber");
// const _getServerTime = (_axios: AxiosStatic = axios) => (
//   credentials: Credentials
// ) => async () => _axiosGetApi(_axios)(credentials)<ITime>('/time')();
// const _getAccounts = (_axios: AxiosStatic = axios) => (
//   credentials: Credentials
// ) => async () => _axiosGetApi(_axios)(credentials)<IAccounts>('/accounts')();
// # _credentialsFactory
/** Provide: a token string THEN GET: a 'Promise<Credentials>' */
exports._credentialsFactory = (_axios = axios_1.default) => async (token) => {
    if (!token)
        throw new Error('Missing Token');
    const mock = token.length === 8 ? true : false;
    const credentials = await _oAuthCredentials_1._oAuthCredentials(_axios)(token);
    try {
        const accounts = await AccountsCalls_1._getAccounts(_axios)(credentials)();
        const time = await AccountsCalls_1._getServerTime(_axios)(credentials)();
        const timZoneOffset = new Date(time).getTimezoneOffset();
        const timZone = -1 * 60 * 1000 * timZoneOffset;
        const serverTime = new Date(time).getTime();
        const expireAt = serverTime + credentials.expiresIn * 1000;
        credentials.expiresAt = new Date(expireAt).toLocaleTimeString();
        credentials.tokenExpiration = new Date(timZone + expireAt);
        credentials.expiresAtRaw = expireAt;
        credentials.serverTime = new Date(timZone + serverTime);
        credentials.serverTimeRaw = serverTime;
        credentials.accountNumber = _getPrimaryAccountNumber_1._getPrimaryAccountNumber(accounts);
        if (credentials.accountNumber === '00000000' && mock) {
            console.info('🤡 🧐  LOCAL Time:', new Date().toISOString(), '\n 🍦 🤨  Status: !!!!00000000!!!!  \n');
        }
        else {
            if (credentials.accountNumber === '00000000') {
                throw Error("Account should not be '00000000'");
            }
            console.info('Questrade Server Time:', time, '\nStatus: ready\n');
        }
    }
    catch (error) {
        console.log(error.message);
        console.info(credentials);
        throw new Error('_oAuth Error getting credentials');
    }
    return credentials;
};
//# sourceMappingURL=_credentialsFactory.js.map