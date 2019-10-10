import {
  Currency,
  ListingExchange,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'questrade-api-enumerations';

export interface IEquitySymbols {
  symbols: IEquitySymbol[];
}
export interface IEquitySymbol {
  symbol: string;
  stockId: number;
  description: string;
  securityType: SecurityType;
  listingExchange: ListingExchange;
  isQuotable: boolean;
  isTradable: boolean;
  currency: Currency;
  prevDayClosePrice: number;
  highPrice52: number;
  lowPrice52: number;
  averageVol3Months: number;
  averageVol20Days: number;
  outstandingShares: number;
  eps: number;
  pe: number;
  dividend: number;
  yield: number;
  exDate: string;
  marketCap: number;
  tradeUnit: number;
  optionType: OptionType;
  optionDurationType: OptionDurationType;
  optionRoot: string;
  optionContractDeliverables: string;
  optionExerciseType: OptionExerciseType;
  optionExpiryDate: string;
  dividendDate: string;
  optionStrikePrice: number;
  hasOptions: boolean;
  minTicks: MinTick[];
  industrySector: string;
  industryGroup: string;
  industrySubgroup: string;
}

export interface MinTick {
  pivot: number;
  minTick: number;
}
