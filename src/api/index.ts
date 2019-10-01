import { qtEnumerations } from 'questrade-api-enumerations';
import { _credentialsFactory, _getApi } from './core';

export { id0, log, day } from './utils';
export { testExamples } from './testExamples';
export { qtEnumerations as Enumerations };

export async function redeemToken(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = _getApi(credentials);
  return { qtApi: questrade, credentials };
}
