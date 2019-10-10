"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _getSymbolSearchAll_1 = require("./_getSymbolSearchAll");
// + _getSymbolSearch
/** _getSymbolSearch */
exports._getSymbolSearch = (_axios = axios_1.default) => (credentials) => async (prefix, offset = 0) => {
    const symbols = await _getSymbolSearchAll_1._getSymbolSearchAll(_axios)(credentials)(prefix, offset);
    const count = symbols.length;
    const result = symbols[0];
    result.count = count;
    return result;
};
//# sourceMappingURL=_getSymbolSearch.js.map