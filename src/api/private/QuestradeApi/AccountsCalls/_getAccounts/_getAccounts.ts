import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IAccount, IAccounts } from '../../../../../typescript';
import { _axiosGetApi } from '../../../core/AxiosRequestApiFactory';

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
