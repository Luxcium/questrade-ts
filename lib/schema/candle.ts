import type { Document, Model } from 'mongoose';
import mongoose from 'mongoose';

const candleSchema = new mongoose.Schema<ICandleDocument>({
  VWAP: Number,
  close: Number,
  end: String,
  granularity: String,
  high: Number,
  low: Number,
  open: Number,
  serverTime: Date,
  start: String,
  symbolID: Number,
  volume: Number,
});

// EquitySymbolResult
export const Candle: Model<ICandleDocument> = mongoose.model(
  'Candle',
  candleSchema,
);
export interface ICandleDocument extends Document {
  /** candlestick start timestamp (in ISO format). */
  start?: Date | string;
  /** candlestick end timestamp (in ISO format). */
  end?: Date | string;
  /** opening price. */
  open?: number;
  /** high price. */
  high?: number;
  /** low price. */
  low?: number;
  /** closing price. */
  close?: number;
  /** trading volume. */
  volume?: number;
  /** the volume weighted average price (VWAP) */
  VWAP?: number;
  serverTime: Date;

  symbolID?: number;
  granularity?: string;
  // hash: { short: string; long: string };
}
