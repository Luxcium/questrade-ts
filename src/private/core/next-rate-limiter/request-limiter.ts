import { RateLimiterOptions } from '../../../typescript';
import {
  limitingRequest,
  requestLimiterFactory,
} from '../requestPerSecondLimit';

export const newRequestLimiter = <R>(options: RateLimiterOptions) => {
  const {
    xRemaining,
    xReset,
    fn,
    cb,
    args,
    timeThen,
    maxPerSec,
    maxPerHour,
  } = options;

  // cb(fn(args));
  void xRemaining, xReset, fn, cb, args, timeThen, maxPerSec, maxPerHour;
  return limitingRequest(requestLimiterFactory)(20)(async () => fn<R>(args));
};
// newRequestLimiter
