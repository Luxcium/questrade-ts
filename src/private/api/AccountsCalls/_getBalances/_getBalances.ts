import { Credentials, IBalances } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getBalances
/** _getBalances */
export const _getBalances = (
  credentials: Credentials
) => async (): Promise<IBalances> => {
  try {
    //
    return _axiosAccountGetApi(credentials)<IBalances>('/balances')();
  } catch (error) {
    console.error(error.message);
    return {
      perCurrencyBalances: [],
      combinedBalances: [],
      sodPerCurrencyBalances: [],
      sodCombinedBalances: [],
    };
  }
};
