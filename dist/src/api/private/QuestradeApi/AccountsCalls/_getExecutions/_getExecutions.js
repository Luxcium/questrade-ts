"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getExecutions
/** _getExecutions */
exports._getExecutions = (_axios = axios_1.default) => (credentials) => (startDate) => async (endDate) => {
    //
    return (await AxiosRequestApiFactory_1._axiosAccountGetApi(_axios)(credentials)(`/executions?${utils_1.endpointFormatDateTool(startDate, endDate)}`)()).executions;
};
//# sourceMappingURL=_getExecutions.js.map