"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
var endpointFormatAccount_1 = require("./endpointFormatAccount");
// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosAccountGetApi = function (credentials) { return function (accountEndpoint) {
    return core_1._coreApiFunction(credentials)('GET')(null)(endpointFormatAccount_1._endpointFormatAccount(credentials)(accountEndpoint));
}; };
//# sourceMappingURL=_axiosAccountGetApi.js.map