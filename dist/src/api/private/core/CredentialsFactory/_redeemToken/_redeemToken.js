"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils = tslib_1.__importStar(require("../../../../utils"));
const QuestradeApi_1 = require("../../../QuestradeApi");
const _credentialsFactory_1 = require("../_credentialsFactory");
exports._redeemToken = (_axios = axios_1.default) => async (refreshToken) => {
    const credentials = await _credentialsFactory_1._credentialsFactory(_axios)(refreshToken);
    const questrade = await QuestradeApi_1._getQuestradeApi(_axios)(credentials);
    const qtApi = questrade;
    return { qtApi, credentials, utils };
};
//# sourceMappingURL=_redeemToken.js.map