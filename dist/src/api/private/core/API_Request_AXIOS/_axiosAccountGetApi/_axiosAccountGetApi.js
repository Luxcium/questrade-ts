"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _coreApiFunction_AXIOS_1 = require("../_coreApiFunction_AXIOS");
var _endpointFormatAccount_1 = require("../_endpointFormatAccount");
// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosAccountGetApi = function (credentials) { return function (accountEndpoint) {
    return _coreApiFunction_AXIOS_1._coreApiFunction(credentials)('GET')(null)(_endpointFormatAccount_1._endpointFormatAccount(credentials)(accountEndpoint));
}; };
//# sourceMappingURL=_axiosAccountGetApi.js.map