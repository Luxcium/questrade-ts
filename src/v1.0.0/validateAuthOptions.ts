import { Credentials } from './Credentials';
export function validateAuthOptions(credentials: Credentials, options: any) {
  //   const credentials: Credentials;
  credentials.accountNumber = '';
  credentials.apiVersion = 'v1';
  credentials.keyDir = './keys';
  credentials.keyFile = '';
  credentials.practice = false;
  credentials.seedToken = '';
  credentials.expiresIn = 0;
  credentials.tokenType = '';

  if (typeof options === 'undefined' || options === undefined) {
    throw new Error('questrade_missing_api_key or options');
  }
  if (typeof options === 'string' && options.indexOf('/') !== -1) {
    credentials.keyFile = options;
  }
  if (typeof options === 'string' && options.indexOf('/') === -1) {
    credentials.seedToken = options;
  }
  if (typeof options === 'object') {
    credentials.practice =
      options.practiceAccount === undefined ? false : !!options.practiceAccount;
    credentials.keyDir = options.keyDir || './keys';
    credentials.apiVersion = options.apiVersion || 'v1';
    credentials.keyFile = options.keyFile || '';
    credentials.seedToken = options.seedToken || '';
    credentials.accountNumber = `${options.account}` || '';
  }
  credentials.refreshToken = '';
  credentials.accessToken = '';
  credentials.apiUrl = '';
  credentials.apiServer = '';
  credentials.authUrl = credentials.practice
    ? 'https://practicelogin.q.com'
    : 'https://login.questrade.com';

  return credentials;
}
