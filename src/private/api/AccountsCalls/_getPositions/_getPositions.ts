import { Credentials, IPosition, IPositions } from '../../../../typescript';
import { _axiosAccountGetApi } from '../../../routes';

// + _getPositions
/** _getPositions */
export const _getPositions = (credentials: Credentials) => async (): Promise<
  IPosition[]
> => {
  return (await _axiosAccountGetApi(credentials)<IPositions>('/positions')())
    .positions;
};