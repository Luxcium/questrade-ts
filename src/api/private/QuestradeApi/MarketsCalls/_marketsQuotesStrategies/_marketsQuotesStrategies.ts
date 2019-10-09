import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IStrategiesQuotes } from '../../../../typescript';
import { StrategyVariantRequest } from '../../../../typescript/';
import { _axiosPostApi } from '../../../core';

export const _marketsQuotesStrategies = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosPostApi(_axios)(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('markets/quotes/strategies')();
