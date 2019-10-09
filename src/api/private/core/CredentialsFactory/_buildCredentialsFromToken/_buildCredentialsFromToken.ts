import { emptyCredentials } from '..';
import { QuestradeAPIOptions } from '../../../../typings';

export const _buildCredentialsFromToken = (token: QuestradeAPIOptions) => {
  const credentials = emptyCredentials();

  if (typeof token === 'undefined' || !token) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof token === 'string' && token.indexOf('/') !== -1) {
    credentials.keyFile = token;
  }
  if (typeof token === 'string' && token.indexOf('/') === -1) {
    credentials.seedToken = token;
  }
  if (typeof token === 'object') {
    credentials.practice = !!token.practiceAccount;
    credentials.keyDir = token.keyDir || './keys';
    credentials.apiVersion = token.apiVersion || 'v1';
    credentials.keyFile = token.keyFile || '';
    credentials.seedToken = token.seedToken || '';
    credentials.accountNumber = `${token.account}` || '';
  }
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
};
