import { qtAPIv2_0 } from '../..';
import { getMyToken } from '../../resources/side-effects';
import { redisProxyHandler } from '../../resources/side-effects/proxies/client/redis/redis-client-proxy-handler-class';


export async function mainRedis() {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  void proxyFactory;
  const { qtApi, apiCallQ } = await qtAPIv2_0({
    accountCallsPerHour: 30000,
    accountCallsPerSecond: 30,
    marketCallsPerHour: 1500,
    marketCallsPerSecond: 20,
    proxyFactory,
    token: getMyToken,
  });

  // ech0(await qtApi.account.getServerTime());
  return { apiCallQ, qtApi };
}
