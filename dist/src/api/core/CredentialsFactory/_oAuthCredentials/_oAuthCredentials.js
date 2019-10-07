"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const _credentialsFactory_1 = require("../_credentialsFactory");
exports._oAuthCredentials = (_axios = axios_1.default) => async (token) => {
    const { refreshToken, credentials } = _credentialsFactory_1.validateToken(token);
    const axiosConfig = {
        url: `${credentials.authUrl}/oauth2/token`,
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        },
    };
    utils_1.void0(_axios);
    const response = await _axios(axiosConfig);
    if (!response.data) {
        throw new Error('!! validate credntials Invalid data back from axios client');
    }
    return _credentialsFactory_1.writeToken(credentials, response);
};
//# sourceMappingURL=_oAuthCredentials.js.map