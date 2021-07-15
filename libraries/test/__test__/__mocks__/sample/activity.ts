import { Currency } from 'questrade-api-enumerations';

import { IAccountActivity } from '../../../../typescript';

export const activity: IAccountActivity = {
  action: 'Buy',
  commission: -1.5,
  currency: Currency.USD,
  description:
    'PUT  T      10/04/19    37     AT&T INC                       NOUS AVONS AGI COMME AGENT      ',
  grossAmount: -8,
  netAmount: -9.5,
  price: 0.04,
  quantity: 2,
  settlementDate: '2019-10-01T00:00:00.000000-04:00',
  stockId: 26_980_517,
  symbol: 'T4Oct19P37.00',
  tradeDate: '2019-09-30T00:00:00.000000-04:00',
  transactionDate: '2019-10-01T00:00:00.000000-04:00',
  type: 'Trades',
};
