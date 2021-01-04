import {
  AxiosProxyHandler,
  Credentials,
  IBalances,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getBalances
/** _getBalances */
export const _getBalances = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) => async (): Promise<IBalances> => {
  try {
    return _axiosAccountGetApi(credentials, proxy)<IBalances>('/balances')();
  } catch (error) {
    console.error(error); // TODO: List the side effects

    return {
      perCurrencyBalances: [],
      combinedBalances: [],
      sodPerCurrencyBalances: [],
      sodCombinedBalances: [],
    };
  }
};
