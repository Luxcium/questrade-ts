import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { IPositions } from '../../../../typescript';
import { Credentials } from '../../../typescript';
// + _getPositions
/** _getPositions */
export const _getPositions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async () => {
  return (await _axiosAccountGetApi(_axios)(credentials)<IPositions>(
    '/positions'
  )()).positions;
};
