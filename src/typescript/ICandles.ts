export interface ICandles {
  candles: ICandle[];
}

export interface ICandle {
  /** Candlestick start timestamp (in ISO format). */
  start?: Date | string;
  /** Candlestick end timestamp (in ISO format). */
  end?: Date | string;
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
  symbolID?: number;
  granularity?: string;
  hash: { short: string; long: string };
}
