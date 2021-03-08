import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';

import { ISymbolInfos } from '../../typescript';

const candleWithInfosSchema = new mongoose.Schema<ICandleWithInfosDocument>({
  VWAP: Number,
  candleStick: [Number],
  close: Number,
  end: Date,
  epochMiliEnd: Number,
  epochMiliStart: Number,
  granularity: String,
  high: Number,
  low: Number,
  matrixDiff: [[Number]],
  matrixRatio: [[Number]],
  open: Number,
  start: Date,
  symbolID: Number,

  symbolInfos: {
    currency: String,
    description: String,
    listingExchange: String,
    securityType: String,
    serverTime: Date,
    symbolId: Number,
    symbolName: String,
    valid: Boolean,
  },
  valid: Boolean,
  volume: Number,
});

// SymbolSearchResult
export const CandleWithInfos: Model<ICandleWithInfosDocument> = mongoose.model(
  'CandleWithInfo',
  candleWithInfosSchema,
);
export interface ICandleWithInfosDocument extends Document {
  matrixDiff?: number[][];
  matrixRatio?: number[][];
  close?: number | undefined;
  end?: string | Date | undefined;
  granularity?: string | undefined;
  high?: number | undefined;
  low?: number | undefined;
  open?: number | undefined;
  start?: string | Date | undefined;
  valid: boolean;
  candleStick?: number[];
  epochMiliStart?: number;
  epochMiliEnd?: number;
  symbolID?: number | undefined;
  symbolInfos?: ISymbolInfos;
  volume?: number | undefined;
  VWAP?: number | undefined;
}
