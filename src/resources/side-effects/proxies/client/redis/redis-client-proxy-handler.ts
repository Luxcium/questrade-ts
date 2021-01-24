import { Tedis } from 'tedis';
import { getHttpClient } from '../../..';
import { ClientHandlerFactory, Credentials } from '../../../../..';
import { ClientStatic, ProxyHandlerOptions } from '../../../types';
import { redisClientProxyHandlerClass } from './redis-client-proxy-handler-class';

type CredentialsProxyHandler = (
  credentials?: Credentials,
) => ClientHandlerFactory;

export function redisClientProxyHandler(
  tedisInstance: Tedis,
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
): CredentialsProxyHandler {
  return function clientHandlerFactory(credentials?: Credentials) {
    const client: ClientStatic = getHttpClient();
    const newProxy: ClientHandlerFactory = {};

    newProxy.activate = (proxyHandlerOptions: ProxyHandlerOptions) =>
      new Proxy(
        client,
        new redisClientProxyHandlerClass(
          tedisInstance,
          null,
          null,
          {
            ...mainProxyHandlerOptions,
            ...proxyHandlerOptions,
          },
          credentials,
        ),
      );
    newProxy.httpDataEndPointConnector =
      mainProxyHandlerOptions.httpConnectProxy ?? true;
    newProxy.oAuthHttpCredentials =
      mainProxyHandlerOptions.oAuthHttpProxy ?? false;
    newProxy.credendials = credentials;

    return newProxy;
  };
}
