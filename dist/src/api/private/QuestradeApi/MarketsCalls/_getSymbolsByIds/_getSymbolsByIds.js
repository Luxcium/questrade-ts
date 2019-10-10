"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getSymbolsByIDs
/** _getSymbolFromSymbolID */
exports._getSymbolsByIds = (_axios = axios_1.default) => (credentials) => async (stockId) => (await AxiosRequestApiFactory_1._axiosGetApi(_axios)(credentials)(`/symbols?ids=${stockId.join()}`)()).symbols;
//# sourceMappingURL=_getSymbolsByIds.js.map