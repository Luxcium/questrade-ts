"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getOrders
/** _getOrders */
exports._getOrders = (_axios = axios_1.default) => (credentials) => (stateFilter = 'All') => (startDate) => async (endDate) => {
    return (await AxiosRequestApiFactory_1._axiosAccountGetApi(_axios)(credentials)(`/orders?${utils_1.endpointFormatDateTool(startDate, endDate)}stateFilter=${stateFilter}`)()).orders;
};
//# sourceMappingURL=_getOrders.js.map