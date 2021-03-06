import { sideEffects } from '../../resources/side-effects';
import type {
  ClientPromise,
  ClientRequestConfig,
  ClientResponse,
  ProxyHandlerOptions,
} from '../../resources/side-effects/types';
import type { Credentials, Logger, ProxyFactory_ } from '../../typescript';
import { _echoStatus, _updateCredentials } from './end-point-connector';
import type { ApiCallQ_ } from './next-rate-limiter/queue';

const { getHttpClient } = sideEffects;
type HttpDataEndPointConnector = {
  apiCallQ: ApiCallQ_;
  config: ClientRequestConfig;
  credentials: Credentials;
  proxy: ProxyFactory_ | null;
  errorlog: Logger;
  handlerOptions: ProxyHandlerOptions;
};
async function _httpDataEndPointConnector<DATA>({
  apiCallQ,
  config,
  credentials,
  proxy,
  errorlog,
  handlerOptions,
}: HttpDataEndPointConnector) {
  try {
    let httpClient: <S>(conf: ClientRequestConfig) => ClientPromise<S> = async (
      conf: ClientRequestConfig,
    ) => getHttpClient()(conf);

    if (proxy?.httpDataEndPointConnector && proxy.activate) {
      const someName = proxy.activate(handlerOptions);

      httpClient = async (conf: ClientRequestConfig) => someName(conf);
    }

    const response: ClientResponse<DATA> = await apiCallQ.addApiCallToQueue({
      config,
      fn: httpClient,
    });

    if (response.status !== 200) {
      console.error('CONFIG:', response.config);
      console.error('HEADERS:', response.headers);
      console.error('DATA:', response.data);
      console.error('STATUS:', response.status);
      console.error('STATUSTEXT:', response.statusText);
    }

    if (response?.data) {
      _updateCredentials(config, response, credentials);

      return response.data;
    }

    _echoStatus(response, credentials);
  } catch (error) {
    // eRROR HANDLER: ECHO STATUS ON ERROR //-!

    throw new Error(
      ...errorlog(
        `ERROR: Can't retrive data from call to API (${error.message})`,
      ),
    );
  }

  throw new Error(...errorlog("Can't complete call to API"));
}
// }

export { _httpDataEndPointConnector };
