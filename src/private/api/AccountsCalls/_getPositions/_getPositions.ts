import {
  AxiosProxyHandler,
  Credentials,
  IPosition,
  IPositions,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getPositions
/** _getPositions */
export const _getPositions = (
  credentials: Credentials,
  proxy?: AxiosProxyHandler
) => async (): Promise<IPosition[]> => {
  try {
    const positions = await _axiosAccountGetApi(
      credentials,
      proxy
    )<IPositions>('/positions')();

    return positions.positions;
  } catch (error) {
    console.error(error);
    return [];
  }
};
