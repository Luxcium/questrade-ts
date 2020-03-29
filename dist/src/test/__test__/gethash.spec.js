"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../utils");
test('should test getHash', function (done) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        utils_1.getHash('data', 'sha1', 5);
        utils_1.getHash('data');
        done();
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=gethash.spec.js.map