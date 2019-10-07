// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

// Level1OptionData: an!y; // Complex

// export interface IOptionsQuote {
//   underlying: string; // Underlying name
//   underlyingId: number; // Underlying ID
//   symbol: string; // Symbol name
//   symbolId: number; // Symbol ID
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

export interface IOptionChains {
  optionChain: IOptionChain[];
}

export interface IOptionChain {
  expiryDate: string;
  description: string;
  listingExchange: string;
  optionExerciseType: string;
  chainPerRoot: IChainPerRoot[];
}

export interface IChainPerRoot {
  root: string;
}
export interface IChainPerStrike {
  strikePrice: number;
  callSymbolId: number;
  putSymbolId: number;
}
export interface IChainPerStrikePrice {
  chainPerStrike: IChainPerStrike[];
  multiplier: number;
  chainPerStrikePrice: IChainPerStrike[];
}

/*
Response properties

Property	Type	Description
symbols
Complex
List of ChainPerExpiryDate elements.
ChainPerExpiryDate
Complex

expiryDate
DateTime
Option expiry date.
description
String
Description of the underlying option.
listingExchange
Enumeration
Primary listing exchange.
See Listing Exchange section for the list of all listing exchanges.
optionExerciseType
Enumeration
Option exercise style (e.g., "American").
See Option Exercise Type section for all allowed values.
chainPerRoot
Complex
List of ChainPerRoot elements.
ChainPerRoot
Complex

optionRoot
String
Option root symbol.
chainPerStrikePrice
Complex
List of ChainPerStrikePrice elements.
ChainPerStrikePrice
Complex

strikePrice
Double
Option strike price.
callSymbolId
Integer
Internal identifier of the call option symbol.
putSymbolId
Integer
Internal identifier of the put option symbol.
*/
