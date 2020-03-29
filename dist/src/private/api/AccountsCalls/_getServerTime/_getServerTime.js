"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var routes_1 = require("../../../routes");
// + _getServerTime
/** _getTime */
exports._getServerTime = function (credentials) { return function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { var _a; return tslib_1.__generator(this, function (_b) {
    switch (_b.label) {
        case 0:
            _a = Date.bind;
            return [4 /*yield*/, routes_1._axiosGetApi(credentials)('/time')()];
        case 1: return [2 /*return*/, new (_a.apply(Date, [void 0, (_b.sent()).time]))()];
    }
}); }); }; };
//# sourceMappingURL=_getServerTime.js.map