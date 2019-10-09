import { Credentials } from '../../../../typescript';

export const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '',
  apiServer: '',
  apiUrl: '',
  apiVersion: 'v1',
  authUrl: '',
  expiresAt: undefined,
  tokenExpiration: undefined,
  expiresIn: 0,
  keyDir: './keys',
  keyFile: '',
  practice: false,
  refreshToken: '',
  seedToken: '',
  serverTime: undefined,
  tokenType: '',
  toValue() {
    return {
      ...this,
      accessToken: '[string:PRIVATE]',
      keyFile: './keys/[PRIVATE]',
      refreshToken: '[string:PRIVATE]',
      seedToken: '[string:PRIVATE]',
    }.toString();
  },
  toString() {
    return {
      ...this,
      accessToken: ' [ PRIVATE ] ',
      keyFile: './keys/[ PRIVATE ] ',
      refreshToken: ' [ PRIVATE ] ',
      seedToken: ' [ PRIVATE ] ',
    }.toString();
  },
};
