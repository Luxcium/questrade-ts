import {
  AxiosProxyHandler,
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest,
} from '../../../../typescript';
import { _axiosPostApi } from '../../../routes';

export const _getMarketsQuotesStrategies = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (
  strategyVariantRequestData: StrategyVariantRequest,
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(
    credentials,
    proxy,
  )<StrategyVariantRequest>(strategyVariantRequestData)<IStrategiesQuotes>(
    '/markets/quotes/strategies',
  )();

// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
