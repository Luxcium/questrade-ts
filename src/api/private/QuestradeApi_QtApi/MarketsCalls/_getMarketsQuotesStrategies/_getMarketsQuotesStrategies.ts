import {
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest,
} from '../../../../../typescript';
import { _axiosPostApi } from '../../../core/API_Request_AXIOS';

export const _getMarketsQuotesStrategies = (credentials: Credentials) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('markets/quotes/strategies')();
