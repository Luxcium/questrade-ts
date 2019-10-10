"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getBalances
/** _getBalances */
exports._getBalances = (_axios = axios_1.default) => {
    //
    return (credentials) => async () => {
        //
        return AxiosRequestApiFactory_1._axiosAccountGetApi(_axios)(credentials)('/balances')();
    };
};
//# sourceMappingURL=_getBalances.js.map