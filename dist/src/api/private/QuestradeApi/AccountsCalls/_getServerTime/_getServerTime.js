"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getServerTime
/** _getTime */
exports._getServerTime = (_axios = axios_1.default) => (credentials) => async () => new Date((await AxiosRequestApiFactory_1._axiosGetApi(_axios)(credentials)('/time')()).time);
/*
  import { AxiosStatic, default as axios } from 'axios';
export const axiosStatic = (_axios: AxiosStatic = axios)=>_axios
  */
//# sourceMappingURL=_getServerTime.js.map