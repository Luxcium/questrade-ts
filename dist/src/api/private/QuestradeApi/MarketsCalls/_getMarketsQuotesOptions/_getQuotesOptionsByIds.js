"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const _getMarketsQuotesOptions_1 = require("./_getMarketsQuotesOptions");
exports._getQuotesOptionsByIds = (_axios = axios_1.default) => (credentials) => async (optionIds) => _getMarketsQuotesOptions_1._getMarketsQuotesOptions(_axios)(credentials)(optionIds, void 0, void 0, null, 0, 0);
//# sourceMappingURL=_getQuotesOptionsByIds.js.map