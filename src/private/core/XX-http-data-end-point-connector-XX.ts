import { sideEffects } from '../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
  ProxyHandlerOptions,
} from '../../resources/side-effects/types';
import { Credentials, Logger, ProxyFactory_ } from '../../typescript';
import {
  _echoStatus,
  _rateLimiter,
  _updateCredentials,
} from './end-point-connector';

const { getHttpClient } = sideEffects;

function _httpDataEndPointConnector<R>(
  _config: ClientRequestConfig,
  credentials?: Credentials,
  proxy?: ProxyFactory_,
  isNewRateLimiterInFunction: boolean = false,
) {
  return async (
    errorlog: Logger,
    handlerOptions: ProxyHandlerOptions,
  ): Promise<R> => {
    let httpClient: ClientStatic = getHttpClient();

    if (proxy?.httpDataEndPointConnector && proxy?.activate) {
      // INFO: PROXY BLOCK START //-!
      httpClient = proxy.activate(handlerOptions);
    }

    const possiblePerSeconds =
      credentials?.remainingRequests?.possiblePerSeconds ?? 21;
    const response: ClientResponse = await _rateLimiter({
      _config,
      httpClient,
      isNewRateLimiterInFunction,
      maxPerSeconds: 22,
      possiblePerSeconds,
    });

    const { data } = response;

    if (data) {
      _updateCredentials(_config, response, credentials);
      return data; // ←: RETURN                                                 !
    }

    // ERROR HANDLER: ECHO STATUS ON ERROR //-?
    _echoStatus(response, credentials);
    throw new Error(...errorlog("Can't retrive data from call to API"));
  };
}

export { _httpDataEndPointConnector };
