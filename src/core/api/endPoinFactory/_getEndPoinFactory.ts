import { _genericEndPoint } from '..';
import { QtApi } from '../../libraries';

export const _getEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: Promise<QtApi>
) => _genericEndPoint((await qtApi).get)<T>(endpoint);
