import { qtEnumerations } from 'questrade-api-enumerations';
import { _credentialsFactory, _getApi } from './core';

async function redeemToken(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = _getApi(credentials);
  return { qtApi: questrade, credentials };
}

export { id0, log, day } from './utils';
export { redeemToken };
export { testExamples } from './testExamples';
export { qtEnumerations as Enumerations };
