"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var remaningTimeString_1 = require("./remaningTimeString");
exports.logRemanings = function (_a) {
    var timeNow = _a.timeNow, timeThen = _a.timeThen, secondsRemaning = _a.secondsRemaning, maximumperseconds = _a.maximumperseconds, possiblePerSeconds = _a.possiblePerSeconds, requestsRemaining = _a.requestsRemaining, maximums = _a.maximums;
    console.log();
    console.log('time remaning', remaningTimeString_1.remaningTimeString(secondsRemaning));
    console.log('time now', timeNow);
    console.log('time then', timeThen);
    console.log('time remaining until reset', secondsRemaning, '(sec)');
    console.log();
    console.log('requsts remaning', requestsRemaining);
    console.log();
    console.log('Requests per seconds possible', possiblePerSeconds);
    console.log('[maximum total in remaining period, maximum per second]', maximums, maximumperseconds);
};
//# sourceMappingURL=logRemanings.js.map