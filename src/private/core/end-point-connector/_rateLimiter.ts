import {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
} from '../../../resources/side-effects/types';
import { Credentials } from '../../../typescript';
import { newRequestLimiter } from '../next-rate-limiter';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';

function _rateLimiter<R>(configs: {
  httpClient: (conf: ClientRequestConfig) => ClientPromise<any>;
  config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
  useNewRateLimiter: boolean;
  credentials?: Credentials;
}) {
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
      return newRequestLimiter({
        config,
        credentials,
        httpClient,
      });
    }
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
    const httpCall = async (): Promise<ClientResponse<R>> => httpClient(config);

    return requestLimiter(httpCall);
  }
  return httpClient(config);
}

export { _rateLimiter };
