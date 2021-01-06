import { sideEffects } from '../../resources/side-effects/default-behaviour';
import { ClientStatic } from '../../resources/side-effects/types';

const { getAxiosLikeClient } = sideEffects;
export const clientProxyFactory = (
  handler: ProxyHandler<ClientStatic>,
  client: ClientStatic = getAxiosLikeClient(),
): ClientStatic => {
  return new Proxy(client, handler);
};
