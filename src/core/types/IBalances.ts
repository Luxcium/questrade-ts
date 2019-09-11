// - ------------------------------------------------------------------------ //
import { Currency } from 'questrade-api-enumerations';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

export interface IBalance {
  currency: Currency;
  cash: number;
  marketValue: number;
  totalEquity: number;
  buyingPower: number;
  maintenanceExcess: number;
  isRealTime: boolean;
}

export interface IBalances {
  perCurrencyBalances: IBalance[];
  combinedBalances: IBalance[];
  sodPerCurrencyBalances: IBalance[];
  sodCombinedBalances: IBalance[];
}
// - ------------------------------------------------------------------------ //
