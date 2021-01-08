import { sideEffects } from '../side-effects/default-behaviour';
import { ClientStatic } from '../side-effects/types';

const { getHttpClient } = sideEffects;
export const clientProxyFactory = (
  handler: ProxyHandler<ClientStatic>,
  client: ClientStatic = getHttpClient(),
): ClientStatic => {
  return new Proxy(client, handler);
};
