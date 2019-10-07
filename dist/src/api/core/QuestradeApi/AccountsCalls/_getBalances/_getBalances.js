"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getBalances = (_axios = axios_1.default) => {
    return (credentials) => async () => {
        return __1._axiosAccountGetApi(_axios)(credentials)('/balances')();
    };
};
//# sourceMappingURL=_getBalances.js.map