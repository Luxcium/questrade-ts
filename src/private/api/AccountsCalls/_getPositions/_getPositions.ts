import { Credentials, IPosition, IPositions } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getPositions
/** _getPositions */
export const _getPositions =
  (credentials: Credentials) => async (): Promise<IPosition[]> => {
    try {
      return (
        await _axiosAccountGetApi(credentials)<IPositions>('/positions')()
      ).positions;
    } catch (error: any) {
      console.error(error.message);
      return [];
    }
  };
