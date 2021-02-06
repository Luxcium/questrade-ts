import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';

// DEFINE: ??? 01 define _rateLimiter
function _rateLimiter<R>(configs: {
  httpClient: ClientStatic;
  _config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
}) {
  const { _config, httpClient, maxPerSeconds, possiblePerSeconds } = configs;

  if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
    // DEFINE: ??? 02 define requestLimiter
    // CALL: !!! 03 *call* requestPerSecondLimiter
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);

    // CALL: !!! 02 *call* requestLimiter
    // WITH RATE LIMITER                                              // SECTION:
    return requestLimiter(
      async (): Promise<ClientResponse<R>> => httpClient(_config),
    );
  } else {
    // NO RATE LIMITER                                                // SECTION:
    return httpClient(_config);
  }
}

export { _rateLimiter };
