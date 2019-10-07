"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getQuotesByIds = (_axios = axios_1.default) => (credentials) => async (ids) => (await __1._axiosGetApi(_axios)(credentials)(`/markets/quotes?ids=${ids.join(',')}`)()).quotes;
//# sourceMappingURL=_getQuotesByIds.js.map