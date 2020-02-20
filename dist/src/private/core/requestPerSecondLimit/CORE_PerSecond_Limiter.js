"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../utils");
var lastCall = Date.now();
var lastDelay = function () { return Date.now() - lastCall; };
// const toMilihertz = (hz: number) => hz / 1000;
var resetLastCall = function () {
    lastCall = Date.now();
};
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        //
        // const now = Date.now();
        lastCall = Date.now();
        return [2 /*return*/, void 0];
    });
}); })().catch(function (error) { return console.log('error message:', error.message); });
function requestLimiterFactory() {
    var isCalled = false;
    var callsQueue = [];
    return function requestLimiter(fn, hertz) {
        if (hertz === void 0) { hertz = 1; }
        var callToPop = function () {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var poped, _a, myfn, mycb;
                return tslib_1.__generator(this, function (_b) {
                    if (callsQueue.length >= 1 && !isCalled) {
                        isCalled = true;
                        setTimeout(function () {
                            return tslib_1.__awaiter(this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            isCalled = false;
                                            return [4 /*yield*/, callToPop()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/, void 0];
                                    }
                                });
                            });
                        }, utils_1.perSeconds(hertz));
                        poped = callsQueue.pop();
                        _a = tslib_1.__read(!!poped ? poped : [neverWillCb, neverCb], 2), myfn = _a[0], mycb = _a[1];
                        while (lastDelay() < utils_1.perSeconds(hertz))
                            ;
                        {
                            // do nothing just wait while (lastDelay() < perSeconds(hertz));
                        }
                        mycb(null, myfn());
                        resetLastCall();
                        return [2 /*return*/, void 0];
                    }
                    return [2 /*return*/, void 0];
                });
            });
        };
        return function addToQueue(cb) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    callsQueue.unshift([fn, cb]);
                    callToPop();
                    return [2 /*return*/, void 0];
                });
            });
        };
    };
}
exports.myPromisify = function (addToQueue) {
    return new Promise(function (resolve, reject) {
        addToQueue(function (error, result) {
            if (!!error) {
                console.error(error);
                reject(error);
                return void 0;
            }
            resolve(result);
            return void 0;
        });
    });
};
function limitingRequest(limiterFactory) {
    var _this = this;
    var requestLimiter = limiterFactory();
    return function (hz) { return function (fn) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var addToQueue;
        return tslib_1.__generator(this, function (_a) {
            addToQueue = requestLimiter(fn, hz);
            return [2 /*return*/, exports.myPromisify(addToQueue)];
        });
    }); }; };
}
var neverWillCb = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        utils_1.void0();
        throw new Error('NEVER: lenght is validated prior to pop this should never occur');
    });
}); };
var neverCb = function (error, returnValue) {
    utils_1.void0({ returnValue: returnValue, error: error });
    throw new Error('NEVER: lenght is validated prior to pop this should never occur');
};
exports.requestPerSecondLimiter = limitingRequest(requestLimiterFactory);
//# sourceMappingURL=CORE_PerSecond_Limiter.js.map