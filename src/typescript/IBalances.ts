import { Currency } from 'questrade-api-enumerations';

export interface IBalances {
  readonly perCurrencyBalances: IBalance[];
  readonly combinedBalances: IBalance[];
  readonly sodPerCurrencyBalances: IBalance[];
  readonly sodCombinedBalances: IBalance[];
}

export interface IBalance {
  readonly currency: Currency | 'USD' | 'CAD';
  readonly cash: number;
  readonly marketValue: number;
  readonly totalEquity: number;
  readonly buyingPower: number;
  readonly maintenanceExcess: number;
  readonly isRealTime: boolean;
}

export interface IBalanceCAD {
  readonly cash: number;
  readonly marketValue: number;
  readonly totalEquity: number;
  readonly buyingPower: number;
  readonly maintenanceExcess: number;
  readonly isRealTime: boolean;
}
export interface IBalanceUSD {
  readonly cash: number;
  readonly marketValue: number;
  readonly totalEquity: number;
  readonly buyingPower: number;
  readonly maintenanceExcess: number;
  readonly isRealTime: boolean;
}

export interface ICurencyBalance {
  readonly CAD: IBalanceCAD;
  readonly USD: IBalanceUSD;
}

export interface Balances {
  readonly perCurrencyBalances: ICurencyBalance;
  readonly combinedBalances: ICurencyBalance;
  readonly sodPerCurrencyBalances: ICurencyBalance;
  readonly sodCombinedBalances: ICurencyBalance;
}
