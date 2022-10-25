import { Credentials, IAccount, IAccounts } from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(credentials: Credentials) {
  //
  return async (): Promise<IAccount[]> => {
    try {
      //
      const getAccounts = _axiosGetApi(credentials);
      const accounts = getAccounts<IAccounts>('/accounts');
      const data = await accounts();
      //
      return data.accounts;
    } catch (error: any) {
      console.error(error.message);
      return [];
    }
  };
}
