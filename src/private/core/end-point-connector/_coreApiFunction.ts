import { ProxyHandlerOptions } from '../../../resources/side-effects/types';
import { Credentials, Logger, ProxyFactory_ } from '../../../typescript';
import { ApiCallQ_ } from '../next-rate-limiter/queue';
import { _httpDataEndPointConnector } from '../XX-http-data-end-point-connector-XX';
import { _coreApiConfig } from './_coreApiConfig';

function _coreApiFunction(
  credentials: Credentials,
  apiCallQ: ApiCallQ_,
  proxy: ProxyFactory_ | null,
  errorlog: Logger = (...error: any[]) => error,
) {
  void apiCallQ; // ~~>

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
          const getDataConfig = endPoint(postData);
          const clientDataGetter = _httpDataEndPointConnector<R>(
            apiCallQ,
            getDataConfig,
            credentials,
            proxy,
          );

          return clientDataGetter(errorlog, handlerOptions); // from _tryToGetData...
        };
      };
    };
  };
}

export { _coreApiFunction };
