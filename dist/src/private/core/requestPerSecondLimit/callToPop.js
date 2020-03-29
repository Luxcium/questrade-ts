"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utils_1 = require("../../../utils");
// tslint:disable: prefer-array-literal
// create the function required to have a request limiter
// set the initial state
function myRequestLimiterFactory() {
    var _this = this;
    var isRequested = false;
    var hertz = 1;
    // the request limiter function  itself
    var queueLimiter = function (fn) {
        var queueList = [];
        var shiftOutFromQueue = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var nextToExecute, _a, myfn, mycb;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                if (queueList.length >= 1 && !isRequested) {
                    isRequested = true;
                    nextToExecute = shiftQueue(queueList);
                    if (nextToExecute !== undefined) {
                        _a = tslib_1.__read(nextToExecute, 2), myfn = _a[0], mycb = _a[1];
                        mycb(null, myfn());
                    }
                    setTimeout(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    isRequested = false;
                                    return [4 /*yield*/, shiftOutFromQueue()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, utils_1.perSeconds(hertz));
                }
                return [2 /*return*/, void 0];
            });
        }); };
        // when isRequested = true or if queue is empty
        return function pushInToQueue(cb) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    queueList.push([fn, cb]);
                    return [2 /*return*/, shiftOutFromQueue()];
                });
            });
        };
    };
    return queueLimiter;
}
exports.myRequestLimiterFactory = myRequestLimiterFactory;
var shiftQueue = function (queueList) {
    return queueList.shift();
};
//
//
// const hertz: number = 1;
// let isCalled = false;
// const callsQueue: Array<[Function, CallBack]> = [];
// export function requestLimiterFactory() {
//   let isCalled = false;
//   const callsQueue: Array<[Function, CallBack]> = [];
//   return function requestLimiter(fn: Function, hertz: number = 1) {
//     return addToQueue(callsQueue)(callToPop)(fn);
//   };
// }
// const callToPop = () => ({ isCalled }: { isCalled: boolean }) => async () => {
//   if (callsQueue.length >= 1 && !isCalled) {
//     isCalled = true;
//     setTimeout(async function() {
//       isCalled = false;
//       await callToPop();
//     }, perSeconds(hertz));
//     const poped = callsQueue.pop();
//     const [myfn, mycb] = !!poped ? poped : neverWillBe;
//     mycb(null, myfn());
//   }
// };
// const addToQueue = (callsQueue: Array<[Function, CallBack]>) => (
//   callToPop: () => Promise<void>
// ) => (fn: Function) => async (cb: CallBack) => {
//   callsQueue.unshift([fn, cb]);
//   await callToPop();
// };
// const neverWillCb = async () => {
//   void0();
//   throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// const neverCb = (error: Error | null, returnValue: any) => {
//   void0({ returnValue, error });
//   throw new Error(
//     'NEVER: lenght is validated prior to pop this should never occur'
//   );
// };
// const neverWillBe = [neverWillCb, neverCb];
// void0(void0);
//# sourceMappingURL=callToPop.js.map