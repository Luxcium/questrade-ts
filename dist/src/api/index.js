"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const core_1 = require("./core");
exports._redeemToken = core_1._redeemToken;
const redeemToken = core_1._redeemToken(axios_1.default);
exports.redeemToken = redeemToken;
//# sourceMappingURL=index.js.map