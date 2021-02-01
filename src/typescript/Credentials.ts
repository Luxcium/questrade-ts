import { ITimeRateLimiter, UrlDataAndHashes } from '.';
import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';

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
  fromApi: boolean;
  fromCache: boolean;
  hashes?: UrlDataAndHashes;
  keyDir: string;
  keyFile: string;
  practice: boolean;
  proxy?: any;
  refreshToken: string;
  remainingRequests?: ITimeRateLimiter;
  response_?: ClientResponse<any>;
  seedToken: string;
  serverTime_?: string | number | Date;
  serverTime?: Date;
  serverTimeRaw?: number;
  tokenExpiration?: Date;
  tokenType: string;
  toString(): string;
  toValue(): string;
  urlTimeUTC?: Date;
  xRatelimitRemaining?: number;
  xRatelimitReset?: number;
}
