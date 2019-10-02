import { qtEnumerations } from 'questrade-api-enumerations';
import { _credentialsFactory, _getApi } from './core';

export { testExamples } from './testExamples';
export { day, id0, log, void0 } from './utils';
export { qtEnumerations as Enumerations };

export async function redeemToken(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = _getApi(credentials);
  return { qtApi: questrade, credentials };
}
