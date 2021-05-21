import { errorLog } from '../../../../../resources/side-effects';
import { _emptyCredentials } from '../../../../../resources/side-effects/auth/_emptyCredentials';
import { ApiOptions, Credentials } from '../../../../../typescript';
import { preValidateToken } from './preValidateToken';

export function apiOptionsCredentialsFactory(
  apiOptions: ApiOptions,
): Credentials {
  const practiceAccount = Boolean(apiOptions.practiceAccount) ?? false;

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
    debugVebosity: apiOptions.debugVebosity ?? 1,
    errorloger: apiOptions.errorloger ?? errorLog,
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
}
