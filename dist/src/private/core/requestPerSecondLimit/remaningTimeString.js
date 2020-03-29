"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remaningTimeString = function (secsRemaning) {
    if (secsRemaning >= 60) {
        return (function () {
            var minutes = (secsRemaning / 60).toFixed(0);
            var minutesString = minutes + "min";
            var seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
            var secondString = seconds + "sec";
            var timeLeft = minutesString + " " + secondString;
            return timeLeft;
        })();
    }
    // to avoid shadowing
    return (function () {
        var seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
        var secondString = seconds + "sec";
        var timeLeft = "" + secondString;
        return timeLeft;
    })();
};
//# sourceMappingURL=remaningTimeString.js.map