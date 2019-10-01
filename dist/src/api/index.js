"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("./core");
function tokenConnection(refreshToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var credentials, questrade;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, core_1._credentialsFactory(refreshToken)];
                case 1:
                    credentials = _a.sent();
                    questrade = core_1._getDataFromApi(credentials);
                    return [2, { qt: questrade, questrade: questrade, credentials: credentials }];
            }
        });
    });
}
exports.tokenConnection = tokenConnection;
var utils_1 = require("./utils");
exports.id0 = utils_1.id0;
exports.log = utils_1.log;
//# sourceMappingURL=index.js.map