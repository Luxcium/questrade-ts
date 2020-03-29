"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _logErrors_1 = require("../../private/core/_logErrors");
var _tryToGetData_AXIOS_1 = require("../../private/core/_tryToGetData_AXIOS");
test('should ERROR _tryToGetData', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var response, _a, _1;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                response = _tryToGetData_AXIOS_1._tryToGetData({
                    url: 'ERROR',
                    data: null,
                    method: 'get',
                    headers: { location: '1234567', Authorization: 'str' },
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                _a = expect;
                return [4 /*yield*/, response(_logErrors_1._logErrors)];
            case 2:
                _a.apply(void 0, [_b.sent()]).toThrow();
                return [3 /*break*/, 4];
            case 3:
                _1 = _b.sent();
                return [3 /*break*/, 4];
            case 4:
                // console.log();
                done();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL= tryToGetData_AXIOS.spec.js.map