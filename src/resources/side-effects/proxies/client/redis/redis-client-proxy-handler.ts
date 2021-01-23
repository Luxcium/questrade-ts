import { Tedis } from 'tedis';

import { ClientHandlerFactory, Credentials } from '../../../../..';
import { ProxyHandlerOptions } from '../../../types';
import { clientProxyHandlerFactory } from '../..';
import { redisClientProxyHandlerClass } from './redis-client-proxy-handler-class';

export const redisClientProxyHandler = (
  tedisInstance: Tedis,
  mainProxyHandlerOptions: ProxyHandlerOptions = {},
): ((credentials?: Credentials) => ClientHandlerFactory) => (
  credentials?: Credentials,
) =>
  clientProxyHandlerFactory(credentials)(
    (specificProxyHandlerOptions: ProxyHandlerOptions) =>
      new redisClientProxyHandlerClass(
        tedisInstance,
        {
          ...mainProxyHandlerOptions,
          ...specificProxyHandlerOptions,
        },
        credentials,
      ),
    mainProxyHandlerOptions.httpConnectProxy ?? true,
    mainProxyHandlerOptions.oAuthHttpProxy ?? false,
  );
