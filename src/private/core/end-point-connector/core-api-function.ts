import type { ProxyHandlerOptions } from '../../../resources/side-effects/types';
import type { Credentials, Logger, ProxyFactory_ } from '../../../typescript';
import type { ApiCallQ_ } from '../next-rate-limiter/queue';
import { _httpDataEndPointConnector } from '../XX-http-data-end-point-connector-XX';
import { _coreApiConfig } from './core-api-config';

function _coreApiFunction(
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ProxyFactory_ | null,
  errorlog: Logger = (...error: any[]) => error,
) {
  // ~~>
  return (VERB: 'GET' | 'POST') => {
    // ~~>
    return <D>(postData: D | null) => {
      // ~~>
      return <R>(
        endpoint: string,
        handlerOptions: ProxyHandlerOptions /* = {} */,
      ) => {
        // ~~>
        return async (): Promise<R> => {
          const configBuilder = _coreApiConfig(credentials);
          const getEndPoint = configBuilder(VERB);
          const endPoint = getEndPoint(endpoint);
          const config = endPoint(postData);

          return _httpDataEndPointConnector<R>({
            apiCallQ,
            config,
            credentials,
            errorlog,
            handlerOptions,
            proxy,
          });
        };
      };
    };
  };
}

export { _coreApiFunction };
