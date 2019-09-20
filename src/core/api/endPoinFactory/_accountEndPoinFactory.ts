import { _genericEndPoint } from '..';
import { QtApi } from '../../libraries';

export const _accountEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: Promise<QtApi>
) => _genericEndPoint((await qtApi).accountGet)<T>(endpoint);
