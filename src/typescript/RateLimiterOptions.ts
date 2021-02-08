import {
  ClientRequestConfig,
  ClientResponse,
} from '../resources/side-effects/types';

export interface RateLimiterOptions {
  xRemaining?: number;
  xReset?: number;
  fn: <R>(arg: ClientRequestConfig) => ClientResponse<R> | any;
  cb?: any;
  args?: any;
  timeThen?: number;
  maxPerSec?: number;
  maxPerHour?: number;
}

export type Ŋ = RateLimiterOptions;
