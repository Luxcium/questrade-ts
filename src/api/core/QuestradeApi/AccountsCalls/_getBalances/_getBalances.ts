import { _axiosAccountGetApi } from '../../..';
import { IBalances } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getBalances
/** _getBalances */
export const _getBalances = (credentials: Credentials) =>
  _axiosAccountGetApi()(credentials)<IBalances>('/balances');
