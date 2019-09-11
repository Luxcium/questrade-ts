// - ------------------------------------------------------------------------ //
import { DateTime } from './Types';
// -------------------------------------------------------------------------- //
// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.
// - ------------------------------------------------------------------------ //

export interface ICandles {
  candles: ICandle[];
}
export interface ICandle {
  start?: DateTime;
  end?: DateTime; // Candlestick end timestamp (in ISO format).
  open?: number; // Opening price.
  high?: number; // High price.
  low?: number; // Low price.
  close?: number; // Closing price.
  volume?: number; // Trading volume.
}
/*

// candles	Complex	List of Candle records.
// Candle	Complex


*/
// - ------------------------------------------------------------------------ //
