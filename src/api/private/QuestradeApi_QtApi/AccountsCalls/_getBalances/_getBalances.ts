import { Credentials, IBalances } from '../../../../../typescript';
import { _axiosAccountGetApi } from '../../../core/API_Request_AXIOS';

// + _getBalances
/** _getBalances */
export const _getBalances = (credentials: Credentials) => async (): Promise<
  IBalances
> => {
  //
  return _axiosAccountGetApi(credentials)<IBalances>('/balances')();
};
