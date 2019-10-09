import { AxiosStatic, default as axios } from 'axios';
import { _axiosApiPost } from '../../../..';
import { IStrategiesQuotes } from '../../../../../typings';
import { Credentials } from '../../../../typescript';
import { StrategyVariantRequest } from './typescript';

export const _marketsQuotesStrategies = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (
  strategyVariantRequestData: StrategyVariantRequest
): Promise<IStrategiesQuotes> =>
  _axiosApiPost(_axios)(credentials)<StrategyVariantRequest>(
    strategyVariantRequestData
  )<IStrategiesQuotes>('markets/quotes/strategies')();
