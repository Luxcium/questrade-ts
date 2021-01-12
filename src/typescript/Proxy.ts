import { ClientStatic } from '../resources/side-effects/typescript';

/** IProxy placeholder will be an interface at term  */
export type ClientProxyHandler = ClientStatic & {
  activate?: () => ClientStatic;
  oAuthHttpCredentials?: boolean;
  httpDataEndPointConnector?: boolean;
};
