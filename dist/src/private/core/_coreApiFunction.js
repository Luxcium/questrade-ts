"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _coreApiConfig_1 = require("./_coreApiConfig");
var _logErrors_1 = require("./_logErrors");
var _tryToGetData_AXIOS_1 = require("./_tryToGetData_AXIOS");
exports._coreApiFunction = function (credentials) {
    //
    return function (VERB) {
        //
        return function (postData) {
            //
            return function (endpoint) {
                //
                return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
                    var configBuilder, getEndPoint, endPoint, getDataConfig, axiosDataGetter, data;
                    return tslib_1.__generator(this, function (_a) {
                        configBuilder = _coreApiConfig_1._coreApiConfig(credentials);
                        getEndPoint = configBuilder(VERB);
                        endPoint = getEndPoint(endpoint);
                        getDataConfig = endPoint(postData);
                        axiosDataGetter = _tryToGetData_AXIOS_1._tryToGetData(getDataConfig);
                        data = axiosDataGetter(_logErrors_1._logErrors);
                        return [2 /*return*/, data]; // from _tryToGetData...
                    });
                }); };
            };
        };
    };
};
//# sourceMappingURL=_coreApiFunction.js.map