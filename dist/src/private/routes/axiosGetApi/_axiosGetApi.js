"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
// # _axiosApiGet !!!
/** PROVIDE: credentials and endpoint string with R return type, THEN GET: a Promise<R> */
exports._axiosGetApi = function (credentials) {
    return core_1._coreApiFunction(credentials)('GET')(null);
};
//# sourceMappingURL=_axiosGetApi.js.map