"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _coreApiFunction_1 = require("../_coreApiFunction");
exports._axiosApiPost = (_axios = axios_1.default) => (credentials) => _coreApiFunction_1._coreApiFunction(_axios)(credentials)('POST');
//# sourceMappingURL=_axiosApiPost.js.map