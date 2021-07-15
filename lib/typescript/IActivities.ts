import { Currency } from 'questrade-api-enumerations';

export interface IActivities {
  /** array of activity records */
  readonly activities: IAccountActivity[];
}
export interface IAccountActivity {
  /** trade date */
  readonly tradeDate: Date | string;
  /** transaction date */
  readonly transactionDate: Date | string;
  /** settlement date */
  readonly settlementDate: Date | string;
  /** activity action */
  readonly action: string;
  /** symbol name */
  readonly symbol: string;
  /** symbol ID */
  readonly stockId: string | number;
  /** description */
  readonly description: string;
  /** enumeration Currency */
  readonly currency: Currency;
  /** the quantity */
  readonly quantity: number;
  /** the price */
  readonly price: number;
  /** gross amount */
  readonly grossAmount: number;
  /** the commission */
  readonly commission: number;
  /** net Amount */
  readonly netAmount: number;
  /** activity Type */
  readonly type: string;
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
