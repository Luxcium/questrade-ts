import { Currency } from 'questrade-api-enumerations';

export interface IActivities {
  /** array of activity records */
  activities: IAccountActivity[];
}
export interface IAccountActivity {
  /** trade date */
  tradeDate: Date | string;
  /** transaction date */
  transactionDate: Date | string;
  /** settlement date */
  settlementDate: Date | string;
  /** activity action */
  action: string;
  /** symbol name */
  symbol: string;
  /** symbol ID */
  stockId: string | number;
  /** description */
  description: string;
  /** enumeration Currency */
  currency: Currency;
  /** the quantity */
  quantity: number;
  /** the price */
  price: number;
  /** gross amount */
  grossAmount: number;
  /** the commission */
  commission: number;
  /** net Amount */
  netAmount: number;
  /** activity Type */
  type: string;
}

/*
Response properties
Property	Type	Description
activities Array Array of activity records
AccountActivity Complex
tradeDate DateTime Trade date
transactionDate DateTime Transaction date
settlementDate DateTime Settlement date
action String Activity action
symbol String Symbol name
symbolId uint64 Symbol ID
description String Description
currency Enumeration Currency
quantity Double The quantity
price Double The price
grossAmount Double Gross amount
commission Double The commission
netAmount Double Net Amount
type String Activity Type
*/
