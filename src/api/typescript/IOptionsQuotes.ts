// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

export interface IOptionsQuotes {
  quotes: IOptionsQuote[];
}
// Level1OptionData: an!y; // Complex

// export interface IOptionsQuote {
//   underlying: string; // Underlying name
//   underlyingId: number; // Underlying ID
//   symbol: string; // Symbol name
//   stockId: number; // Symbol ID
//   bidPrice: number; // Bid price
//   bidSize: number; // Bid size
//   askPrice: number; // Ask price
//   askSize: number; // Ask size
//   lastTradePriceTrHrs: number; // Last trade price trade hours
//   lastTradePrice: number; // Last trade price
//   lastTradeSize: number; // Last trade size
//   lastTradeTick: string; // Last trade tick
//   lastTradeTime: DateTime; // Last trade time
//   volume: number; // Volume
//   openPrice: number; // Open price
//   highPrice: number; // High price
//   lowPrice: number; // Low price
//   volatility: number; // Volatility
//   delta: number; // Delta
//   gamma: number; // Gamma
//   theta: number; // Theta
//   vega: number; // Vega
//   rho: number; // Rho
//   openInterest: number; // Open interest
//   delay: number; // How much is data delayed
//   isHalted: boolean; // Whether or not the symbol was halted
//   VWAP: number; // Volume Weighted Average Price
// }

export interface IOptionsQuote {
  /** List of Level1 OptionData records. */
  quotes?: [];
  /** List of Level1 OptionData records. */

  Level1OptionData?: [];

  /** Underlying name */
  underlying?: string;

  /** Underlying ID */
  underlyingId?: number;

  /** Symbol name */
  symbol?: string;

  /** Symbol ID */
  stockId?: number;

  /** Bid price */
  bidPrice?: number;

  /** Bid size */
  bidSize?: number;

  /** Ask price */
  askPrice?: number;

  /** Ask size */
  askSize?: number;

  /** Last trade price trade hours */
  lastTradePriceTrHrs?: number;

  /** Last trade price */
  lastTradePrice?: number;

  /** Last trade size */
  lastTradeSize?: number;

  /** Last trade tick */
  lastTradeTick?: string;

  /** Last trade time */
  lastTradeTime?: Date;

  /** Volume */
  volume?: number;

  /** Open price */
  openPrice?: number;

  /** High price */
  highPrice?: number;

  /** Low price */
  lowPrice?: number;

  /** Volatility */
  volatility?: number;

  /** Delta */
  delta?: number;

  /** Gamma */
  gamma?: number;

  /** Theta */
  theta?: number;

  /** Vega */
  vega?: number;

  /** Rho */
  rho?: number;

  /** Open interest */
  openInterest?: number;

  /** How much is data delayed */
  delay?: number;

  /** Whether or not the symbol was halted */
  isHalted?: boolean;

  /** Volume Weighted Average Price */
  VWAP?: number;
}
