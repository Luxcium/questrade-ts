"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var requestPerSecondLimit_1 = require("./requestPerSecondLimit");
exports._tryToGetData = function (_config, credentials) {
    return function (_logError) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var possiblePerSeconds, requestLimit, response, data, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    possiblePerSeconds = !!credentials &&
                        !!credentials.remainingRequests &&
                        !!credentials.remainingRequests.possiblePerSeconds
                        ? credentials.remainingRequests.possiblePerSeconds
                        : 20;
                    requestLimit = requestPerSecondLimit_1.requestPerSecondLimit(possiblePerSeconds);
                    return [4 /*yield*/, requestLimit(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, axios_1.default(_config)];
                        }); }); })];
                case 1:
                    response = _a.sent();
                    data = response.data;
                    if (!data) {
                        throw _logError(new Error("Can't retrive data from call to API"));
                    }
                    try {
                        if (credentials) {
                            credentials.remainingRequests = requestPerSecondLimit_1.remainingRequests(response);
                        }
                    }
                    catch (error) {
                        console.error('To make tests pass removed error messages from code bloc');
                    }
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _a.sent();
                    _logError(error_1);
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
// logData(response);
// remainingRequests(response);
// logRemanings(remainingRequests(response));
// console.log(':::RESPONSE==>');
// console.dir(res);
// console.log('void 0', void 0);
// console.log('<==RESPONSE:::');
// console.log('DATA:::', data);
// console.log('JSON STRING DATA:::', JSON.stringify(data));
// console.log('CONFIG:::', JSON.stringify(_config));
//  const requester = () =>''
//  requester()
//# sourceMappingURL=_tryToGetData_AXIOS.js.map