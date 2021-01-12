import { ClientStatic } from '../resources/side-effects/typescript';

/** IProxy placeholder will be an interface at term  */
export type ClientProxyHandler = ClientStatic & {
  oAuthHttpCredentials?: boolean;
  httpDataEndPointConnector?: boolean;
};
