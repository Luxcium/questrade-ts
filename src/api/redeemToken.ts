import { _credentialsFactory, _getQuestradeApi } from './core';
import { utils } from './utils';

export async function redeemToken(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = _getQuestradeApi(credentials);
  return { qtApi: questrade, credentials, utils };
}
