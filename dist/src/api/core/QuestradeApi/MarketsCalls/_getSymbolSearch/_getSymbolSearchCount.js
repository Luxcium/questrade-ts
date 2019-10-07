"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getSymbolSearchCount = (_axios = axios_1.default) => (credentials) => async (prefix) => {
    return (await __1._axiosGetApi(_axios)(credentials)(`/symbols/search?prefix=${prefix}`)()).symbols.length;
};
//# sourceMappingURL=_getSymbolSearchCount.js.map