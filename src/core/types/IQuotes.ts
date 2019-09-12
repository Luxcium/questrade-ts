import { TickType } from 'questrade-api-enumerations';

// - Copyright (c) Benjamin Vincent Kasapoglu (Luxcium). All rights reserved.
// - Licensed under the MIT License.
// - See License.txt in the project root for license information.

export interface IQuotes {
  quotes: IQuote[];
}
export interface IQuote {
  symbol: number;
  symbolId: string;
  bidPrice: number;
  bidSize: number;
  askPrice: number;
  askSize: number;
  lastTradeTrHrs: number;
  lastTradePrice: number;
  lastTradeSize: number;
  lastTradeTick: TickType;
  volume: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  delay: boolean;
  isHalted: boolean;
}
