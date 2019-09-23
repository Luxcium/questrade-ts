import { _genericEndPoint } from '..';
import { QtApi } from '../../libraries';

export const _accountEndPoinFactory = <T>(endpoint: string) => async (
  qtApi: QtApi
) => {
  console.log('accountGet:', qtApi);
  return _genericEndPoint(qtApi.accountGet)<T>(endpoint);
};
