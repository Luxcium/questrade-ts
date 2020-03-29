"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
// # _axiosApiPost !!!
/**
 * YOU PROVIDE: credentials, postData with D data type
 * and endpoint string with R return type,
 * THEN YOU GET: ( ) => Promise<R>
 */
exports._axiosPostApi = function (credentials) {
    return core_1._coreApiFunction(credentials)('POST');
};
//# sourceMappingURL=_axiosPostApi.js.map