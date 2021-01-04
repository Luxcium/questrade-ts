import { Currency } from 'questrade-api-enumerations';

import { IAccountActivity } from '../../../../typescript';

export const activity: IAccountActivity = {
  tradeDate: '2019-09-30T00:00:00.000000-04:00',
  transactionDate: '2019-10-01T00:00:00.000000-04:00',
  settlementDate: '2019-10-01T00:00:00.000000-04:00',
  action: 'Buy',
  symbol: 'T4Oct19P37.00',
  stockId: 26_980_517,
  description:
    'PUT  T      10/04/19    37     AT&T INC                       NOUS AVONS AGI COMME AGENT      ',
  currency: Currency.USD,
  quantity: 2,
  price: 0.04,
  grossAmount: -8,
  commission: -1.5,
  netAmount: -9.5,
  type: 'Trades',
};
