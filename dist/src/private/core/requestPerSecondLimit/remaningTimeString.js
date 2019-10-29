"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remaningTimeString = function (secsRemaning) {
    if (secsRemaning >= 60) {
        var minutes = (secsRemaning / 60).toFixed(0);
        var minutesString = minutes + "min";
        var seconds_1 = (((secsRemaning / 60) % 1) * 60).toFixed(0);
        var secondString_1 = seconds_1 + "sec";
        var timeLeft_1 = minutesString + " " + secondString_1;
        return timeLeft_1;
    }
    var seconds = (((secsRemaning / 60) % 1) * 60).toFixed(0);
    var secondString = seconds + "sec";
    var timeLeft = "" + secondString;
    return timeLeft;
};
//# sourceMappingURL=remaningTimeString.js.map