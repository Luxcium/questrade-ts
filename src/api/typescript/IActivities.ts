// GET accounts/:id/activities
// Retrieve account activities,
// including cash transactions, dividends, trades, etc.
import { Currency } from 'questrade-api-enumerations';

// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

type DateTime = Date | string;
export interface IActivities {
  /** Array of activity records */
  activities: IAccountActivity[];
}
export interface IAccountActivity {
  /** Trade date */
  tradeDate: DateTime;
  /** Transaction date */
  transactionDate: DateTime;
  /** Settlement date */
  settlementDate: DateTime;
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

/*

Maximum 31 days of data can be requested at a time.

Sample request:
GET https://api01.iq.questrade.com/v1/accounts/26598145/
activities?startTime=
2011-02-01T00:00:00-05:00&endTime=2011-02-28T00:00:00-05:00&
Sample response:
{
  "activities": [
        {
            "tradeDate": "2011-02-16T00:00:00.000000-05:00",
            "transactionDate": "2011-02-16T00:00:00.000000-05:00",
            "settlementDate": "2011-02-16T00:00:00.000000-05:00",
            "action": "",
            "symbol": "",
            "stockId": 0,
            "description":
             "INT FR 02/04 THRU02/15@ 4 3/4%BAL  205,006   AVBAL  204,966 ",
            "currency": "USD",
            "quantity": 0,
            "price": 0,
            "grossAmount": 0,
            "commission": 0,
            "netAmount": -320.08,
            "type": "Interest"
        },
        ...
    ]
}


*/
