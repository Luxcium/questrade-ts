import { HistoricalDataGranularity, OptionType, OrderStateFilterType } from 'questrade-api-enumerations';
export declare type AccountType = number | string;
export interface IFilter {
    optionType: OptionType;
    underlyingId: number;
    expiryDate: Date | string;
    minstrikePrice: number;
    maxstrikePrice: number;
}
interface ITimeStartEnd {
    startTime?: Date | string;
    endTime?: Date | string;
}
interface ITimeStartEndAndInterval extends ITimeStartEnd {
    interval?: HistoricalDataGranularity | string;
}
interface IOrdersOptions {
    id?: AccountType;
    startTime?: Date | string;
    endTime?: Date | string;
    stateFilter?: OrderStateFilterType;
    orderId?: number;
}
interface IOptionals extends ITimeStartEndAndInterval, IOrdersOptions {
    stateFilter?: OrderStateFilterType;
    id?: string | number;
    name?: string;
    names?: string[] | string;
    offset?: number;
    prefix?: string | number;
    interval?: string;
    ids?: string | number | string[] | number[];
    filters?: IFilter[];
    filter?: IFilter;
}
export declare type TimeRange = ITimeStartEnd;
export declare type OrdersOptions = IOrdersOptions;
export declare type TimeRangeInterval = ITimeStartEndAndInterval;
export declare type Optionals = IOptionals;
export {};
//# sourceMappingURL=IOptionals.d.ts.map