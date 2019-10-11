import { AxiosStatic, default as axios } from 'axios';
import { Credentials, IPosition, IPositions } from '../../../../../typescript';
import { _axiosAccountGetApi } from '../../../core/AxiosRequestApiFactory';

// + _getPositions
/** _getPositions */
export const _getPositions = (_axios: AxiosStatic = axios) => (
  credentials: Credentials
) => async (): Promise<IPosition[]> => {
  return (await _axiosAccountGetApi(_axios)(credentials)<IPositions>(
    '/positions'
  )()).positions;
};
