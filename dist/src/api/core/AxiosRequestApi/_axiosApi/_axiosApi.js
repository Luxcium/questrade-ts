"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
utils_1.void0((_axios = axios_1.default) => {
    return (credentials) => {
        return (postData = null, VERB = 'GET') => {
            return async (endpoint) => {
                const url = credentials.apiUrl + endpoint;
                const method = VERB.toLowerCase();
                const Authorization = `Bearer ${credentials.accessToken}`;
                const location = credentials.accountNumber;
                const data = postData;
                const headers = { Authorization, location };
                const config = { url, method, headers, data };
                try {
                    const response = (await _axios(config));
                    if (!response.data) {
                        throw utils_1.logError(new Error("Can't retrive data from call to API"));
                    }
                    return response.data;
                }
                catch (error) {
                    throw utils_1.logError(error);
                }
            };
        };
    };
});
//# sourceMappingURL=_axiosApi.js.map