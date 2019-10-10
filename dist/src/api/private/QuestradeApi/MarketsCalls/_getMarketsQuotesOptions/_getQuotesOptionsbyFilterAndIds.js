"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("..");
exports._getQuotesOptionsbyFilterAndIds = (_axios = axios_1.default) => (credentials) => {
    const quotesOptionsFilter = __1._getQuotesOptionsFilter(_axios)(credentials);
    quotesOptionsFilter.byIds = __1._getQuotesOptionsByIds(_axios)(credentials);
    return quotesOptionsFilter;
};
//# sourceMappingURL=_getQuotesOptionsbyFilterAndIds.js.map