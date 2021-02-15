import {
  ClientPromise,
  ClientRequestConfig,
} from '../../../resources/side-effects/types';
import { Credentials } from '../../../typescript';
import { newRequestLimiter } from '../next-rate-limiter';
import { limitingRequest } from '../requestPerSecondLimit';

function _rateLimiter<R>(configs: {
  httpClient: (conf: ClientRequestConfig) => ClientPromise<any>;
  config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
  useNewRateLimiter: boolean;
  credentials?: Credentials;
}): ClientPromise<R> {
  // Function limitingRequest<T>(fn: Function, hertz?: number): Promise<T>
  const {
    config,
    httpClient,
    maxPerSeconds,
    possiblePerSeconds,
    useNewRateLimiter,
    credentials,
  } = configs;

  if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
    if (useNewRateLimiter) {
      return newRequestLimiter<R>({
        config,
        credentials,
        httpClient,
      });
    }

    // Const requestLimiter = limitingRequest; //(possiblePerSeconds); ClientPromise<R>
    const httpCall: () => ClientPromise<R> = async () => httpClient(config);

    return limitingRequest(httpCall, possiblePerSeconds);
  }

  // INFO: httpClient: <R>(conf: ClientRequestConfig) => ClientPromise<R>     //-!
  return httpClient(config);
}

export { _rateLimiter };
