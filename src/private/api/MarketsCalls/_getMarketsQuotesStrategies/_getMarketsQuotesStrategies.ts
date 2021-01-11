import {
  IStrategiesQuotes,
  Logger,
  StrategyVariantRequest,
} from '../../../../typescript';

export const _getMarketsQuotesStrategies = (
  clientPostApi: <D>(
    postData: D | null,
  ) => <R>(endpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (
  strategyVariantRequestData: StrategyVariantRequest,
): Promise<IStrategiesQuotes> => {
  try {
    return clientPostApi<StrategyVariantRequest>(
      strategyVariantRequestData,
    )<IStrategiesQuotes>('/markets/quotes/strategies')();
  } catch (error) {
    void errorlog(error);
    return {
      /** Ask price */
      askPrice: Number.NaN,
      /** Bid price */
      bidPrice: Number.NaN,
      /** Delta */
      delta: Number.NaN,
      /** Gamma */
      gamma: Number.NaN,
      /** Whether or not the data is real-time */
      isRealTime: false,
      /** Open price */
      openPrice: Number.NaN,
      /** Rho */
      rho: Number.NaN,
      /** Theta */
      theta: Number.NaN,
      /** Underlying name */
      underlying: 'ERROR',
      /** Underlying ID */
      underlyingId: Number.NaN,
      /** Variant ID corresponding to variant in request */
      variantId: Number.NaN,
      /** Vega */
      vega: Number.NaN,
      /** Volatility */
      volatility: Number.NaN,
    };
  }
};

// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
