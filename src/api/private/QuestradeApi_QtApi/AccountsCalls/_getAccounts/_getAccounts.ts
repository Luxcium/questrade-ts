import { Credentials, IAccount, IAccounts } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/API_Request_AXIOS';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(credentials: Credentials) {
  //
  return async (): Promise<IAccount[]> => {
    //
    const getAccounts = _axiosGetApi(credentials);
    const accounts = getAccounts<IAccounts>('/accounts');
    const data = await accounts();
    //
    return data.accounts;
  };
}
