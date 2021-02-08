import {
  ClientPromise,
  ClientRequestConfig,
} from '../resources/side-effects/types';
import { Credentials } from '.';

export interface RateLimiterOptions {
  cb?: any;
  config: ClientRequestConfig;
  credentials?: Credentials;
  httpClient: <R>(conf: ClientRequestConfig) => ClientPromise<R>;
  maxPerHour?: number;
  maxPerSec?: number;
  maxPerSeconds?: number | null;
  possiblePerSeconds?: number;
  timeThen?: number;
  xRemaining?: number;
  xReset?: number;
}

export type Ŋ = RateLimiterOptions;
