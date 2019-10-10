"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const _logErrors_1 = require("./_logErrors");
async function _tryToGetData(_config, _axios = axios_1.default, _logError = _logErrors_1._logErrors) {
    //
    try {
        utils_1.void0(_axios); // _tryToGetData
        const response = (await axios_1.default(_config));
        if (!response.data) {
            throw _logError(new Error("Can't retrive data from call to API"));
        }
        return response.data;
    }
    catch (error) {
        throw _logError(error);
    }
}
exports._tryToGetData = _tryToGetData;
//# sourceMappingURL=_tryToGetData.js.map