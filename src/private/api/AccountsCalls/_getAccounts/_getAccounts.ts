import {
  Credentials,
  IAccount,
  IAccounts,
  IProxy,
} from '../../../../typescript';
import { _axiosGetApi } from '../../../routes';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(credentials: Credentials, proxy?: IProxy) {
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
      console.error(error.message);
      return [];
    }
  };
}

// import { Credentials, IAccount, IAccounts } from '../../../../typescript';
// import { _axiosGetApi } from '../../../routes';

// // + _getAccounts
// /** _getAccounts */
// export function _getAccounts(credentials: Credentials) {
//   //
//   return async (): Promise<IAccount[]> => {
//     try {
//       const getAccounts = _axiosGetApi(credentials);
//       const accounts = await getAccounts<IAccounts>('/accounts')();

//       return accounts.accountList;
//     } catch (error) {
//       console.error(error);
//       console.log('CODE BROKE HERE');
//       return [];
//     }
//   };
// }
