export interface Credentials {
  seedToken: string;
  accessToken: string;
  accountNumber: string | number;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  expiresIn: number;
  keyDir: string;
  keyFile: string;
  practice: boolean;
  refreshToken: string;
  tokenType: string;
  qtMarketsNames: any;
}

export const qtDefaultCreds: Credentials = {
  accountNumber: '',
  apiVersion: 'v1',
  keyDir: './keys',
  keyFile: '',
  practice: false,
  seedToken: '',
  expiresIn: 0,
  tokenType: '',
  refreshToken: '',
  accessToken: '',
  apiUrl: '',
  apiServer: '',
  authUrl: '',
  qtMarketsNames: '',
};
