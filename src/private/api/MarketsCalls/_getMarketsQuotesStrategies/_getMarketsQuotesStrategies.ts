import {
  ClientProxyHandler,
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest,
} from '../../../../typescript';
import { _clientPostApi } from '../../../routes';

export const _getMarketsQuotesStrategies = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (
  strategyVariantRequestData: StrategyVariantRequest,
): Promise<IStrategiesQuotes> =>
  _clientPostApi(
    credentials,
    proxy,
  )<StrategyVariantRequest>(strategyVariantRequestData)<IStrategiesQuotes>(
    '/markets/quotes/strategies',
  )();

// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
