import { sideEffects } from '../../resources/side-effects';
import {
  ClientRequestConfig,
  ClientResponse,
  ClientStatic,
  ProxyHandlerOptions,
} from '../../resources/side-effects/types';
import { ClientHandlerFactory, Credentials, Logger } from '../../typescript';
import {
  _echoStatus,
  _rateLimiter,
  _updateCredentials,
} from './end-point-connector';

const { getHttpClient } = sideEffects;

function _httpDataEndPointConnector<R>(
  _config: ClientRequestConfig,
  credentials?: Credentials,
  proxy?: ClientHandlerFactory,
) {
  return async (
    errorlog: Logger,
    handlerOptions: ProxyHandlerOptions,
  ): Promise<R> => {
    // INFO: PROXY Block Start ***********************************************

    let httpClient: ClientStatic = getHttpClient();
    if (proxy?.httpDataEndPointConnector && proxy?.activate) {
      httpClient = proxy.activate(handlerOptions);
    }

    // INFO: RESPONSE FROM RATE LIMITER **************************************
    const response: ClientResponse = await _rateLimiter(
      httpClient,
      _config,
      credentials,
    );

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
