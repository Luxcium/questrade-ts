import { Credentials } from '../../..';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
} from '../../../resources/side-effects/types';
import { requestPerSecondLimiter } from '../requestPerSecondLimit';

async function _rateLimiter<R>(
  httpClient: ClientStatic,
  _config: ClientRequestConfig,
  credentials?: Credentials,
) {
  // INFO: RATE LIMITER Block Start ********************************************

  const possiblePerSeconds =
    credentials?.remainingRequests?.possiblePerSeconds ?? 21;
  let response: ClientResponse;

  if (possiblePerSeconds <= 20) {
    //
    const requestLimiter = requestPerSecondLimiter(possiblePerSeconds);

    response = await requestLimiter(
      async (): Promise<ClientResponse<R>> => httpClient(_config),
    );
  } else {
    // INFO: NO RATE LIMITER Block Start ***************************************

    response = await httpClient(_config);
  }
  return response;
}

export { _rateLimiter };
