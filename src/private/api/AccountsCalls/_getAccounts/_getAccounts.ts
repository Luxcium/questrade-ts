import { sideEffects } from '../../../../default-behaviour';
import {
  AxiosProxyHandler,
  Credentials,
  IAccount,
  IAccounts,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

const { errorlog } = sideEffects;

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
      void errorlog(error.message);
      return [];
    }
  };
}
