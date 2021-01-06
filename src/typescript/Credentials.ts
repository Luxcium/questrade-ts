import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';
import { ITimeRateLimiter, UrlDataAndHashes } from '.';

export interface Credentials {
  accessToken: string;
  accountNumber: string;
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
  response_?: ClientResponse<any>;
  config_?: ClientRequestConfig;
  urlTimeUTC?: Date;
  apiServer: string;
  configUrl_?: string;
  serverTime_?: string | number | Date;
  expiresAt_?: string | number | Date;
  hashes?: UrlDataAndHashes;
  toString(): string;
  toValue(): string;
}
