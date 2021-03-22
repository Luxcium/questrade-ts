interface ITimeObject {
  readonly years: number;
  readonly months: number;
  readonly date: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
  readonly milliseconds: number;
}
interface ITime {
  readonly hour: number;
  readonly minute: number;
  readonly second: number;
  readonly milliseconds: number;
  readonly unixmilliseconds: number;
  readonly unix: number;
  readonly utcOffset: number;
}
interface IDate {
  readonly day: string;
  readonly date: number;
  readonly month: number;
  readonly year: number;
}
export interface IDateObject {
  readonly serverTime: string;
  readonly UTC: string;
  readonly timeObject: ITimeObject;
  readonly toUTCDate: Date;
  readonly toArray: number[];
  readonly date: IDate;
  readonly time: ITime;
  readonly isValid: boolean;
  readonly dayOfYear: number;
  readonly weekOfTheYeay: number;
  readonly weekday: number;
  readonly isLeapYear: boolean;
  readonly daysInMonth: number;
  readonly weeksInYear: number;
  readonly quarter: number;
  readonly locale: string;
}

export interface Time {
  time: string;
}
