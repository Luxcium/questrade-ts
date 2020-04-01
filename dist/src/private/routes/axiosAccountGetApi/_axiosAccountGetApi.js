"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
var endpointFormatAccount_1 = require("./endpointFormatAccount");
// # _axiosAccountApi
/**
 * YOU PROVIDE: credentials and accountEndpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
exports._axiosAccountGetApi = function (credentials) { return function (accountEndpoint) {
    return core_1._coreApiFunction(credentials)('GET')(null)(endpointFormatAccount_1._endpointFormatAccount(credentials)(accountEndpoint));
}; };
//# sourceMappingURL=_axiosAccountGetApi.js.map