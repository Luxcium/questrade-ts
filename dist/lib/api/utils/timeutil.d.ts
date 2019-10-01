export declare function timeUtil(): void;
export declare const dates: string[];
export declare const endpointFormatDateTool: (startTime: string, endTime: string) => string;
export declare const dateISOStringNow: () => string;
export declare const dateNumericNow: () => number;
export declare const dateToString: (dateTime: string | number) => string;
export declare const dateToNumeric: (dateTime: string) => number;
export declare const rangeTool: (startTime?: string | null | undefined) => (endTime?: string | null | undefined) => (numberOfDays?: number | null | undefined) => string[];
export declare const naive: {
    inSec: {
        SECOND: number;
        HOUR: number;
        MINUTE: number;
        DAY: number;
        WEEK5: number;
        WEEK7: number;
        MONTH: number;
        MONTH28: number;
        MONTH29: number;
        MONTH30: number;
        YEAR: number;
        YEAR366: number;
        yWEEKS: number;
        yMONTHS: number;
    };
    inMiliSec: {
        SECOND: number;
        HOUR: number;
        MINUTE: number;
        DAY: number;
        WEEK5: number;
        WEEK7: number;
        MONTH: number;
        MONTH28: number;
        MONTH29: number;
        MONTH30: number;
        YEAR: number;
        YEAR366: number;
        yWEEKS: number;
        yMONTHS: number;
    };
};
export declare const day: (days: number) => number;
//# sourceMappingURL=timeutil.d.ts.map