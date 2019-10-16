"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var API_Request_AXIOS_1 = require("../../../core/API_Request_AXIOS");
// + _getServerTime
/** _getTime */
exports._getServerTime = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = Date.bind;
            return [4 /*yield*/, API_Request_AXIOS_1._axiosGetApi(credentials)('/time')()];
        case 1: return [2 /*return*/, new (_a.apply(Date, [void 0, (_b.sent()).time]))()];
    }
}); }); }; };
/*
  import { AxiosStatic, default as axios } from 'axios';
export const axiosStatic = (_axios: AxiosStatic = axios)=>_axios
  */
//# sourceMappingURL=_getServerTime.js.map