import type { ClientRequestConfig, ProxyHandlerOptions } from '../../resources/side-effects/types';
import type { Credentials, Logger, ProxyFactory_ } from '../../typescript';
import type { ApiCallQ_ } from './next-rate-limiter/queue';
declare type HttpDataEndPointConnector = {
    apiCallQ: ApiCallQ_;
    config: ClientRequestConfig;
    credentials: Credentials;
    proxy: ProxyFactory_ | null;
    errorlog: Logger;
    handlerOptions: ProxyHandlerOptions;
};
declare function _httpDataEndPointConnector<DATA>({ apiCallQ, config, credentials, proxy, errorlog, handlerOptions, }: HttpDataEndPointConnector): Promise<DATA>;
export { _httpDataEndPointConnector };
//# sourceMappingURL=XX-http-data-end-point-connector-XX.d.ts.map