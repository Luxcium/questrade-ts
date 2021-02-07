import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';

function _rateLimiter<R>(configs: {
  httpClient: ClientStatic;
  _config: ClientRequestConfig;
  possiblePerSeconds: number;
  maxPerSeconds?: number | null;
}) {
  const { _config, httpClient, maxPerSeconds, possiblePerSeconds } = configs;

  if (possiblePerSeconds <= (maxPerSeconds || 20) && possiblePerSeconds > 0) {
    // FUNC CALL: requestPerSecondLimiter                                       //-&
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);

    // INFO: WITH RATE LIMITER                                                //-!
    // FUNC CALL: requestLimiter                                                //-&
    return requestLimiter(
      async (): Promise<ClientResponse<R>> => httpClient(_config),
    );
  } else {
    // INFO: NO RATE LIMITER                                                  //-!
    // FUNC CALL: httpClient                                                    //-&
    return httpClient(_config);
  }
}

export { _rateLimiter };
