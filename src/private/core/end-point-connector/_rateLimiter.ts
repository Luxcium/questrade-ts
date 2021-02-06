import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';

// ////  :-: ??? 01 define _rateLimiter
function _rateLimiter<R>(configs: {
  httpClient: ClientStatic;
  _config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
}) {
  const { _config, httpClient, maxPerSeconds, possiblePerSeconds } = configs;

  if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
    // ////  :-: ??? 02 define requestLimiter
    // ////  :-: !!! 03 *call* requestPerSecondLimiter
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);

    // ////  :-: !!! 02 *call* requestLimiter
    // ////  !-: WITH RATE LIMITER
    return requestLimiter(
      async (): Promise<ClientResponse<R>> => httpClient(_config),
    );
  } else {
    // ////  !-: NO RATE LIMITER
    return httpClient(_config);
  }
}

export { _rateLimiter };
