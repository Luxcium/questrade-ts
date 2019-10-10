export interface IOptionsQuotes {
  quotes: IOptionsQuote[];
}
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
