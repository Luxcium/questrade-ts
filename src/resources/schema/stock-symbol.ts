/* eslint-disable sort-keys */
import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import {
  Currency,
  OptionDurationType,
  OptionExerciseType,
  OptionType,
  SecurityType,
} from 'questrade-api-enumerations';

import { MinTick } from '../../typescript';
import { OptionContractDeliverables } from '../../typescript/ISymbol';

const symbolSchema = new mongoose.Schema<ISymbolDocument>({
  MinTickData: String,
  UnderlyingMultiplierPair: String,
  averageVol20Days: Number,
  averageVol3Months: Number,
  cashInLieu: Number,
  count: Number,
  currency: String,
  description: String,
  dividend: Number,
  dividendDate: Date,
  eps: Number,
  exDate: Date,
  hasOptions: Boolean,
  highPrice52: Number,
  industryGroup: String,
  industrySector: String,
  industrySubGroup: String,
  industrySubgroup: String,
  isQuotable: Boolean,
  isTradable: Boolean,
  listingExchange: String,
  lowPrice52: Number,
  marketCap: Number,
  minTick: Number,
  minTicks: String,
  multiplier: Number,
  optionContractDeliverables: String,
  optionDurationType: String,
  optionExerciseType: String,
  optionExpiryDate: Date,
  optionRoot: String,
  optionStrikePrice: Number,
  optionType: String,
  outstandingShares: Number,
  pe: Number,
  pivot: Number,
  prevDayClosePrice: Number,
  securityType: String,
  symbol: String,
  symbolId: Number,
  tradeUnit: Number,
  underlyingSymbol: String,
  underlyingSymbolId: String,
  underlyings: String,
  yield: Number,
});

// SymbolSearchResult
export const StockSymbol: Model<ISymbolDocument> = mongoose.model(
  'StockSymbol',
  symbolSchema,
);
export interface ISymbolDocument extends Document {
  symbol?: string;
  symbolId?: number;
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
  currency?: Currency | string;
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
