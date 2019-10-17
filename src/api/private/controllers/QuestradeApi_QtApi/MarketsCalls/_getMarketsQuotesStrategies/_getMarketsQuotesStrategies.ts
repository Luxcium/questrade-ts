import {
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest,
} from '../../../../../../typescript';
import { _axiosPostApi } from '../../../../core';

export const _getMarketsQuotesStrategies = (credentials: Credentials) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('markets/quotes/strategies')();
