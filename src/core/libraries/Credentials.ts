export interface Credentials {
  accessToken: string;
  accountNumber: string | number;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  expiresAt?: string;
  expiresAtRaw?: number;
  expiresIn: number;
  keyDir: string;
  keyFile: string;
  practice: boolean;
  tokenExpiration?: Date;
  refreshToken: string;
  seedToken: string;
  serverTime?: Date;
  serverTimeRaw?: number;
  tokenType: string;
  toString: () => any;
  toValue: () => any;
}

export const qtDefaultCreds: Credentials = {
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
    };
  },
  toString() {
    return {
      ...this,
      accessToken: ' [ PRIVATE ] ',
      keyFile: './keys/[ PRIVATE ] ',
      refreshToken: ' [ PRIVATE ] ',
      seedToken: ' [ PRIVATE ] ',
    };
  },
};
