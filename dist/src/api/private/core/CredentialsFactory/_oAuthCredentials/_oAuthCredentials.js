"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _validateToken_1 = require("./_validateToken");
const _writeToken_1 = require("./_writeToken");
exports._oAuthCredentials = (_axios = axios_1.default) => async (token) => {
    const { refreshToken, credentials } = _validateToken_1._validateToken(token);
    const axiosConfig = {
        url: `${credentials.authUrl}/oauth2/token`,
        params: {
            grant_type: 'refresh_token',
            refresh_token: refreshToken,
        },
    };
    const response = await _axios(axiosConfig);
    if (!response.data) {
        throw new Error('!! validate credntials Invalid data back from axios client');
    }
    return _writeToken_1._writeToken(credentials, response);
};
//# sourceMappingURL=_oAuthCredentials.js.map