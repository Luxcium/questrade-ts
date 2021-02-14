import { Credentials, ProxyFactory_ } from '../../../../typescript';
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
): ProxyFactory_ => {
  const newProxy: ProxyFactory_ = {};

  newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
    new Proxy(client, proxyHandler(proxyHandlerOptions));
  newProxy.httpDataEndPointConnector = httpDataEndPointConnector;
  newProxy.oAuthHttpCredentials = oAuthHttpCredentials;
  newProxy.credendials = credentials;

  return newProxy;
};
