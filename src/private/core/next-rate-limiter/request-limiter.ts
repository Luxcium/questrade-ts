import {
  ClientPromise,
  ClientRequestConfig,
} from '../../../resources/side-effects/types';
import { RateLimiterOptions } from '../../../typescript';
import { limitingRequest } from '../requestPerSecondLimit';
import { ApiCallQ_ } from './queue';

export const newRequestLimiter = <R>(
  options: RateLimiterOptions,
): ClientPromise<R> => {
  const { httpClient, config, maxPerSec, maxPerHour } = options;

  // cb(fn(args));
  void httpClient, maxPerSec, maxPerHour;

  const callQueue = new ApiCallQ_();
  const call = callQueue.addToQueue<R>({ config, fn: httpClient });

  void call;

  return limitingRequest(
    async (conf: ClientRequestConfig = config) => httpClient<R>(conf),
    20,
  );
};
// newRequestLimiter
