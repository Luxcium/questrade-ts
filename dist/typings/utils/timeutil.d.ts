import { DateTimeRange } from '../typescript';
export declare const dayMiliseconds: (days: number) => number;
export declare class DateInterval {
}
export declare class DateClass {
    private date;
    get getDate(): string;
    constructor(year: number, month: number, day: number, hours?: number, minutes?: number);
}
export declare function getDateRange(date: Date | string, offset: number): DateTimeRange;
export declare const urlEncodeDateTool: (startTime: string, endTime: string) => string;
export declare const dateNowISO: () => string;
export declare const dateNowNumeric: () => number;
export declare const dateToISOString: (dateTime: Date | number | string) => string;
export declare const dateToNumeric: (dateTime: Date | number | string) => number;
export declare const dateRangeFromNow: (backNumberOfDays: number) => StartDateEndDateObject;
declare type StartDate = string;
declare type EndDate = string;
interface StartDateEndDateObject {
    startDate: StartDate;
    startTime: StartDate;
    endDate: EndDate;
    endTime: EndDate;
}
export declare const dateRange: (backNumberOfDays: number, dateNow?: string | undefined) => StartDateEndDateObject;
export declare const setDateRange: (backNumberOfDays: number) => <T>(funct: (startTime: string) => (endTime: string) => T, fromDate?: string | undefined) => T;
export declare function now(): number;
export {};
//# sourceMappingURL=timeutil.d.ts.map