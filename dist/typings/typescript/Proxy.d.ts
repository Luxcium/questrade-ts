import { ClientStatic, ProxyHandlerOptions } from '../resources/side-effects/typescript';
import { Credentials } from '.';
/** iProxy placeholder will be an interface at term  */
export declare type ClientProxyHandlerFactory = ClientStatic & ProxyFactory_;
export declare type ProxyFactory_ = {
    activate?: (options: ProxyHandlerOptions) => ClientStatic;
    oAuthHttpCredentials?: boolean;
    httpDataEndPointConnector?: boolean;
    credendials?: Credentials | null;
};
//# sourceMappingURL=Proxy.d.ts.map