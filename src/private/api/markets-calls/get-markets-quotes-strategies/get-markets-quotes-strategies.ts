import type { ProxyHandlerOptions } from '../../../../resources/side-effects/types';
import type {
  IStrategiesQuotes,
  Logger,
  StrategyVariantRequest,
} from '../../../../typescript';

export const _getMarketsQuotesStrategies = (
  clientPostApi: <D>(
    postData: D | null,
  ) => <R>(
    endpoint: string,
    handlerOptions: ProxyHandlerOptions,
  ) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (
  strategyVariantRequestData: StrategyVariantRequest,
): Promise<IStrategiesQuotes> => {
  try {
    return await clientPostApi<StrategyVariantRequest>(
      strategyVariantRequestData,
    )<IStrategiesQuotes>('/markets/quotes/strategies', { noCaching: true })();
  } catch (error) {
    void errorlog(error);

    return {
      /** ask price */
      askPrice: Number.NaN,
      /** bid price */
      bidPrice: Number.NaN,
      /** delta */
      delta: Number.NaN,
      /** gamma */
      gamma: Number.NaN,
      /** whether or not the data is real-time */
      isRealTime: false,
      /** open price */
      openPrice: Number.NaN,
      /** rho */
      rho: Number.NaN,
      /** theta */
      theta: Number.NaN,
      /** underlying name */
      underlying: 'ERROR',
      /** underlying ID */
      underlyingId: Number.NaN,
      /** variant ID corresponding to variant in request */
      variantId: Number.NaN,
      /** vega */
      vega: Number.NaN,
      /** volatility */
      volatility: Number.NaN,
    };
  }
};

// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
