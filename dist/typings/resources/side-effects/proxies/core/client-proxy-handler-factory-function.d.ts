import type { Credentials, ProxyFactory_ } from '../../../../typescript';
import type { ClientStatic, ProxyHandlerOptions } from '../../types';
export declare const clientProxyHandlerFactory: (credentials?: Credentials | undefined, client?: ClientStatic) => (proxyHandler: (proxyHandlerOptions: ProxyHandlerOptions) => ProxyHandler<ClientStatic>, httpDataEndPointConnector?: boolean, oAuthHttpCredentials?: boolean) => ProxyFactory_;
//# sourceMappingURL=client-proxy-handler-factory-function.d.ts.map