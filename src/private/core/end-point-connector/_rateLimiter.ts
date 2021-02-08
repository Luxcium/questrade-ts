import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';
import { newRequestLimiter } from '../requestPerSecondLimit/CORE_PerSecond_Limiter';

function _rateLimiter<R>(configs: {
  httpClient: ClientStatic;
  _config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
  isNewRateLimiterInFunction: boolean;
}) {
  const {
    _config,
    httpClient,
    maxPerSeconds,
    possiblePerSeconds,
    isNewRateLimiterInFunction,
  } = configs;

  if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);
    const httpCall = async (): Promise<ClientResponse<R>> =>
      httpClient(_config);

    if (isNewRateLimiterInFunction) {
      void 'something';
      // INFO: NEW RATE LIMITER //-!

      return newRequestLimiter({ args: _config, fn: httpClient });
    } else {
      void 'something else';
      // INFO: OLD RATE LIMITER //-!

      return requestLimiter(httpCall);
    }
  } else {
    // INFO: NO RATE LIMITER //-!

    return httpClient(_config);
  }
}

export { _rateLimiter };
