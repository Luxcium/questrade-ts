export interface IStrategiesQuotes {
  /** Variant ID corresponding to variant in request */
  variantId: number;

  /** Bid price */
  bidPrice: number;

  /** Ask price */
  askPrice: number;

  /** Underlying name */
  underlying: string;

  /** Underlying ID */
  underlyingId: number;

  /** Open price */
  openPrice: number;

  /** Volatility */
  volatility: number;

  /** Delta */
  delta: number;

  /** Gamma */
  gamma: number;

  /** Theta */
  theta: number;

  /** Vega */
  vega: number;

  /** Rho */
  rho: number;

  /** Whether or not the data is real-time */
  isRealTime: boolean;
}
