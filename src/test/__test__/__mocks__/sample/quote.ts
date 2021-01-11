import { TickType } from 'questrade-api-enumerations';

import { IQuote } from '../../../../typescript';

export const quote: IQuote = {
  VWAP: 228.007_058,
  askPrice: 229.05,
  askSize: 1,
  bidPrice: 229.04,
  bidSize: 1,
  delay: 0,
  high52w: 232.35,
  highPrice: 229.42,
  isHalted: false,
  lastTradePrice: 229.05,
  lastTradePriceTrHrs: 229.05,
  lastTradeSize: 100,
  lastTradeTick: TickType.EQUAL,
  lastTradeTime: '2019-10-07T12:27:02.036000-04:00',
  low52w: 142,
  lowPrice: 225.84,
  openPrice: 226.27,
  symbol: 'AAPL',
  symbolId: 8049,
  tier: '',
  volume: 14_630_570,
};
