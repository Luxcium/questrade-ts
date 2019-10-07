"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function _coreApiConfig(credentials, VERB, endpoint, postData) {
    const url = credentials.apiUrl + endpoint;
    const method = VERB.toLowerCase();
    const Authorization = `Bearer ${credentials.accessToken}`;
    const location = credentials.accountNumber;
    const data = postData;
    const headers = { Authorization, location };
    const config = { url, method, headers, data };
    return config;
}
exports._coreApiConfig = _coreApiConfig;
//# sourceMappingURL=_coreApiConfig.js.map