import { Currency } from 'api/enums/qtEnumerations';

export interface IActivities {
  /** Array of activity records */
  activities: IAccountActivity[];
}
export interface IAccountActivity {
  /** Trade date */
  tradeDate: Date | string;
  /** Transaction date */
  transactionDate: Date | string;
  /** Settlement date */
  settlementDate: Date | string;
  /** Activity action */
  action: string;
  /** Symbol name */
  symbol: string;
  /** Symbol ID */
  stockId: string | number;
  /** Description */
  description: string;
  /** Enumeration Currency */
  currency: Currency;
  /** The quantity */
  quantity: number;
  /** The price */
  price: number;
  /** Gross amount */
  grossAmount: number;
  /** The commission */
  commission: number;
  /** Net Amount */
  netAmount: number;
  /** Activity Type */
  type: string;
}
