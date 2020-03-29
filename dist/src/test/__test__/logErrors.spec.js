"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var _logErrors_1 = require("../../private/core/_logErrors");
test('should log error', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        _logErrors_1._logErrors(new Error('error testing'), undefined);
        _logErrors_1._logErrors(new Error('error testing'), 'message');
        done();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=logErrors.spec.js.map