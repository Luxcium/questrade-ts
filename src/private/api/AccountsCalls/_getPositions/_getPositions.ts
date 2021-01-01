import {
  Credentials,
  IPosition,
  IPositions,
  IProxy,
} from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getPositions
/** _getPositions */
export const _getPositions = (
  credentials: Credentials,
  proxy?: IProxy
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
