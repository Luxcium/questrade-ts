import { _axiosGetApi } from '../../..';
import { IAccounts } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(credentials: Credentials) {
  return async () =>
    (await _axiosGetApi()(credentials)<IAccounts>('/accounts')()).accounts;
}
