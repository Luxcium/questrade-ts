import { sideEffects } from '../../resources/side-effects';
import {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
  ProxyHandlerOptions,
} from '../../resources/side-effects/types';
import { Credentials, Logger, ProxyFactory_ } from '../../typescript';
import {
  _echoStatus,
  _rateLimiter,
  _updateCredentials,
} from './end-point-connector';

const { getHttpClient } = sideEffects;

function _httpDataEndPointConnector<DATA>(
  config: ClientRequestConfig,
  credentials?: Credentials,
  proxy?: ProxyFactory_,
  useNewRateLimiter: boolean = false,
) {
  return async (
    errorlog: Logger,
    handlerOptions: ProxyHandlerOptions,
  ): Promise<DATA> => {
    let httpClient: <S>(conf: ClientRequestConfig) => ClientPromise<S> = (
      conf: ClientRequestConfig,
    ) => getHttpClient()(conf);

    if (proxy?.httpDataEndPointConnector && proxy?.activate) {
      const someName = proxy.activate!(handlerOptions);

      httpClient = (conf: ClientRequestConfig) => someName(conf);
    }

    const possiblePerSeconds =
      credentials?.remainingRequests?.possiblePerSeconds ?? 21;

    const response: ClientResponse<DATA> = await _rateLimiter<DATA>({
      config,
      credentials,
      httpClient,
      maxPerSeconds: 20,
      possiblePerSeconds,
      useNewRateLimiter,
    });

    if (response.data) {
      _updateCredentials(config, response, credentials);

      return response.data;
    }

    // ERROR HANDLER: ECHO STATUS ON ERROR //-!
    _echoStatus(response, credentials);
    throw new Error(...errorlog("Can't retrive data from call to API"));
  };
}

export { _httpDataEndPointConnector };
