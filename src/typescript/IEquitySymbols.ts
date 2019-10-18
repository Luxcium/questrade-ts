import {
  Currency,
  ListingExchange,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'api/enums/qtEnumerations';

export interface IEquitySymbols {
  symbols: IEquitySymbol[];
}
export interface IEquitySymbol {
  symbol: string;
  symbolId: number;
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

export interface ISymbols {
  symbols: ISymbol[];
}
export interface ISymbol {
  symbol?: string;
  stockId?: number;
  tradeUnit: number;
  prevDayClosePrice?: number;
  highPrice52?: number;
  lowPrice52?: number;
  averageVol3Months?: number;
  averageVol20Days?: number;
  outstandingShares?: number;
  eps?: number;
  pe?: number;
  dividend?: number;
  yield?: number;
  exDate?: Date | string;
  marketCap?: number;
  optionType?: OptionType | null;
  optionDurationType?: OptionDurationType | null;
  optionRoot?: string;
  optionContractDeliverables?: string | OptionContractDeliverables;
  underlyings?: string | [];
  UnderlyingMultiplierPair?: string | [];
  multiplier?: number;
  underlyingSymbol?: string;
  underlyingSymbolId?: string;
  cashInLieu?: number;
  optionExerciseType?: OptionExerciseType | null;
  listingExchange?: string | [];
  description?: string;
  securityType?: SecurityType;
  dividendDate?: Date | string;
  optionExpiryDate: string | null;
  optionStrikePrice?: number | null;
  isTradable?: boolean;
  isQuotable?: boolean;
  hasOptions?: boolean;
  currency?: Currency;
  minTicks?: string | MinTick[];
  MinTickData?: string | [];
  pivot?: number;
  minTick?: number;
  industrySector?: string;
  industryGroup?: string;
  industrySubGroup?: string;
  industrySubgroup: string;
  count?: number;
}

export interface OptionContractDeliverables {
  underlyings: [];
  cashInLieu: number;
}
