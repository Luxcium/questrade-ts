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
) {
  return async (
    errorlog: Logger,
    handlerOptions: ProxyHandlerOptions,
  ): Promise<R> => {
    // encodeURIComponent() _config
    // INFO: PROXY BLOCK START ***********************************************
    let httpClient: ClientStatic = getHttpClient();

    if (proxy?.httpDataEndPointConnector && proxy?.activate) {
      httpClient = proxy.activate(handlerOptions);
    }

    const possiblePerSeconds =
      credentials?.remainingRequests?.possiblePerSeconds ?? 21;
    // CALL: !!! 01 *call* _rateLimiter
    const response: ClientResponse = await _rateLimiter({
      _config,
      httpClient,
      maxPerSeconds: 20,
      possiblePerSeconds,
    });

    /*

  let response: ClientResponse;
 */
    _echoStatus(response, credentials); // INFO: ECHO STATUS ON ERROR *********

    const { data } = response;

    if (data) {
      _updateCredentials(_config, response, credentials);
      return data;
    }

    throw new Error(...errorlog("Can't retrive data from call to API"));
  };
}

export { _httpDataEndPointConnector };
