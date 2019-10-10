"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _coreApiFunction_1 = require("../_coreApiFunction");
// # _axiosApiPost !!!
/** PROVIDE: credentials, postData with D data type and endpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosPostApi = (_axios = axios_1.default) => (credentials) => _coreApiFunction_1._coreApiFunction(_axios)(credentials)('POST');
//# sourceMappingURL=_axiosPostApi.js.map