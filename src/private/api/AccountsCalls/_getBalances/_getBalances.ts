import { sideEffects } from '../../../../resources/side-effects/default-behaviour';
import {
  ClientProxyHandler,
  Credentials,
  IBalances,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getBalances
/** _getBalances */
export const _getBalances = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (): Promise<IBalances> => {
  try {
    return _axiosAccountGetApi(credentials, proxy)<IBalances>('/balances')();
  } catch (error) {
    void errorlog(error);

    return {
      perCurrencyBalances: [],
      combinedBalances: [],
      sodPerCurrencyBalances: [],
      sodCombinedBalances: [],
    };
  }
};
