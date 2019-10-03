import { _axiosAccountGetApi } from '../../..';
import { Credentials, IBalances } from '../../../../typescript';

// + _getBalances
/** _getBalances */
export const _getBalances = (credentials: Credentials) =>
  _axiosAccountGetApi(credentials)<IBalances>('/balances');
