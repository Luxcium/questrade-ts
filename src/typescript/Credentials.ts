import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';
import { ITimeRateLimiter, UrlDataAndHashes } from '.';

export interface Credentials {
  accessToken: string;
  accountNumber: string;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  config_?: ClientRequestConfig;
  configUrl_?: string;
  expiresAt_?: string | number | Date;
  expiresAt?: string;
  expiresAtRaw?: number;
  expiresIn: number;
  fromCache: boolean;
  hashes?: UrlDataAndHashes;
  keyDir: string;
  keyFile: string;
  practice: boolean;
  refreshToken: string;
  remainingRequests?: ITimeRateLimiter;
  response_?: ClientResponse<any>;
  seedToken: string;
  serverTime_?: string | number | Date;
  serverTime?: Date;
  serverTimeRaw?: number;
  tokenExpiration?: Date;
  tokenType: string;
  urlTimeUTC?: Date;
  xRatelimitRemaining?: number;
  xRatelimitReset?: number;
  toString(): string;
  toValue(): string;
}
