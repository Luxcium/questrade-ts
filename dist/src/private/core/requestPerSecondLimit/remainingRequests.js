"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remainingRequests = function (response, maximumperseconds) {
    if (maximumperseconds === void 0) { maximumperseconds = 19; }
    var remainingStr = response.headers['x-ratelimit-remaining'];
    var timeUntilResetStr = response.headers['x-ratelimit-reset'];
    var requestsRemaining = parseInt(remainingStr, 10);
    var timeUntilReset = parseInt(timeUntilResetStr, 10);
    var timeNow = Math.floor(new Date().getTime() / 1000) + 1;
    var timeThen = Math.floor(timeUntilReset);
    var secondsRemaning = timeUntilReset - timeNow;
    var possiblePerSeconds = Math.floor(Math.min(requestsRemaining / secondsRemaning, maximumperseconds));
    var maximums = [
        requestsRemaining,
        possiblePerSeconds,
        maximumperseconds,
    ];
    return {
        timeNow: timeNow,
        timeThen: timeThen,
        secondsRemaning: secondsRemaning,
        maximumperseconds: maximumperseconds,
        possiblePerSeconds: possiblePerSeconds,
        requestsRemaining: requestsRemaining,
        maximums: maximums,
    };
};
//# sourceMappingURL=remainingRequests.js.map