"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _coreApiFunction_1 = require("../_coreApiFunction");
const _endpointFormatAccount_1 = require("../_endpointFormatAccount");
// # _axiosAccountApi
/** PROVIDE: credentials and accountEndpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosAccountGetApi = (_axios = axios_1.default) => (credentials) => (accountEndpoint) => _coreApiFunction_1._coreApiFunction(_axios)(credentials)('GET')(null)(_endpointFormatAccount_1._endpointFormatAccount(credentials)(accountEndpoint));
//# sourceMappingURL=_axiosAccountGetApi.js.map