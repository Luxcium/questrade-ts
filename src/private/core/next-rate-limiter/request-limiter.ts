import {
  ClientPromise,
  ClientRequestConfig,
} from '../../../resources/side-effects/types';
import { RateLimiterOptions } from '../../../typescript';
import { limitingRequest } from '../requestPerSecondLimit';

export const newRequestLimiter = <R>(
  options: RateLimiterOptions,
): ClientPromise<R> => {
  const { httpClient, config, maxPerSec, maxPerHour } = options;

  // cb(fn(args));
  void httpClient, maxPerSec, maxPerHour;
  return limitingRequest(
    async (conf: ClientRequestConfig = config) => httpClient<R>(conf),
    20,
  );
};
// newRequestLimiter
 