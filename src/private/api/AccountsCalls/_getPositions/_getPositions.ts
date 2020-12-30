import { Credentials, IPosition, IPositions } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getPositions
/** _getPositions */
export const _getPositions = (credentials: Credentials) => async (): Promise<
  IPosition[]
> => {
  try {
    const positions = await _axiosAccountGetApi(credentials)<IPositions>(
      '/positions'
    )();

    return positions.positionList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
