"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _1 = require("./");
exports._coreApiFunction = (_axios = axios_1.default) => {
    return (credentials) => {
        return (VERB = 'GET') => {
            return (postData = null) => {
                return (endpoint) => {
                    return async () => {
                        return _1._tryToGetData(_1._coreApiConfig(credentials, VERB, endpoint, postData));
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=_coreApiFunction.js.map