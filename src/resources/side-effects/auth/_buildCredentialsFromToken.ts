import { ApiOptions } from '../../../typescript';
import { _emptyCredentials } from './_emptyCredentials';

export const apiOptionsCredentialsFactory = (apiOptions: ApiOptions) => {
  const credentials = _emptyCredentials();

  if (typeof apiOptions === 'undefined' || typeof apiOptions !== 'object') {
    throw new Error('questrade_missing_api_key or options');
  }

  const token: string =
    typeof apiOptions.token === 'string'
      ? apiOptions.token
      : apiOptions.token();

  credentials.practice = !!apiOptions.practiceAccount ?? false;
  credentials.keyDir = apiOptions.keyDir ?? './keys';
  credentials.apiVersion = apiOptions.apiVersion ?? 'v1';
  credentials.keyFile = apiOptions.keyFile ?? '';
  credentials.seedToken = token ?? '';
  credentials.accountNumber = `${apiOptions.account}` ?? '';
  credentials.fromCache;
  // credentials.;

  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
};
