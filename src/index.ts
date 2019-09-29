import { _credentialsFactory, _getDataFromApi } from './api/';

async function tokenConnection(refreshToken: string) {
  const credentials = await _credentialsFactory(refreshToken);

  const questrade = _getDataFromApi(credentials);
  return { qt: questrade, questrade };
}

export { tokenConnection };
