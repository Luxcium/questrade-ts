import { ClientProxyHandler } from '../../../..';
import { sideEffects } from '../..';
import { ClientStatic } from '../../types';

const { getHttpClient } = sideEffects;

export const clientProxyHandlerFactoryFunction = (
  client: ClientStatic = getHttpClient(),
) => (
  handler: ProxyHandler<ClientStatic>,
  httpDataEndPointConnector: boolean = true,
  oAuthHttpCredentials: boolean = false,
): ClientProxyHandler => {
  const newProxy: ClientProxyHandler = new Proxy(client, handler);
  void httpDataEndPointConnector;
  void oAuthHttpCredentials;
  // newProxy.httpDataEndPointConnector = !!httpDataEndPointConnector!;
  // newProxy.oAuthHttpCredentials = !!oAuthHttpCredentials!;
  return newProxy;
};
