import {
  HistoricalDataGranularity,
  OptionType,
  OrderStateFilterType,
} from 'api/enums/qtEnumerations';

export type AccountType = number | string;
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

export type TimeRange = ITimeStartEnd;
export type OrdersOptions = IOrdersOptions;
export type TimeRangeInterval = ITimeStartEndAndInterval;
export type Optionals = IOptionals;
