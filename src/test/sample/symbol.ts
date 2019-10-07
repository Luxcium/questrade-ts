import { Currency, SecurityType } from 'questrade-api-enumerations';
import { ISymbol } from '../../api/typescript';
export const stockSymbol: ISymbol = {
  symbol: 'AAPL',
  symbolId: 8049,
  prevDayClosePrice: 227.01,
  highPrice52: 232.35,
  lowPrice52: 142,
  averageVol3Months: 27641633,
  averageVol20Days: 30094274,
  outstandingShares: 4519180000,
  eps: 11.78,
  pe: 18.74533,
  dividend: 0.77,
  yield: 1.3948,
  exDate: '2019-08-09T00:00:00.000000-04:00',
  marketCap: 997925327600,
  tradeUnit: 1,
  optionType: null,
  optionDurationType: null,
  optionRoot: '',
  optionContractDeliverables: { underlyings: [], cashInLieu: 0 },
  optionExerciseType: null,
  listingExchange: 'NASDAQ',
  description: 'APPLE INC',
  securityType: SecurityType.STOCK,
  optionExpiryDate: null,
  dividendDate: '2019-08-15T00:00:00.000000-04:00',
  optionStrikePrice: null,
  isTradable: true,
  isQuotable: true,
  hasOptions: true,
  currency: Currency.USD,
  minTicks: [{ pivot: 0, minTick: 0.0001 }, { pivot: 1, minTick: 0.01 }],
  industrySector: 'Technology',
  industryGroup: 'ComputerHardware',
  industrySubgroup: 'ConsumerElectronics',
};
