export interface ICandles {
  candles: ICandle[];
}

export interface ICandle {
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
  symbolID?: number;
  granularity?: string;
  // hash: { short: string; long: string };
}
