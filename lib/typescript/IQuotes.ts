import { TickType } from 'questrade-api-enumerations';

export interface IQuotes {
  readonly quotes: IQuote[];
}
export interface IQuote {
  readonly symbol: string;
  readonly symbolId: number;
  readonly bidPrice: number;
  readonly bidSize: number;
  readonly askPrice: number;
  readonly askSize: number;
  readonly lastTradePriceTrHrs: number;
  readonly lastTradeTrHrs?: number;
  readonly lastTradePrice: number;
  readonly lastTradeSize: number;
  readonly lastTradeTick: TickType;
  readonly lastTradeTime: string;
  readonly volume: number;
  readonly openPrice: number;
  readonly highPrice: number;
  readonly lowPrice: number;
  readonly delay: 0 | 1;
  readonly isHalted: boolean;
  readonly tier: string;
  readonly high52w: number;
  readonly low52w: number;
  readonly VWAP: number;
}
