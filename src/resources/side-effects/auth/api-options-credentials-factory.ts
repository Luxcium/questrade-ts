import { ApiOptions, Credentials } from '../../../typescript';
import { preValidateToken } from '../../../utils';
import { errorlog } from '../default-behaviour';
import { _emptyCredentials } from './_emptyCredentials';

export const apiOptionsCredentialsFactory = (
  apiOptions: ApiOptions,
): Credentials => {
  const practiceAccount = !!apiOptions.practiceAccount ?? false;

  return {
    ..._emptyCredentials(),
    accountCallsPerHour: apiOptions.accountCallsPerHour ?? 0,
    accountCallsPerSecond: apiOptions.accountCallsPerSecond ?? 0,
    accountNumber: `${apiOptions.accountNumber}` ?? '',
    apiVersion: apiOptions.apiVersion ?? 'v1',
    authUrl: practiceAccount
      ? 'https://practicelogin.q.com'
      : 'https://login.questrade.com',
    caching: apiOptions.caching ?? true,
    debugVebosity: apiOptions.debug ?? 0,
    errorloger: apiOptions.errorloger ?? errorlog,
    fromCache: apiOptions.fromCache ?? true,
    keyDir: apiOptions.keyDir ?? './keys',
    keyFile: apiOptions.keyFile ?? '',
    marketCallsPerHour: apiOptions.marketCallsPerHour ?? 0,
    marketCallsPerSecond: apiOptions.marketCallsPerSecond ?? 0,
    practiceAccount,
    proxyFactory: apiOptions.proxyFactory,
    seedToken: preValidateToken(apiOptions) ?? 'ERROR',
    testing: apiOptions.testing ?? false,
  };
};
