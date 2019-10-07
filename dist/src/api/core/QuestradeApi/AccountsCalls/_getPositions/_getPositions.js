"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
exports._getPositions = (_axios = axios_1.default) => (credentials) => async () => {
    return (await __1._axiosAccountGetApi(_axios)(credentials)('/positions')()).positions;
};
//# sourceMappingURL=_getPositions.js.map