"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remainingRequests = function (response, maximumperseconds) {
    if (maximumperseconds === void 0) { maximumperseconds = 20; }
    var limitRemaining = parseInt(response.headers['x-ratelimit-remaining'], 2);
    var timeUntilReset = parseInt(response.headers['x-ratelimit-reset'], 2);
    var timeNow = Math.floor(new Date().getTime() / 1000) + 1;
    var timeThen = Math.floor(timeUntilReset);
    var secondsRemaning = timeUntilReset - timeNow;
    var possiblePerSeconds = Math.floor(Math.min(limitRemaining / secondsRemaning, maximumperseconds));
    var maximums = [
        limitRemaining,
        possiblePerSeconds,
        maximumperseconds,
    ];
    return {
        timeNow: timeNow,
        timeThen: timeThen,
        secondsRemaning: secondsRemaning,
        maximumperseconds: maximumperseconds,
        possiblePerSeconds: possiblePerSeconds,
        requestsRemaining: limitRemaining,
        maximums: maximums,
    };
};
//# sourceMappingURL=remainingRequests.js.map