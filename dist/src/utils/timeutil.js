"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DAY = 24 * 60 * 60 * 1000;
exports.day = (days) => days * DAY;
exports.endpointFormatDateTool = (startTime, endTime) => {
    return `startTime=${exports.dateToString(startTime)}&endTime=${exports.dateToString(endTime)}&`;
};
exports.dateNowISO = () => new Date(Date.now()).toISOString();
exports.dateNowNumeric = () => new Date(Date.now()).getTime();
exports.dateToString = (dateTime) => new Date(dateTime).toISOString();
exports.dateToNumeric = (dateTime) => new Date(dateTime).getTime();
exports.dateRangeFromNow = (backNumberOfDays) => {
    return exports.dateRange(backNumberOfDays, exports.dateNowISO());
};
exports.dateRange = (backNumberOfDays, dateNow) => {
    return [
        exports.dateToString(exports.dateToNumeric(dateNow) - exports.day(backNumberOfDays)),
        exports.dateToString(dateNow),
    ];
};
exports.setDateRange = (dateNow, backNumberOfDays, funct) => {
    const [startTime, endTime] = exports.dateRange(backNumberOfDays, dateNow);
    return () => funct(startTime)(endTime);
};
//# sourceMappingURL=timeutil.js.map