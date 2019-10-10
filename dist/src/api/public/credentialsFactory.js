"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const private_1 = require("../private");
const questradeAPI_1 = require("./questradeAPI");
exports.redeemToken = (_axios = axios_1.default) => async (refreshToken) => {
    const credentials = await private_1._credentialsFactory(_axios)(refreshToken);
    const questrade = await questradeAPI_1.questradeApi(credentials);
    const qtApi = questrade;
    return { qtApi, credentials };
};
//# sourceMappingURL=credentialsFactory.js.map