"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function void0() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    return void 0 && param;
}
exports.void0 = void0;
function id0(funct) {
    var message = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        message[_i - 1] = arguments[_i];
    }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            console.log.apply(console, message);
            try {
                return [2, funct()];
            }
            catch (error) {
                console.error(error.message);
            }
            return [2];
        });
    });
}
exports.id0 = id0;
//# sourceMappingURL=id0.js.map