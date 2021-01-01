import { AxiosResponse } from 'axios';

import { CoreApiConfig, ITimeRateLimiter } from '.';

export interface Credentials {
  accessToken: string;
  accountNumber: string;
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
  remainingRequests?: ITimeRateLimiter;
  response_?: AxiosResponse<any>;
  config_?: CoreApiConfig<any>;
  urlHashHex?: string;
  urlHash64?: string;
  urlTime?: Date;
  serverTime_?: string | number | Date;
  expiresAt_?: string | number | Date;
  toString(): string;
  toValue(): string;
}
