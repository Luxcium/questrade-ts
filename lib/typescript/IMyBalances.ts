import { IBalance } from '.';

export interface IMyBalances {
  readonly perCurrency: {
    readonly CAD: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
    readonly USD: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
  };
  readonly combined: {
    readonly CAD: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
    readonly USD: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
  };
  readonly current: {
    readonly perCurrency: {
      readonly CAD: IBalance;
      readonly USD: IBalance;
    };
    readonly combined: {
      readonly CAD: IBalance;
      readonly USD: IBalance;
    };
  };
  readonly startOfDay: {
    readonly combined: {
      readonly CAD: IBalance;
      readonly USD: IBalance;
    };
    readonly perCurrency: {
      readonly CAD: IBalance;
      readonly USD: IBalance;
    };
  };
  readonly CAD: {
    readonly perCurrency: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
    readonly combined: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
  };
  readonly USD: {
    readonly combined: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
    readonly perCurrency: {
      readonly startOfDay: IBalance;
      readonly current: IBalance;
    };
  };
}
