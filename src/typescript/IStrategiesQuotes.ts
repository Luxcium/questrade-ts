export interface IStrategiesQuotes {
  /** variant ID corresponding to variant in request */
  readonly variantId: number;

  /** bid price */
  readonly bidPrice: number;

  /** ask price */
  readonly askPrice: number;

  /** underlying name */
  readonly underlying: string;

  /** underlying ID */
  readonly underlyingId: number;

  /** open price */
  readonly openPrice: number;

  /** volatility */
  readonly volatility: number;

  /** delta */
  readonly delta: number;

  /** gamma */
  readonly gamma: number;

  /** theta */
  readonly theta: number;

  /** vega */
  readonly vega: number;

  /** rho */
  readonly rho: number;

  /** whether or not the data is real-time */
  readonly isRealTime: boolean;
}
