// import { errorlog } from '../../../../resources/side-effects';
import {
  ClientProxyHandler,
  Credentials,
  IPosition,
  IPositions,
} from '../../../../typescript';
import { _clientAccountGetApi } from '../../../routes/clientAccountGetApi/_clientAccountGetApi';

// + _getPositions
/** _getPositions */
export const _getPositions = (
  credentials: Credentials,
  proxy?: ClientProxyHandler,
  errorlog: (error: any) => any = (error: any) => error,
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
