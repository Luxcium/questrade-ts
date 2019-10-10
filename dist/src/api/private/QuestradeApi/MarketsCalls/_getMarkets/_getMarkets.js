"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getMarkets
/** _getMarkets */
exports._getMarkets = (_axios = axios_1.default) => (credentials) => async () => (await AxiosRequestApiFactory_1._axiosGetApi(_axios)(credentials)('/markets')()).markets;
//# sourceMappingURL=_getMarkets.js.map