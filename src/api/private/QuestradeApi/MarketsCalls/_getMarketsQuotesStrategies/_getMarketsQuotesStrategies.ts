import { AxiosStatic, default as axios } from "axios";
import {
  Credentials,
  IStrategiesQuotes,
  StrategyVariantRequest
} from "../../../../../typescript";
import { _axiosPostApi } from "../../../core/API_Request_AXIOS";

export const _getMarketsQuotesStrategies = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(_axios)(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>("markets/quotes/strategies")();
