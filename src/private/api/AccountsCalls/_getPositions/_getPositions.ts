// import { errorlog } from '../../../../resources/side-effects';
import type { IPosition, IPositions, Logger } from '../../../../typescript';

// + _getPositions
/** _getPositions */
export const _getPositions = (
  clientAccountGetApi: <R>(accountEndpoint: string) => () => Promise<R>,
  errorlog: Logger = (...error: any[]) => error,
) => async (): Promise<IPosition[]> => {
  try {
    const positions = await clientAccountGetApi<IPositions>('/positions')();

    return positions.positions;
  } catch (error) {
    void errorlog(error.message);

    return [];
  }
};
