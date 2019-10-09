import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { IBalances } from '../../../../typings';
import { Credentials } from '../../../typescript';

// + _getBalances
/** _getBalances */
export const _getBalances = (_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => async (): Promise<IBalances> => {
    //
    return _axiosAccountGetApi(_axios)(credentials)<IBalances>('/balances')();
  };
};
