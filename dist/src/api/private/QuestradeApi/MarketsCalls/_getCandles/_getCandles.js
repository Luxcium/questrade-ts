"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getCandles
/** _getCandles */
exports._getCandles = (_axios = axios_1.default) => (credentials) => (startDate) => (endDate) => (interval = 'OneDay') => async (symbolID) => (await AxiosRequestApiFactory_1._axiosGetApi(_axios)(credentials)(`/markets/candles/${symbolID}?startTime=${startDate}&endTime=${endDate}&interval=${interval}`)()).candles.map(result => {
    result.symbolID = symbolID;
    result.granularity = interval;
    const [short, long] = utils_1.getHash(JSON.stringify(result));
    result.hash = { short, long };
    return result;
});
//# sourceMappingURL=_getCandles.js.map