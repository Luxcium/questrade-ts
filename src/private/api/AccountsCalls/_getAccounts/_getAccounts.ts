import { sideEffects } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IAccount,
  IAccounts,
} from '../../../../typescript';
import { _clientGetApi } from '../../../routes';

const { errorlog } = sideEffects;

// + _getAccounts
/** _getAccounts */
export function _getAccounts(
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) {
  //

  return async (): Promise<IAccount[]> => {
    try {
      //
      const getAccounts = _clientGetApi(credentials, proxy);
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
