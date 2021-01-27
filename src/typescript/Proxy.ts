import { Credentials } from '.';
import {
  ClientStatic,
  ProxyHandlerOptions,
} from '../resources/side-effects/typescript';

/** IProxy placeholder will be an interface at term  */
export type ClientProxyHandlerFactory = ClientStatic & ProxyFactory_;

// export type ClientStaticHandlerFactory = ClientStatic;

export type ProxyFactory_ = {
  activate?: (options: ProxyHandlerOptions) => ClientStatic;
  oAuthHttpCredentials?: boolean;
  httpDataEndPointConnector?: boolean;
  credendials?: Credentials | null;
};
