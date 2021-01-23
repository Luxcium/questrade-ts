import { ClientHandlerFactory, Credentials } from '../../../..';
import { sideEffects } from '../..';
import { ClientStatic, ProxyHandlerOptions } from '../../types';

const { getHttpClient } = sideEffects;

export const clientProxyHandlerFactory = (
  credentials?: Credentials,
  client: ClientStatic = getHttpClient(),
) => (
  proxyHandler: (
    proxyHandlerOptions: ProxyHandlerOptions,
  ) => ProxyHandler<ClientStatic>,
  httpDataEndPointConnector: boolean = true,
  oAuthHttpCredentials: boolean = false,
): ClientHandlerFactory => {
  const newProxy: ClientHandlerFactory = {};
  newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
    new Proxy(client, proxyHandler(proxyHandlerOptions));
  newProxy.httpDataEndPointConnector = httpDataEndPointConnector;
  newProxy.oAuthHttpCredentials = oAuthHttpCredentials;
  newProxy.credendials = credentials;
  return newProxy;
};
