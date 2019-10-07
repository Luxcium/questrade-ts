"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
const utils_1 = require("../../../../../utils");
exports._getOrders = (_axios = axios_1.default) => (credentials) => (stateFilter = 'All') => (startDate) => async (endDate) => {
    return (await __1._axiosAccountGetApi(_axios)(credentials)(`/orders?${utils_1.endpointFormatDateTool(startDate, endDate)}stateFilter=${stateFilter}`)()).orders;
};
//# sourceMappingURL=_getOrders.js.map