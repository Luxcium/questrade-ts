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

import { MinTick } from '../typescript';
import { OptionContractDeliverables } from '../typescript/ISymbol';

/*
The permitted SchemaTypes are:
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map

# ##################################
StockSymbol ERROR: Error: StockSymbol validation failed:
optionContractDeliverables:
Cast to string failed for value
"{ underlyings: [], cashInLieu: 0 }"
at path "optionContractDeliverables",

 minTicks: Cast to string failed for value
 "[ { pivot: 0, minTick: 0.0001 }, { pivot: 1, minTick: 0.01 } ]"
 at path "minTicks"


minTicks:[
MinTickData:{
pivot:Number
minTick:Number }
]

[{ pivot:Number, minTick:Number }]

optionContractDeliverables
Complex
Option contract deliverables.
underlyings
Complex
List of UnderlyingMultiplierPair records.
UnderlyingMultiplierPair
Complex

multiplier
Integer
Number of shares deliverable per contract (e.g., 100).
underlyingSymbol
String
Underlying symbol for the deliverable (e.g., "MSFT").
underlyingSymbolId
String
Underlying symbol id for the deliverable (e.g., 2345343).
cashInLieu
Double
Amount of cash in lieu deliverable per contract.
*/
const symbolSchema = new mongoose.Schema<ISymbolDocument>({
  MinTickData: { minTick: Number, pivot: Number },
  UnderlyingMultiplierPair: {
    multiplier: Number,
    underlyingSymbol: String,
    underlyingSymbolId: String,
  },
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
  minTicks: [{ minTick: Number, pivot: Number }],
  multiplier: Number,
  optionContractDeliverables: {
    UnderlyingMultiplierPair: {
      multiplier: Number,
      underlyingSymbol: String,
      underlyingSymbolId: String,
    },
    cashInLieu: Number,
    underlyings: [String],
  },
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
  underlyings: [String],
  yield: Number,
});

// EquitySymbolResult
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
