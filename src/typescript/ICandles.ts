export interface ICandles {
  readonly candles: ICandle[];
}

export interface ICandle {
  /** candlestick start timestamp (in ISO format). */
  readonly start?: Date | string;
  /** candlestick end timestamp (in ISO format). */
  readonly end?: Date | string;
  /** opening price. */
  readonly open?: number;
  /** high price. */
  readonly high?: number;
  /** low price. */
  readonly low?: number;
  /** closing price. */
  readonly close?: number;
  /** trading volume. */
  readonly volume?: number;
  /** the volume weighted average price (VWAP) */
  readonly VWAP?: number;
  symbolID?: number;
  granularity?: string;
  // readonly hash: { short: string; long: string };
}
