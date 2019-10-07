"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _1 = require(".");
exports._symbolSearchAndCount = (_axios = axios_1.default) => (credentials) => {
    const symbolSearch = _1._getSymbolSearch(_axios)(credentials);
    symbolSearch.count = _1._getSymbolSearchCount(_axios)(credentials);
    return symbolSearch;
};
//# sourceMappingURL=_symbolSearchAndCount.js.map