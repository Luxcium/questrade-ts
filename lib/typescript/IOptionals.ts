import {
  HistoricalDataGranularity,
  OptionType,
  OrderStateFilterType,
} from 'questrade-api-enumerations';

export type AccountType = number | string;
export interface IFilter {
  readonly optionType: OptionType;
  readonly underlyingId: number;
  readonly expiryDate: Date | string;
  readonly minstrikePrice: number;
  readonly maxstrikePrice: number;
}

interface ITimeStartEnd {
  readonly startTime?: Date | string;
  readonly endTime?: Date | string;
}
interface ITimeStartEndAndInterval extends ITimeStartEnd {
  readonly interval?: HistoricalDataGranularity | string;
}
interface IOrdersOptions {
  readonly id?: AccountType;
  readonly startTime?: Date | string;
  readonly endTime?: Date | string;
  readonly stateFilter?: OrderStateFilterType;
  readonly orderId?: number;
}
interface IOptionals extends ITimeStartEndAndInterval, IOrdersOptions {
  readonly stateFilter?: OrderStateFilterType;
  readonly id?: string | number;
  readonly name?: string;
  readonly names?: string[] | string;
  readonly offset?: number;
  readonly prefix?: string | number;
  readonly interval?: string;
  readonly ids?: string | number | string[] | number[];
  readonly filters?: IFilter[];
  readonly filter?: IFilter;
}

export type TimeRange = ITimeStartEnd;
export type OrdersOptions = IOrdersOptions;
export type TimeRangeInterval = ITimeStartEndAndInterval;
export type Optionals = IOptionals;
