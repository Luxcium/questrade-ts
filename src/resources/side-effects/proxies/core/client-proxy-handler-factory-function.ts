import { sideEffects } from '../..';
import { ClientStatic } from '../../types';

const { getHttpClient } = sideEffects;
export const clientProxyHandlerFactoryFunction = (
  client: ClientStatic = getHttpClient(),
) => (handler: ProxyHandler<ClientStatic>): ClientStatic => {
  return new Proxy(client, handler);
};