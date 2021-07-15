/* eslint-disable max-classes-per-file */
import { DateTimeRange } from '../typescript';
import { urlEncode } from '.';

const DAY = 24 * 60 * 60 * 1000;

export const dayMiliseconds = (days: number) => days * DAY;

export class DateInterval {}

export class DateClass {
  private date: Date;

  public get getDate() {
    return this.date.toISOString();
  }

  constructor(
    year: number,
    month: number,
    day: number,
    hours?: number,
    minutes?: number,
  ) {
    this.date = new Date(year, month - 1, day, hours || 0, minutes || 0);
    void this;
  }
}

export function getDateRange(
  date: Date | string,
  offset: number,
): DateTimeRange {
  let startDate: Date | string = new Date(date).toISOString();
  let endDate: Date | string = new Date(date).toISOString();
  const newDate: Date | string = new Date(
    new Date(date).valueOf() + dayMiliseconds(offset),
  ).toISOString();

  if (offset > 0) {
    startDate = new Date(date).toISOString();
    endDate = newDate;
  }

  if (offset < 0) {
    endDate = new Date(date).toISOString();
    startDate = newDate;
  }

  return { endDate, startDate };
}

// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])

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

export const dateToISOString = (dateTime: Date | number | string): string =>
  new Date(dateTime).toISOString();

export const dateToNumeric = (dateTime: Date | number | string): number =>
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
  let now_ = dateNow;

  if (!now_) {
    now_ = dateNowISO();
  }

  const startDate: StartDate = rmvMiliSec(
    dateToNumeric(now_) - dayMiliseconds(backNumberOfDays),
  );

  const endDate: EndDate = rmvMiliSec(now_);
  const startTime = startDate;
  const endTime = endDate;

  return {
    endDate,
    endTime,
    startDate,
    startTime,
  };
};

const rmvMiliSec = (date: Date | number | string): string => {
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

export function now() {
  return Date.now();
}

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
//     sECOND,
//     hOUR: 60 * 60 * SECOND,
//     mINUTE: 60 * SECOND,
//     dAY,
//     wEEK5: 5 * DAY,
//     wEEK7: 7 * DAY,
//     mONTH: 31 * DAY,
//     mONTH28: 28 * DAY,
//     mONTH29: 29 * DAY,
//     mONTH30: 30 * DAY,
//     yEAR: 365 * DAY,
//     yEAR366: 366 * DAY,
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
// {
//   const void0: unknown =
//   if (!!curent.commission.valueOf())
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
