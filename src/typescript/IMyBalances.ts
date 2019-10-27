import { IBalance } from '.';

export interface IMyBalances {
  perCurrency: {
    CAD: {
      startOfDay: IBalance;
      current: IBalance;
    };
    USD: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  combined: {
    CAD: {
      startOfDay: IBalance;
      current: IBalance;
    };
    USD: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  current: {
    perCurrency: {
      CAD: IBalance;
      USD: IBalance;
    };
    combined: {
      CAD: IBalance;
      USD: IBalance;
    };
  };
  startOfDay: {
    combined: {
      CAD: IBalance;
      USD: IBalance;
    };
    perCurrency: {
      CAD: IBalance;
      USD: IBalance;
    };
  };
  CAD: {
    perCurrency: {
      startOfDay: IBalance;
      current: IBalance;
    };
    combined: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
  USD: {
    combined: {
      startOfDay: IBalance;
      current: IBalance;
    };
    perCurrency: {
      startOfDay: IBalance;
      current: IBalance;
    };
  };
}
