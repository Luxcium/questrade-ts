import { _axiosGetApi } from '../../..';
import { IAccounts } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getAccounts
/** _getAccounts */
export const _getAccounts = (credentials: Credentials) => async () =>
  (await _axiosGetApi(credentials)<IAccounts>('/accounts')()).accounts;
