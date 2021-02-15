export interface IStrategiesQuotes {
  /** variant ID corresponding to variant in request */
  variantId: number;

  /** bid price */
  bidPrice: number;

  /** ask price */
  askPrice: number;

  /** underlying name */
  underlying: string;

  /** underlying ID */
  underlyingId: number;

  /** open price */
  openPrice: number;

  /** volatility */
  volatility: number;

  /** delta */
  delta: number;

  /** gamma */
  gamma: number;

  /** theta */
  theta: number;

  /** vega */
  vega: number;

  /** rho */
  rho: number;

  /** whether or not the data is real-time */
  isRealTime: boolean;
}
