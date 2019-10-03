import { _axiosAccountGetApi } from '../../..';
import { Credentials, IPositions } from '../../../../typescript';

// + _getPositions
/** _getPositions */
export const _getPositions = (credentials: Credentials) => async () =>
  (await _axiosAccountGetApi(credentials)<IPositions>('/positions')())
    .positions;
