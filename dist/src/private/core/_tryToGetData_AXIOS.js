"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var requestPerSecondLimit_1 = require("./requestPerSecondLimit");
exports._tryToGetData = function (_config, credentials) {
    return function (_logError) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var possiblePerSeconds, response, requestLimiter, data, error_1;
        var _a, _b;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 5, , 6]);
                    possiblePerSeconds = !!credentials &&
                        !!credentials.remainingRequests &&
                        !!credentials.remainingRequests.possiblePerSeconds
                        ? credentials.remainingRequests.possiblePerSeconds
                        : 19;
                    response = void 0;
                    if (!(possiblePerSeconds <= 18)) return [3 /*break*/, 2];
                    requestLimiter = requestPerSecondLimit_1.requestPerSecondLimiter(possiblePerSeconds);
                    return [4 /*yield*/, requestLimiter(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                            return [2 /*return*/, axios_1.default(_config)];
                        }); }); })];
                case 1:
                    response = _c.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, axios_1.default(_config)];
                case 3:
                    response = _c.sent();
                    _c.label = 4;
                case 4:
                    if (response.status !== 200) {
                        console.log('________________________________________________');
                        console.log(response.status, response.statusText);
                        console.log(response.data);
                        console.table(response.headers);
                        console.log(requestPerSecondLimit_1.remaningTimeString(((_b = (_a = credentials) === null || _a === void 0 ? void 0 : _a.remainingRequests) === null || _b === void 0 ? void 0 : _b.secondsRemaning) ? credentials.remainingRequests.secondsRemaning
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
                    error_1 = _c.sent();
                    console.error(_logError(error_1).message);
                    throw error_1;
                case 6: return [2 /*return*/];
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