"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _1 = require(".");
exports._quotesOptionsbyFilterAndIds = (_axios = axios_1.default) => (credentials) => {
    const quotesOptionsFilter = _1._getQuotesOptionsFilter(_axios)(credentials);
    quotesOptionsFilter.byIds = _1._getQuotesOptionsByIds(_axios)(credentials);
    return quotesOptionsFilter;
};
//# sourceMappingURL=_quotesOptionsbyFilterAndIds.js.map