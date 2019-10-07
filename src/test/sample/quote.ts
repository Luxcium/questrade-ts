import { TickType } from 'questrade-api-enumerations';
import { IQuote } from '../../api/typescript';

export const quote: IQuote = {
  symbol: 'AAPL',
  symbolId: 8049,
  tier: '',
  bidPrice: 229.04,
  bidSize: 1,
  askPrice: 229.05,
  askSize: 1,
  lastTradePriceTrHrs: 229.05,
  lastTradePrice: 229.05,
  lastTradeSize: 100,
  lastTradeTick: TickType.EQUAL,
  lastTradeTime: '2019-10-07T12:27:02.036000-04:00',
  volume: 14630570,
  openPrice: 226.27,
  highPrice: 229.42,
  lowPrice: 225.84,
  delay: 0,
  isHalted: false,
  high52w: 232.35,
  low52w: 142,
  VWAP: 228.007058,
};
