import { _axiosGetApi } from '../../..';
import { Credentials, IAccounts } from '../../../../typescript';

// + _getAccounts
/** _getAccounts */
export const _getAccounts = (credentials: Credentials) => async () =>
  (await _axiosGetApi(credentials)<IAccounts>('/accounts')()).accounts;
