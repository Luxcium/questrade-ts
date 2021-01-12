import { ClientProxyHandler } from '../../../..';
import { sideEffects } from '../..';
import { ClientStatic } from '../../types';

const { getHttpClient } = sideEffects;

export const clientProxyHandlerFactoryFunction = (
  client: ClientStatic = getHttpClient(),
) => (
  handler: () => ProxyHandler<ClientStatic>,
  httpDataEndPointConnector: boolean = true,
  oAuthHttpCredentials: boolean = false,
): ClientProxyHandler => {
  const newProxy: any /*  ()=>ClientProxyHandler  */ = {}; // () => new Proxy(client, handler());
  newProxy.activate = () => new Proxy(client, handler());
  newProxy.httpDataEndPointConnector = httpDataEndPointConnector;
  newProxy.oAuthHttpCredentials = oAuthHttpCredentials;
  return newProxy;
};
