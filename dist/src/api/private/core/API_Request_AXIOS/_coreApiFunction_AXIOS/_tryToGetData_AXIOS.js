"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
exports._tryToGetData = function (_config) {
    return function (_logError) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var res, data, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default(_config)];
                case 1:
                    res = _a.sent();
                    data = res.data;
                    if (!data) {
                        throw _logError(new Error("Can't retrive data from call to API"));
                    }
                    // console.log(JSON.stringify(data));
                    // console.log(data);
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _a.sent();
                    throw _logError(error_1);
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
//# sourceMappingURL=_tryToGetData_AXIOS.js.map