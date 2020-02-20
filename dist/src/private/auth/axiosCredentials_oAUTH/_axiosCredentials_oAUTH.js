"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var _validateToken_1 = require("./_validateToken");
var _writeToken_1 = require("./_writeToken");
exports._oAuthAxiosCredentials = function (options) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, refreshToken, credentials, axiosConfig, response;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = _validateToken_1._validateToken(options), refreshToken = _a.refreshToken, credentials = _a.credentials;
                axiosConfig = {
                    url: credentials.authUrl + "/oauth2/token",
                    params: {
                        grant_type: 'refresh_token',
                        refresh_token: refreshToken,
                    },
                };
                return [4 /*yield*/, axios_1.default(axiosConfig)];
            case 1:
                response = (_b.sent());
                if (!response.data) {
                    if (response) {
                        console.log('________________________________________________');
                        console.log(response.status, response.statusText);
                        console.log(response.headers);
                        console.log(response.request);
                        console.log(response.status, response.statusText);
                        console.log('________________________________________________');
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
                    }
                    throw new Error('!! validate credntials Invalid data back from axios client');
                }
                return [2 /*return*/, _writeToken_1._writeToken(credentials, response)];
        }
    });
}); };
//# sourceMappingURL=_axiosCredentials_oAUTH.js.map