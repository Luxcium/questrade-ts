"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _coreApiFunction_AXIOS_1 = require("../_coreApiFunction_AXIOS");
// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosPostApi = function (credentials) {
    return _coreApiFunction_AXIOS_1._coreApiFunction(credentials)('POST');
};
//# sourceMappingURL=_axiosPostApi.js.map