"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getSymbolSearchAll = (_axios = axios_1.default) => (credentials) => async (prefix, offset = 0) => {
    const results = await __1._axiosGetApi(_axios)(credentials)(`/symbols/search?prefix=${prefix}&offset=${offset}`)();
    return results.symbols.map(result => {
        result.count = results.symbols.length;
        return result;
    });
};
//# sourceMappingURL=_getSymbolSearchAll.js.map