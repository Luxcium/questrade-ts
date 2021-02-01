import { ApiOptions, Credentials } from '../../../typescript';
import { errorlog } from '../default-behaviour';
import { getToken } from './getToken';
import { _emptyCredentials } from './_emptyCredentials';

export const apiOptionsCredentialsFactory = (apiOptions: ApiOptions) => {
  const credentials: Credentials = _emptyCredentials();

  credentials.accountCallsPerHour = apiOptions.accountCallsPerHour ?? 0;
  credentials.accountCallsPerSecond = apiOptions.accountCallsPerSecond ?? 0;
  credentials.accountNumber = `${apiOptions.accountNumber}` ?? '';
  credentials.apiVersion = apiOptions.apiVersion ?? 'v1';
  credentials.caching = apiOptions.caching ?? true;
  credentials.errorloger = apiOptions.errorloger ?? errorlog;
  credentials.fromCache = apiOptions.fromCache ?? true;
  credentials.keyDir = apiOptions.keyDir ?? './keys';
  credentials.keyFile = apiOptions.keyFile ?? '';
  credentials.marketCallsPerHour = apiOptions.marketCallsPerHour ?? 0;
  credentials.marketCallsPerSecond = apiOptions.marketCallsPerSecond ?? 0;
  credentials.practiceAccount = !!apiOptions.practiceAccount ?? false;
  credentials.proxyFactory = apiOptions.proxyFactory;
  credentials.seedToken = getToken(apiOptions) ?? 'ERROR';
  credentials.testing = apiOptions.testing ?? false;
  credentials.authUrl = credentials.practiceAccount
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
};
