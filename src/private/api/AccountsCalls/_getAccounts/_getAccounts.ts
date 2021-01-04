import {
  AxiosProxyHandler,
  Credentials,
  IAccount,
  IAccounts,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(
  credentials: Credentials,
  proxy?: AxiosProxyHandler,
) {
  //
  return async (): Promise<IAccount[]> => {
    try {
      //
      const getAccounts = _axiosGetApi(credentials, proxy);
      const accounts = getAccounts<IAccounts>('/accounts');
      const data = await accounts();
      //
      return data.accounts;
    } catch (error) {
      console.error(error.message); // CONSOLE: List the side effects
      return [];
    }
  };
}
