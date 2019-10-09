import { AxiosStatic, default as axios } from 'axios';
import { _axiosAccountGetApi } from '../../..';
import { IPosition, IPositions } from '../../../../typings';
import { Credentials } from '../../../typescript';
// + _getPositions
/** _getPositions */
export const _getPositions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (): Promise<IPosition[]> => {
  return (await _axiosAccountGetApi(_axios)(credentials)<IPositions>(
    '/positions'
  )()).positions;
};
