"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("..");
const _getSymbolSearch_1 = require("./_getSymbolSearch");
exports._getSymbolSearchAndCount = (_axios = axios_1.default) => (credentials) => {
    const symbolSearch = _getSymbolSearch_1._getSymbolSearch(_axios)(credentials);
    symbolSearch.count = __1._getSymbolSearchCount(_axios)(credentials);
    return symbolSearch;
};
//# sourceMappingURL=_getSymbolSearchAndCount.js.map