"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("..");
const _coreApiFunction_1 = require("../_coreApiFunction");
exports._axiosAccountGetApi = (_axios = axios_1.default) => (credentials) => (accountEndpoint) => _coreApiFunction_1._coreApiFunction(_axios)(credentials)('GET')(null)(__1._endpointFormatAccount(credentials)(accountEndpoint));
//# sourceMappingURL=_axiosAccountGetApi.js.map