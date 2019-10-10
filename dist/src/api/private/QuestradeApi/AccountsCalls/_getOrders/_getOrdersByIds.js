"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getOrderByIds
/** _getOrders */
exports._getOrdersByIds = (_axios = axios_1.default) => (credentials) => async (orderId) => {
    //
    return (await AxiosRequestApiFactory_1._axiosAccountGetApi(_axios)(credentials)(`/orders?ids=${orderId.join(',')}`)()).orders;
};
//# sourceMappingURL=_getOrdersByIds.js.map