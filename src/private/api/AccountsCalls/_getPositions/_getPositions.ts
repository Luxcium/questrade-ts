// import { errorlog } from '../../../../resources/side-effects';
import { sideEffects } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IPosition,
  IPositions,
} from '../../../../typescript';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

const { errorlog } = sideEffects;

// + _getPositions
/** _getPositions */
export const _getPositions = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
) => async (): Promise<IPosition[]> => {
  try {
    const positions = await _clientAccountGetApi(
      credentials,
      proxy,
    )<IPositions>('/positions')();

    return positions.positions;
  } catch (error) {
    void errorlog(error);
    return [];
  }
};
