import { urlEncode } from '.';

const DAY = 24 * 60 * 60 * 1000;

export const day = (days: number) => days * DAY;

// Export function timeUtil() {
//   //
// }
// Let startDate = '2019-08-25';
// Let endDate = '2019-09-14T00:00:00.000000-05:00';
// Const now = Date.now;
// Export const dates = [
//   StartDate,
//   New Date(now()).toISOString(),
//   New Date(now()).toUTCString(),
//   New Date(now()).toString(),
//   New Date(now()).toLocaleString(),
//   New Date(now()).toJSON(),
//   New Date(startDate).toISOString(),
//   New Date(startDate).toUTCString(),
//   New Date(endDate).toString(),
//   New Date(startDate).toLocaleString(),
//   New Date(startDate).toJSON(),
// ];
// Const offset = 9;
// StartDate = `2019-${offset}-13`;
// EndDate = `2019-${offset}-14`;

export const urlEncodeDateTool = (
  startTime: string,
  endTime: string,
): string => {
  return `startTime=${urlEncode(
    dateToISOString(startTime),
  )}&endTime=${urlEncode(dateToISOString(endTime))}`;
};

export const dateNowISO = () => new Date(Date.now()).toISOString();
export const dateNowNumeric = () => new Date(Date.now()).getTime();

export const dateToISOString = (dateTime: string | number): string =>
  new Date(dateTime).toISOString();

export const dateToNumeric = (dateTime: string | number | Date): number =>
  new Date(dateTime).getTime();
export const dateRangeFromNow = (backNumberOfDays: number) => {
  const back = Math.floor(backNumberOfDays);
  const numberOfDays = back < 0 ? back * -1 : back;

  return dateRange(numberOfDays, dateNowISO());
};

type StartDate = string;
type EndDate = string;
interface StartDateEndDateObject {
  startDate: StartDate;
  startTime: StartDate;
  endDate: EndDate;
  endTime: EndDate;
}
export const dateRange = (
  backNumberOfDays: number,
  dateNow?: string,
): StartDateEndDateObject => {
  let now = dateNow;

  if (!now) {
    now = dateNowISO();
  }

  const startDate: StartDate = rmvMiliSec(
    dateToNumeric(now) - day(backNumberOfDays),
  );

  const endDate: EndDate = rmvMiliSec(now);
  const startTime = startDate;
  const endTime = endDate;

  return {
    endDate,
    endTime,
    startDate,
    startTime,
  };
};

const rmvMiliSec = (date: Date | string | number): string => {
  const { floor } = Math;

  return dateToISOString(floor(dateToNumeric(date) / 1000) * 1000);
};

export const setDateRange = (backNumberOfDays: number) => <T>(
  funct: (startTime: string) => (endTime: string) => T,
  fromDate?: string,
) => {
  const { startTime, endTime } = dateRange(backNumberOfDays, fromDate);

  return funct(startTime)(endTime);
};

// Export const rangeTool = (startTime?: string | null) => (
//   EndTime?: string | null
// ) => (numberOfDays?: number | null) => {
//   Const days = !!numberOfDays ? numberOfDays : 0;
//   Const endValue = !endTime ? dateNumericNow() : dateToNumeric(endTime);
//   Const startValue = !startTime ? dateNumericNow() : dateToNumeric(startTime);

//   Return [dateToString(endValue), dateToString(startValue + day(days))];
// };

// Const naiveCalculate = (SECOND: number = 1000) => {
//   Const DAY = 24 * 60 * 60 * SECOND;
//   Return {
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
//     YWEEKS: 52,
//     YMONTHS: 12,
//   };
// };
// Export const naive = {
//   InSec: naiveCalculate(1),
//   InMiliSec: naiveCalculate(1000),
// };
// Export const naiveSecondes = naive(1);
// Export const naiveMiliSecondes = naive(1000);

// EndpointFormatDateTool(startTime, endTime);

// Import { questrade } from "../../classes/questradeBase";
// Questrade("0I55OUTM7zHQZbG9AiwA5vY3zQY6W6qt0").then(
//   Async will => console.log(will)
// Await will.get.orders(startDate, endDate)(), // .reduce(
// Will.get.current.accountNumber(),
// Will.get.markets
// Await will.get.supported.markets(),
// Await will.get.market.quotes([9292, 9292])
// (pre: number, curent, _index) =>
// {
//   Const void0: unknown =
//   If (!!curent.commission.valueOf())
//   Return curent.commission + pre;
//  },
// 0
// ()
// );
// );
// Date :
// Day
// Month
// Year
// 2014-01-02T00:00:00.000000-05:00
// 2019-09-14T09:07:37.461Z
