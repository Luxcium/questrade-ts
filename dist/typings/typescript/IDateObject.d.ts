interface ITimeObject {
    years: number;
    months: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
interface ITime {
    hour: number;
    minute: number;
    second: number;
    milliseconds: number;
    unixmilliseconds: number;
    unix: number;
    utcOffset: number;
}
interface IDate {
    day: string;
    date: number;
    month: number;
    year: number;
}
export interface IDateObject {
    serverTime: string;
    UTC: string;
    timeObject: ITimeObject;
    toUTCDate: Date;
    toArray: number[];
    date: IDate;
    time: ITime;
    isValid: boolean;
    dayOfYear: number;
    weekOfTheYeay: number;
    weekday: number;
    isLeapYear: boolean;
    daysInMonth: number;
    weeksInYear: number;
    quarter: number;
    locale: string;
}
export interface Time {
    time: string;
}
export {};
//# sourceMappingURL=IDateObject.d.ts.map