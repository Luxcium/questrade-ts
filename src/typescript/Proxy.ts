import {
  ClientStatic,
  ProxyHandlerOptions,
} from '../resources/side-effects/typescript';

/** IProxy placeholder will be an interface at term  */
export type ClientProxyHandlerFactory = ClientStatic &
  ClientStaticHandlerFactory;

// export type ClientStaticHandlerFactory = ClientStatic;

export type ClientStaticHandlerFactory = {
  activate?: (options: ProxyHandlerOptions) => ClientStatic;
  oAuthHttpCredentials?: boolean;
  httpDataEndPointConnector?: boolean;
};
