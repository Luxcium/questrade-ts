import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { Credentials } from '../../../typescript';
import { limitingRequest } from '../requestPerSecondLimit';

async function _rateLimiter<R>(
  httpClient: ClientStatic,
  _config: ClientRequestConfig,
  credentials?: Credentials,
) {
  // INFO: RATE LIMITER Block Start ********************************************

  const possiblePerSeconds =
    credentials?.remainingRequests?.possiblePerSeconds ?? 21;
  let response: ClientResponse;

  response = await (possiblePerSeconds <= 20 && possiblePerSeconds > 0
    ? limitingRequest(
        async (): Promise<ClientResponse<R>> => httpClient(_config),
        possiblePerSeconds,
      )
    : httpClient(_config));
  return response;
}

export { _rateLimiter };
