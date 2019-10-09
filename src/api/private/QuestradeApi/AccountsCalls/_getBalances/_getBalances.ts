import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IBalances } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../core';

// + _getBalances
/** _getBalances */
export const _getBalances = (_axios: AxiosStatic = axios) => {
  //
  return (credentials: Credentials) => async (): Promise<IBalances> => {
    //
    return _axiosAccountGetApi(_axios)(credentials)<IBalances>('/balances')();
  };
};
