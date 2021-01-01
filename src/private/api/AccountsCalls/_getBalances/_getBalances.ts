import { Credentials, IBalances, IProxy } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getBalances
/** _getBalances */
export const _getBalances = (
  credentials: Credentials,
  proxy?: IProxy
) => async (): Promise<IBalances> => {
  try {
    return _axiosAccountGetApi(credentials, proxy)<IBalances>('/balances')();
  } catch (error) {
    console.error(error);
    return {
      perCurrencyBalances: [],
      combinedBalances: [],
      sodPerCurrencyBalances: [],
      sodCombinedBalances: [],
    };
  }
};
