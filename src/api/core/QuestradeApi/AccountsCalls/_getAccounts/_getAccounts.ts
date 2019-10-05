import { AxiosStatic, default as axios } from 'axios';
import { _axiosGetApi } from '../../..';
import { IAccount, IAccounts } from '../../../../typescript';
import { Credentials } from '../../../typescript';

// + _getAccounts
/** _getAccounts */
export function _getAccounts(_axios: AxiosStatic = axios) {
  //
  return (credentials: Credentials) => {
    //
    return async (): Promise<IAccount[]> => {
      //
      const getApi = _axiosGetApi(_axios);
      const getAccounts = getApi(credentials);
      const accounts = getAccounts<IAccounts>('/accounts');
      const data = await accounts();
      //
      return data.accounts;
    };
  };
}
