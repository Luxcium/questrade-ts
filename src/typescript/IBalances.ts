import { Currency } from 'questrade-api-enumerations';

export interface IBalances {
  perCurrencyBalances: IBalance[];
  combinedBalances: IBalance[];
  sodPerCurrencyBalances: IBalance[];
  sodCombinedBalances: IBalance[];
}

export interface IBalance {
  currency: Currency | 'USD' | 'CAD';
  cash: number;
  marketValue: number;
  totalEquity: number;
  buyingPower: number;
  maintenanceExcess: number;
  isRealTime: boolean;
}

export interface IBalanceCAD {
  cash: number;
  marketValue: number;
  totalEquity: number;
  buyingPower: number;
  maintenanceExcess: number;
  isRealTime: boolean;
}
export interface IBalanceUSD {
  cash: number;
  marketValue: number;
  totalEquity: number;
  buyingPower: number;
  maintenanceExcess: number;
  isRealTime: boolean;
}

export interface ICurencyBalance {
  CAD: IBalanceCAD;
  USD: IBalanceUSD;
}

export interface Balances {
  perCurrencyBalances: ICurencyBalance;
  combinedBalances: ICurencyBalance;
  sodPerCurrencyBalances: ICurencyBalance;
  sodCombinedBalances: ICurencyBalance;
}
