import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';
import {
  ITimeRateLimiter,
  ProxyFactory_,
  UrlDataAndHashes,
  VebosityLevel,
} from '.';

export interface Credentials {
  accessToken: string;
  accountCallsPerHour?: number;
  accountCallsPerSecond?: number;
  accountNumber: string;
  apiServer: string;
  apiUrl: string;
  apiVersion: string;
  authUrl: string;
  caching?: boolean;
  config_?: ClientRequestConfig;
  configUrl_?: string;
  debugVebosity: VebosityLevel;
  errorloger?: any;
  expiresAt_?: string | number | Date;
  expiresAt?: string;
  expiresAtRaw?: number;
  expiresIn: number;
  fromApi: boolean;
  fromCache: boolean;
  hashes?: UrlDataAndHashes;
  keyDir: string;
  keyFile: string;
  marketCallsPerHour?: number;
  marketCallsPerSecond?: number;
  practiceAccount: boolean;
  proxy?: any;
  proxyFactory?: (credentials?: Credentials) => ProxyFactory_;
  refreshToken: string;
  remainingRequests?: ITimeRateLimiter;
  response_?: ClientResponse<any>;
  seedToken: string;
  serverTime_?: string | number | Date;
  serverTime?: Date;
  serverTimeRaw?: number;
  testing?: boolean;
  tokenExpiration?: Date;
  tokenType: string;
  toString(): string;
  toValue(): string;
  urlTimeUTC?: Date;
  xRatelimitRemaining?: number;
  xRatelimitReset?: number;
}
