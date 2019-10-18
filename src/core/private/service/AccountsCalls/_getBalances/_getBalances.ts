import { Credentials, IBalances } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../client';

// + _getBalances
/** _getBalances */
export const _getBalances = (credentials: Credentials) => async (): Promise<
  IBalances
> => {
  //
  return _axiosAccountGetApi(credentials)<IBalances>('/balances')();
};
