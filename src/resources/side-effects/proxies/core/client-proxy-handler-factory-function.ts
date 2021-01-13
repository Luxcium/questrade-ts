import { ClientStaticHandlerFactory } from '../../../..';
import { sideEffects } from '../..';
import { ClientStatic, ProxyHandlerOptions } from '../../types';

const { getHttpClient } = sideEffects;

export const clientProxyHandlerFactory = (
  client: ClientStatic = getHttpClient(),
) => (
  proxyHandler: (
    proxyHandlerOptions: ProxyHandlerOptions,
  ) => ProxyHandler<ClientStatic>,
  httpDataEndPointConnector: boolean = true,
  oAuthHttpCredentials: boolean = false,
): ClientStaticHandlerFactory => {
  const newProxy: ClientStaticHandlerFactory = {};
  newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
    new Proxy(client, proxyHandler(proxyHandlerOptions));
  newProxy.httpDataEndPointConnector = httpDataEndPointConnector;
  newProxy.oAuthHttpCredentials = oAuthHttpCredentials;

  return newProxy;
};
