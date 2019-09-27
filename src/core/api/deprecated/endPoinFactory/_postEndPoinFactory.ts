import { _genericPostEndPoint } from '.';
import { QtApi } from '../../../libraries';

export const _postEndPoinFactory = <T, D = any>(endpoint: string) => (
  qtApi: QtApi
) => async (data: D) =>
  _genericPostEndPoint((await qtApi).post)<T>(endpoint)<D>(data);
