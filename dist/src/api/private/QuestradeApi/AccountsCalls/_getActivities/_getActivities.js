"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../../../../utils");
const AxiosRequestApiFactory_1 = require("../../../core/AxiosRequestApiFactory");
// + _getActivities
/** PROVIDE: credentials, startTime string and endTime string THEN GET: a 'Promise<IAccountActivity[]>' */
exports._getActivities = (_axios = axios_1.default) => {
    //
    return (credentials) => {
        //
        return (startTime) => {
            //
            return async (endTime) => {
                //
                const axiosAccountGetApi = AxiosRequestApiFactory_1._axiosAccountGetApi(_axios);
                const accountGetApi = axiosAccountGetApi(credentials);
                //
                const dateTime = utils_1.endpointFormatDateTool(startTime, endTime);
                const endpoint = `/activities?${dateTime}`;
                //
                const accountGet = accountGetApi(endpoint);
                const activities = await accountGet();
                //
                return activities.activities;
                //
            };
        };
    };
};
//# sourceMappingURL=_getActivities.js.map