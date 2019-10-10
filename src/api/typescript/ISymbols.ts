import {
  Currency,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'questrade-api-enumerations';
import { MinTick } from '.';

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
