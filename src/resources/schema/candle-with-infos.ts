import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';
import { Currency } from 'questrade-api-enumerations';

const candleWithInfosSchema = new mongoose.Schema<ICandleWithInfosDocument>({
  VWAP: Number,
  // matrixDiff: [[Number]],
  // matrixRatio: [[Number]],
  candleStickOCHLV: [Number],
  close: Number,
  currency: String,
  description: String,
  end: Date,
  epochEnd: Number,
  epochStart: Number,
  granularity: String,
  high: Number,
  listingExchange: String,
  low: Number,
  open: Number,
  securityType: String,
  serverTime: Date,
  start: Date,
  symbol: String,
  symbolID: Number,
  symbolName: String,
  valid: Boolean,
  volume: Number,
});

export const CandleWithInfos: Model<ICandleWithInfosDocument> = mongoose.model(
  'CandleWithInfo',
  candleWithInfosSchema,
);
export interface ICandleWithInfosDocument extends Document {
  candleStickOCHLV?: number[];
  close?: number | undefined;
  currency: Currency;
  description?: string;
  end?: string | Date | undefined;
  epochEnd?: number;
  epochStart?: number;
  granularity?: string | undefined;
  high?: number | undefined;
  listingExchange?: string;
  low?: number | undefined;
  // matrixDiff?: number[][];
  // matrixRatio?: number[][];
  open?: number | undefined;
  securityType?: string;
  serverTime?: Date;
  start?: string | Date | undefined;
  symbol?: string;
  symbolID?: number;
  symbolName?: string;
  valid?: boolean;
  volume?: number | undefined;
  VWAP?: number | undefined;
}
