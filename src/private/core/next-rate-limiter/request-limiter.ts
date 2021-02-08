import { RateLimiterOptions } from '../../../typescript';
import {
  limitingRequest,
  requestLimiterFactory,
} from '../requestPerSecondLimit';

export const newRequestLimiter = (options: RateLimiterOptions) => {
  const {
    xRemaining,
    xReset,
    httpClient,
    config,
    cb,
    credentials,
    timeThen,
    maxPerSec,
    maxPerHour,
  } = options;

  // cb(fn(args));
  void xRemaining,
    xReset,
    httpClient,
    cb,
    credentials,
    timeThen,
    maxPerSec,
    maxPerHour;
  return limitingRequest(requestLimiterFactory)(20)(async () =>
    httpClient(config),
  );
};
// newRequestLimiter
