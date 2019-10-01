"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function timeUtil() {
}
exports.timeUtil = timeUtil;
var startDate = '2019-08-25';
var endDate = '2019-09-14T00:00:00.000000-05:00';
var now = Date.now;
exports.dates = [
    startDate,
    new Date(now()).toISOString(),
    new Date(now()).toUTCString(),
    new Date(now()).toString(),
    new Date(now()).toLocaleString(),
    new Date(now()).toJSON(),
    new Date(startDate).toISOString(),
    new Date(startDate).toUTCString(),
    new Date(endDate).toString(),
    new Date(startDate).toLocaleString(),
    new Date(startDate).toJSON(),
];
var offset = 9;
startDate = "2019-" + offset + "-13";
endDate = "2019-" + offset + "-14";
exports.endpointFormatDateTool = function (startTime, endTime) {
    return "startTime=" + exports.dateToString(startTime) + "&endTime=" + exports.dateToString(endTime) + "&";
};
exports.dateISOStringNow = function () { return new Date(Date.now()).toISOString(); };
exports.dateNumericNow = function () { return new Date(Date.now()).getTime(); };
exports.dateToString = function (dateTime) {
    return new Date(dateTime).toISOString();
};
exports.dateToNumeric = function (dateTime) {
    return new Date(dateTime).getTime();
};
exports.rangeTool = function (startTime) { return function (endTime) { return function (numberOfDays) {
    var days = !!numberOfDays ? numberOfDays : 0;
    var endValue = !endTime ? exports.dateNumericNow() : exports.dateToNumeric(endTime);
    var startValue = !startTime ? exports.dateNumericNow() : exports.dateToNumeric(startTime);
    return [exports.dateToString(endValue), exports.dateToString(startValue + exports.day(days))];
}; }; };
var naiveCalculate = function (SECOND) {
    if (SECOND === void 0) { SECOND = 1000; }
    var DAY = 24 * 60 * 60 * SECOND;
    return {
        SECOND: SECOND,
        HOUR: 60 * 60 * SECOND,
        MINUTE: 60 * SECOND,
        DAY: DAY,
        WEEK5: 5 * DAY,
        WEEK7: 7 * DAY,
        MONTH: 31 * DAY,
        MONTH28: 28 * DAY,
        MONTH29: 29 * DAY,
        MONTH30: 30 * DAY,
        YEAR: 365 * DAY,
        YEAR366: 366 * DAY,
        yWEEKS: 52,
        yMONTHS: 12,
    };
};
exports.naive = {
    inSec: naiveCalculate(1),
    inMiliSec: naiveCalculate(1000),
};
exports.day = function (days) { return days * exports.naive.inMiliSec.DAY; };
//# sourceMappingURL=timeutil.js.map