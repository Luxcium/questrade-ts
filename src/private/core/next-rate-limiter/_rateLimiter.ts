import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter2 } from './';

function _rateLimiter2<R>(
  httpClient: ClientStatic,
  _config: ClientRequestConfig,
  possiblePerSeconds: number,
) {
  // const possiblePerSeconds =
  //   credentials?.remainingRequests?.possiblePerSeconds ?? 21;
  return _rateLimiter<R>(httpClient, _config, possiblePerSeconds);
}

function _rateLimiter<R>(
  httpClient: ClientStatic,
  _config: ClientRequestConfig,
  possiblePerSeconds: number,
) {
  if (possiblePerSeconds <= 20 && possiblePerSeconds > 0) {
    //
    const requestLimiter = requestPerSecondLimiter2(possiblePerSeconds);

    // INFO: RATE LIMITER ******************************************************
    return requestLimiter(
      async (): Promise<ClientResponse<R>> => httpClient(_config),
    );
  } else {
    // INFO: NO RATE LIMITER ***************************************************
    return httpClient(_config);
  }
}

export { _rateLimiter2, _rateLimiter };
