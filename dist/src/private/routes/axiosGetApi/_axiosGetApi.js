"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../../core");
// # _axiosApiGet !!!
/**
 * YOU PROVIDE: credentials and endpoint string with <R> return type,
 * THEN YOU GET: ( )=> Promise<R>
 */
exports._axiosGetApi = function (credentials) {
    return core_1._coreApiFunction(credentials)('GET')(null);
};
//# sourceMappingURL=_axiosGetApi.js.map