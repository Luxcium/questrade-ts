"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var requestPerSecondLimit_1 = require("./requestPerSecondLimit");
exports._tryToGetData = function (_config, credentials) {
    return function (_logError) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var possiblePerSeconds, response, requestLimiter, data, error_1;
        var _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    possiblePerSeconds = !!credentials &&
                        !!credentials.remainingRequests &&
                        !!credentials.remainingRequests.possiblePerSeconds
                        ? credentials.remainingRequests.possiblePerSeconds
                        : 21;
                    response = void 0;
                    if (!(possiblePerSeconds <= 20)) return [3 /*break*/, 2];
                    requestLimiter = requestPerSecondLimit_1.requestPerSecondLimiter(possiblePerSeconds);
                    return [4 /*yield*/, requestLimiter(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, axios_1.default(_config)];
                        }); }); })];
                case 1:
                    response = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, axios_1.default(_config)];
                case 3:
                    response = _b.sent();
                    _b.label = 4;
                case 4:
                    if (response.status !== 200) {
                        console.log('________________________________________________');
                        console.log(response.status, response.statusText);
                        console.log(response.data);
                        console.table(response.headers);
                        console.log(requestPerSecondLimit_1.remaningTimeString(((_a = credentials === null || credentials === void 0 ? void 0 : credentials.remainingRequests) === null || _a === void 0 ? void 0 : _a.secondsRemaning) ? credentials.remainingRequests.secondsRemaning
                            : 0));
                        console.log(response.status, response.statusText);
                        console.log('________________________________________________');
                        console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
                    }
                    else {
                        // console.log(
                        //   remaningTimeString(
                        //     credentials?.remainingRequests?.secondsRemaning
                        //       /? credentials.remainingRequests.secondsRemaning
                        //       : 0
                        //   )
                        // );
                    }
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
                        console.error("To make tests pass removed 'throw' error messages from code bloc");
                    }
                    return [2 /*return*/, data];
                case 5:
                    error_1 = _b.sent();
                    console.error(_logError(error_1).message);
                    throw error_1;
                case 6: return [2 /*return*/];
            }
        });
    }); };
};
//# sourceMappingURL=_tryToGetData_AXIOS.js.map