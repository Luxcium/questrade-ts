import {
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'questrade-api-enumerations';
import { DateTime } from './Types';

// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

export interface ISymbols {
  symbols: ISymbol[];
}
export interface ISymbol {
  symbol?: string;
  symbolId?: number;
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
  exDate?: DateTime;
  marketCap?: number;
  optionType?: OptionType;
  optionDurationType?: OptionDurationType;
  optionRoot?: string;
  optionContractDeliverables?: string | [];
  underlyings?: string | [];
  UnderlyingMultiplierPair?: string | [];
  multiplier?: number;
  underlyingSymbol?: string;
  underlyingSymbolId?: string;
  cashInLieu?: number;
  optionExerciseType?: OptionExerciseType;
  listingExchange?: string | [];
  description?: string;
  securityType?: SecurityType;
  dividendDate?: DateTime;
  optionStrikePrice?: number;
  isQuotable?: boolean;
  hasOptions?: boolean;
  currency?: string;
  minTicks?: string | [];
  MinTickData?: string | [];
  pivot?: number;
  minTick?: number;
  industrySector?: string;
  industryGroup?: string;
  industrySubGroup?: string;
  count?: number;
}
