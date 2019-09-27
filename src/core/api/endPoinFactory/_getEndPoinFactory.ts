import { _genericEndPoint } from '..';
import { QtApi } from '../../libraries';

export const _getEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: QtApi
) => _genericEndPoint((await qtApi).get)<T>(endpoint);
