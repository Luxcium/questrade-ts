"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var questrade_api_enumerations_1 = require("questrade-api-enumerations");
exports.Enumerations = questrade_api_enumerations_1.qtEnumerations;
var core_1 = require("./core");
var utils_1 = require("./utils");
exports.id0 = utils_1.id0;
exports.log = utils_1.log;
exports.day = utils_1.day;
var testExamples_1 = require("./testExamples");
exports.testExamples = testExamples_1.testExamples;
function redeemToken(refreshToken) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var credentials, questrade;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, core_1._credentialsFactory(refreshToken)];
                case 1:
                    credentials = _a.sent();
                    questrade = core_1._getApi(credentials);
                    return [2, { qtApi: questrade, credentials: credentials }];
            }
        });
    });
}
exports.redeemToken = redeemToken;
//# sourceMappingURL=index.js.map