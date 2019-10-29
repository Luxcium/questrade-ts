"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAY = 24 * 60 * 60 * 1000;
exports.day = function (days) { return days * DAY; };
// export function timeUtil() {
//   //
// }
// let startDate = '2019-08-25';
// let endDate = '2019-09-14T00:00:00.000000-05:00';
// const now = Date.now;
// export const dates = [
//   startDate,
//   new Date(now()).toISOString(),
//   new Date(now()).toUTCString(),
//   new Date(now()).toString(),
//   new Date(now()).toLocaleString(),
//   new Date(now()).toJSON(),
//   new Date(startDate).toISOString(),
//   new Date(startDate).toUTCString(),
//   new Date(endDate).toString(),
//   new Date(startDate).toLocaleString(),
//   new Date(startDate).toJSON(),
// ];
// const offset = 9;
// startDate = `2019-${offset}-13`;
// endDate = `2019-${offset}-14`;
exports.endpointFormatDateTool = function (startTime, endTime) {
    return "startTime=" + exports.dateToString(startTime) + "&endTime=" + exports.dateToString(endTime) + "&";
};
exports.dateNowISO = function () { return new Date(Date.now()).toISOString(); };
exports.dateNowNumeric = function () { return new Date(Date.now()).getTime(); };
exports.dateToString = function (dateTime) {
    return new Date(dateTime).toISOString();
};
exports.dateToNumeric = function (dateTime) {
    return new Date(dateTime).getTime();
};
exports.dateRangeFromNow = function (backNumberOfDays) {
    var back = Math.floor(backNumberOfDays);
    var numberOfDays = back < 0 ? back * -1 : back;
    return exports.dateRange(numberOfDays, exports.dateNowISO());
};
exports.dateRange = function (backNumberOfDays, dateNow) {
    var now = dateNow;
    if (!now) {
        now = exports.dateNowISO();
    }
    var startDate = rmvMiliSec(exports.dateToNumeric(now) - exports.day(backNumberOfDays));
    var endDate = rmvMiliSec(now);
    var startTime = startDate;
    var endTime = endDate;
    return {
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
    };
};
var rmvMiliSec = function (date) {
    var floor = Math.floor;
    return exports.dateToString(floor(exports.dateToNumeric(date) / 1000) * 1000);
};
exports.setDateRange = function (backNumberOfDays) { return function (funct, fromDate) {
    var _a = exports.dateRange(backNumberOfDays, fromDate), startTime = _a.startTime, endTime = _a.endTime;
    return funct(startTime)(endTime);
}; };
// export const rangeTool = (startTime?: string | null) => (
//   endTime?: string | null
// ) => (numberOfDays?: number | null) => {
//   const days = !!numberOfDays ? numberOfDays : 0;
//   const endValue = !endTime ? dateNumericNow() : dateToNumeric(endTime);
//   const startValue = !startTime ? dateNumericNow() : dateToNumeric(startTime);
//   return [dateToString(endValue), dateToString(startValue + day(days))];
// };
// const naiveCalculate = (SECOND: number = 1000) => {
//   const DAY = 24 * 60 * 60 * SECOND;
//   return {
//     SECOND,
//     HOUR: 60 * 60 * SECOND,
//     MINUTE: 60 * SECOND,
//     DAY,
//     WEEK5: 5 * DAY,
//     WEEK7: 7 * DAY,
//     MONTH: 31 * DAY,
//     MONTH28: 28 * DAY,
//     MONTH29: 29 * DAY,
//     MONTH30: 30 * DAY,
//     YEAR: 365 * DAY,
//     YEAR366: 366 * DAY,
//     yWEEKS: 52,
//     yMONTHS: 12,
//   };
// };
// export const naive = {
//   inSec: naiveCalculate(1),
//   inMiliSec: naiveCalculate(1000),
// };
// export const naiveSecondes = naive(1);
// export const naiveMiliSecondes = naive(1000);
// endpointFormatDateTool(startTime, endTime);
// import { questrade } from "../../classes/questradeBase";
// questrade("0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0").then(
//   async will => console.log(will)
// await will.get.orders(startDate, endDate)(), // .reduce(
// will.get.current.accountNumber(),
// will.get.markets
// await will.get.supported.markets(),
// await will.get.market.quotes([9292, 9292])
// (pre: number, curent, _index) =>
// console.log("\n", each.description, "\n")
// {
//   const void0: unknown =
//   if (!!curent.commission.valueOf()) console.log(curent.commission);
//   return curent.commission + pre;
//  },
// 0
// ()
// );
// );
// date :
// day
// month
// year
// 2014-01-02T00:00:00.000000-05:00
// 2019-09-14T09:07:37.461Z
//# sourceMappingURL=timeutil.js.map