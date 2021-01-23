import { Tedis } from 'tedis';

import { ClientHandlerFactory, Credentials } from '../../../../..';
import { client, sideEffects } from '../../..';
import { ProxyHandlerOptions } from '../../../types';
import { redisClientProxyHandlerClass } from './redis-client-proxy-handler-class';

export function redisClientProxyHandler2(
  // tedisInstance: Tedis,
  mainProxyHandlerOptions: ProxyHandlerOptions,
  credentials: Credentials,
) {
  return clientProxyHandlerFactory(
    credentials,
    mainProxyHandlerOptions.httpConnectProxy ?? true,
    mainProxyHandlerOptions.oAuthHttpProxy ?? false,
  );
}

/*
  tedisInstance: Tedis,
  mainProxyHandlerOptions: ProxyHandlerOptions = {},

*/

export function clientHandlerFactory(
  tedisInstance: Tedis,
  specificProxyHandlerOptions: ProxyHandlerOptions,
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
  credentials?: Credentials,
) {
  return new redisClientProxyHandlerClass(
    tedisInstance,
    {
      ...mainProxyHandlerOptions,
      ...specificProxyHandlerOptions,
    },
    credentials,
  );
}

const { getHttpClient } = sideEffects;

function clientProxyHandlerFactory(
  credentials: Credentials,
  httpDataEndPointConnector: boolean = true,
  oAuthHttpCredentials: boolean = false,
) {
  const newProxy: ClientHandlerFactory = {};

  newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
    new Proxy(client, proxyHandler(proxyHandlerOptions));
  newProxy.httpDataEndPointConnector = httpDataEndPointConnector;
  newProxy.oAuthHttpCredentials = oAuthHttpCredentials;
  newProxy.credendials = credentials;
  return newProxy;
}

//  proxyHandler: (
//     proxyHandlerOptions: ProxyHandlerOptions,
//   ) => ProxyHandler<ClientStatic>,
//   client: ClientStatic = getHttpClient(),
