import { sideEffects } from '../../resources/side-effects';
import type {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
  ProxyHandlerOptions,
} from '../../resources/side-effects/types';
import type { Credentials, Logger, ProxyFactory_ } from '../../typescript';
import {
  _echoStatus,
  _rateLimiter,
  _updateCredentials,
} from './end-point-connector';
import type { ApiCallQ_ } from './next-rate-limiter/queue';

const { getHttpClient } = sideEffects;

function _httpDataEndPointConnector<DATA>(
  apiCallQ: ApiCallQ_,
  config: ClientRequestConfig,
  credentials: Credentials,
  proxy: ProxyFactory_ | null,
  useNewRateLimiter = false,
) {
  return async (
    errorlog: Logger,
    handlerOptions: ProxyHandlerOptions,
  ): Promise<DATA> => {
    let httpClient: <S>(conf: ClientRequestConfig) => ClientPromise<S> = async (
      conf: ClientRequestConfig,
    ) => getHttpClient()(conf);

    if (proxy?.httpDataEndPointConnector && proxy.activate) {
      const someName = proxy.activate(handlerOptions);

      httpClient = async (conf: ClientRequestConfig) => someName(conf);
    }

    const possiblePerSeconds =
      credentials.remainingRequests?.possiblePerSeconds ?? 21;

    // testing it with useNewRateLimiter = true
    useNewRateLimiter = true;
    const response: ClientResponse<DATA> = (await (useNewRateLimiter
      ? apiCallQ.addToQueue({
          config,
          fn: httpClient,
        })
      : _rateLimiter<DATA>({
          config,
          credentials,
          httpClient,
          maxPerSeconds: 20,
          possiblePerSeconds,
          useNewRateLimiter,
        }))) as ClientResponse<DATA>;

    if (response.data) {
      _updateCredentials(config, response, credentials);

      return response.data;
    }

    // eRROR HANDLER: ECHO STATUS ON ERROR //-!
    _echoStatus(response, credentials);
    throw new Error(...errorlog("Can't retrive data from call to API"));
  };
}

export { _httpDataEndPointConnector };
