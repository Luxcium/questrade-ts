import { Credentials, IAccount, IAccounts } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(credentials: Credentials) {
  //
  return async (): Promise<IAccount[]> => {
    try {
      const getAccounts = _axiosGetApi(credentials);
      const accounts = await getAccounts<IAccounts>('/accounts')();

      return accounts.accountList;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
}
