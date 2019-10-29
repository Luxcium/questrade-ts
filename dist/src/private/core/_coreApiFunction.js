"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var requestPerSecondLimit_1 = require("./requestPerSecondLimit");
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
                    var configBuilder, getEndPoint, endPoint, getDataConfig, axiosDataGetter, response, _a, _b;
                    return tslib_1.__generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                configBuilder = _coreApiConfig_1._coreApiConfig(credentials);
                                getEndPoint = configBuilder(VERB);
                                endPoint = getEndPoint(endpoint);
                                getDataConfig = endPoint(postData);
                                axiosDataGetter = _tryToGetData_AXIOS_1._tryToGetData(getDataConfig, credentials);
                                response = axiosDataGetter(_logErrors_1._logErrors);
                                //
                                _a = credentials;
                                _b = requestPerSecondLimit_1.remainingRequests;
                                return [4 /*yield*/, response];
                            case 1:
                                //
                                _a.remainingRequests = _b.apply(void 0, [_c.sent()]);
                                return [4 /*yield*/, response];
                            case 2: 
                            //
                            return [2 /*return*/, (_c.sent()).data]; // from _tryToGetData...
                        }
                    });
                }); };
            };
        };
    };
};
//# sourceMappingURL=_coreApiFunction.js.map