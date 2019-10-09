import { _defaultCredentials } from '..';
import { Credentials } from '../../../typescript';

export const _emptyCredentials = () => {
  const credentials: Credentials = _defaultCredentials;
  credentials.accountNumber = '';
  credentials.apiVersion = 'v1';
  credentials.keyDir = './keys';
  credentials.keyFile = '';
  credentials.practice = false;
  credentials.seedToken = '';
  credentials.expiresIn = 0;
  credentials.tokenType = '';
  credentials.refreshToken = '';
  credentials.accessToken = '';
  credentials.apiUrl = '';
  credentials.apiServer = '';
  return credentials;
};
