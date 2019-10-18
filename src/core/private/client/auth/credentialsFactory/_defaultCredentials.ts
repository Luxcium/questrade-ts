import { Credentials } from '../../../../typescript';

export const _defaultCredentials: Credentials = {
  accessToken: '',
  accountNumber: '11111111',
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
    return JSON.parse(
      JSON.stringify({
        ...this,
        accessToken: '[string:PRIVATE]',
        keyFile: './keys/[PRIVATE]',
        refreshToken: '[string:PRIVATE]',
        seedToken: '[string:PRIVATE]',
      })
    );
  },
  toString() {
    return JSON.stringify({
      ...this,
      accessToken: ' [ PRIVATE ] ',
      keyFile: './keys/[ PRIVATE ] ',
      refreshToken: ' [ PRIVATE ] ',
      seedToken: ' [ PRIVATE ] ',
    });
  },
};
