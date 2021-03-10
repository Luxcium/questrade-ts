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
import { OptionContractDeliverables } from '../typescript/IStockSymbol';

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
  serverTime: Date,
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
  averageVol20Days?: number;
  averageVol3Months?: number;
  cashInLieu?: number;
  count?: number;
  currency?: Currency | string;
  description?: string;
  dividend?: number;
  dividendDate?: Date | string;
  eps?: number;
  exDate?: Date | string;
  hasOptions?: boolean;
  highPrice52?: number;
  industryGroup?: string;
  industrySector?: string;
  industrySubgroup: string;
  industrySubGroup?: string;
  isQuotable?: boolean;
  isTradable?: boolean;
  listingExchange?: string | [];
  lowPrice52?: number;
  marketCap?: number;
  minTick?: number;
  MinTickData?: string | [];
  minTicks?: string | MinTick[];
  multiplier?: number;
  optionContractDeliverables?: string | OptionContractDeliverables;
  optionDurationType?: OptionDurationType | null;
  optionExerciseType?: OptionExerciseType | null;
  optionExpiryDate: string | null;
  optionRoot?: string;
  optionStrikePrice?: number | null;
  optionType?: OptionType | null;
  outstandingShares?: number;
  pe?: number;
  pivot?: number;
  prevDayClosePrice?: number;
  securityType?: SecurityType;
  serverTime: Date;
  symbol?: string;
  symbolId?: number;
  tradeUnit: number;
  UnderlyingMultiplierPair?: string | [];
  underlyings?: string | [];
  underlyingSymbol?: string;
  underlyingSymbolId?: string;
  yield?: number;
}

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
