import { _credentialsFactory, _getDataFromApi } from './core';

async function tokenConnection(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);
  const questrade = _getDataFromApi(credentials);
  return { qt: questrade, questrade, credentials };
}

export { id0, log } from './utils';
export { tokenConnection };
