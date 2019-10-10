"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const _coreApiConfig_1 = require("./_coreApiConfig");
const _tryToGetData_1 = require("./_tryToGetData");
exports._coreApiFunction = (_axios = axios_1.default) => {
    //
    utils_1.void0(_axios);
    return (credentials) => {
        //
        return (VERB = 'GET') => {
            //
            return (postData = null) => {
                //
                return (endpoint) => {
                    //
                    return async () => {
                        //
                        return _tryToGetData_1._tryToGetData(
                        //
                        _coreApiConfig_1._coreApiConfig(credentials, VERB, endpoint, postData));
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=_coreApiFunction.js.map