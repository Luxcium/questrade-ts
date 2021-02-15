import {
  ClientStatic,
  ProxyHandlerOptions,
} from '../resources/side-effects/typescript';
import { Credentials } from '.';

/** IProxy placeholder will be an interface at term  */
export type ClientProxyHandlerFactory = ClientStatic & ProxyFactory_;

// Export type ClientStaticHandlerFactory = ClientStatic;

export type ProxyFactory_ = {
  activate?: (options: ProxyHandlerOptions) => ClientStatic;
  oAuthHttpCredentials?: boolean;
  httpDataEndPointConnector?: boolean;
  credendials?: Credentials | null;
};
