import { TickType } from 'questrade-api-enumerations';

export interface IQuotes {
  quotes: IQuote[];
}
export interface IQuote {
  symbol: string;
  symbolId: number;
  bidPrice: number;
  bidSize: number;
  askPrice: number;
  askSize: number;
  lastTradePriceTrHrs: number;
  lastTradeTrHrs?: number;
  lastTradePrice: number;
  lastTradeSize: number;
  lastTradeTick: TickType;
  lastTradeTime: string;
  volume: number;
  openPrice: number;
  highPrice: number;
  lowPrice: number;
  delay: 0 | 1;
  isHalted: boolean;
  tier: string;
  high52w: number;
  low52w: number;
  VWAP: number;
}
