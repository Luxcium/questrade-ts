import { DateTime } from './Types';

export interface ICandles {
  candles: ICandle[];
}
export interface ICandle {
  /** Candlestick start timestamp (in ISO format). */
  start?: DateTime;
  /** Candlestick end timestamp (in ISO format). */
  end?: DateTime;
  /** Opening price. */
  open?: number;
  /** High price. */
  high?: number;
  /** Low price. */
  low?: number;
  /** Closing price. */
  close?: number;
  /** Trading volume. */
  volume?: number;
  /** The volume weighted average price (VWAP) */
  VWAP?: number;
}
/*

// candles	Complex	List of Candle records.
// Candle	Complex


*/
