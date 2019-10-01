export interface IQuoteOptions {
  /** List of Level1OptionData records. */
  quotes?: any;

  Level1OptionData?: any;

  /** Underlying name */
  underlying?: string;

  /** Underlying ID */
  underlyingId?: number;

  /** Symbol name */
  symbol?: string;

  /** Symbol ID */
  symbolId?: number;

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
