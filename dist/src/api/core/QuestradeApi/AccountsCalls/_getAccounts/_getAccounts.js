"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const __1 = require("../../..");
function _getAccounts(_axios = axios_1.default) {
    return (credentials) => {
        return async () => {
            const getApi = __1._axiosGetApi(_axios);
            const getAccounts = getApi(credentials);
            const accounts = getAccounts('/accounts');
            const data = await accounts();
            return data.accounts;
        };
    };
}
exports._getAccounts = _getAccounts;
//# sourceMappingURL=_getAccounts.js.map