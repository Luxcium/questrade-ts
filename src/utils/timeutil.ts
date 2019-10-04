const DAY = 24 * 60 * 60 * 1000;
export const day = (days: number) => days * DAY;

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

export const endpointFormatDateTool = (
  startTime: string,
  endTime: string
): string => {
  return `startTime=${dateToString(startTime)}&endTime=${dateToString(
    endTime
  )}&`;
};
export const dateNowISO = () => new Date(Date.now()).toISOString();
export const dateNowNumeric = () => new Date(Date.now()).getTime();

export const dateToString = (dateTime: string | number): string =>
  new Date(dateTime).toISOString();

export const dateToNumeric = (dateTime: string): number =>
  new Date(dateTime).getTime();
export const dateRangeNow = (backNumberOfDays: number) => {
  return dateRange(backNumberOfDays, dateNowISO());
};

export const dateRange = (backNumberOfDays: number, dateNow: string) => {
  return [
    dateToString(dateToNumeric(dateNow) - day(backNumberOfDays)),
    dateToString(dateNow),
  ];
};

export const setDateRange = <T>(
  dateNow: string,
  backNumberOfDays: number,
  funct: (startTime: string) => (endTime: string) => T
) => {
  const [startTime, endTime] = dateRange(backNumberOfDays, dateNow);
  return () => funct(startTime)(endTime);
};

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
