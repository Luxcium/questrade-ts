import {
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest,
} from '../../../../../typescript';
import { _axiosPostApi } from '../../../../client';

export const _getMarketsQuotesStrategies = (credentials: Credentials) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('/markets/quotes/strategies')();

// https://api01.iq.questrade.com/v1/markets/quotes/strategies
// https://api01.iq.questrade.com/v1/markets/quotes/strategies
