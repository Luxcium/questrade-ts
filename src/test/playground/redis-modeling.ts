import { redeemToken } from '../..';
import {
  errorlog,
  getMyToken,
  makeTedis,
  Tedis,
} from '../../resources/side-effects';
import { redisProxyHandler } from '../../resources/side-effects/proxies/client/redis/redis2-client-proxy-handler-class';
/*
    tedis: Tedis,
    redisinstance: IoRedis | null,
    jsonRedis: StaticJSONCache,
    handlerOptions: ProxyHandlerOptions,
    credentials?: Credentials,
 */

async function mainFunction(tedis: Tedis) {
  const proxyFactory = redisProxyHandler({
    httpConnectProxy: true,
  });

  const { qtApi } = await redeemToken({
    proxyFactory,
    refreshToken: { token: getMyToken() },
  });

  await qtApi.search.stock('couche tard');

  return () => tedis.close();
}

async function main() {
  return mainFunction(makeTedis({ port: 6379 }))
    .then((tedisClose: () => any) => tedisClose())
    .catch(error => errorlog('in main from redis-modeling', error.message));
}

main();

export { main };
/*

 //

  // void0(await tedis.keys('URL:*'));
  // void0(await tedis.keys('URLDATA:*'));
  // void0(await tedis.keys('HYPER:*'));
  const step1 = ech0((await tedis.keys('count:*')).sort());
  void0(step1);
  // void0(await qtApi.account.getServerTime());

  // const step2 = step1.map(async item => {
  //   const count = (await tedis.command('PFCOUNT', item)) as number; // DEL
  //   if (count === 1) {
  //     tedis.command('DEL', item);
  //     return 0;
  //   }
  //   return count;
  // });

  // void0(step2);
  // const lastStep = await Promise.all(step2);
  // echo(lastStep);

import { redeemToken } from '../..';
import { sideEffects, Tedis } from '../../resources/side-effects';
import { httpHashLoggerClientProxyHandler } from '../../resources/side-effects/proxies';
import { getSymboIdByStockSymbol, void0 } from '../../utils';

const { ech0, errorlog, getMyToken, makeTedis } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main(): Promise<Tedis> {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpHashLoggerClientProxyHandler,
  );

  void0(credentials);
  void0(qtApi);
  return (async (): Promise<Tedis> => {
    const getSymbolId = getSymboIdByStockSymbol(qtApi);
    void ech0(await getSymbolId('AAPL'));
    const tedis = makeTedis({ port: 6379 });

    ech0(await tedis.keys('*'));
    // const redis = ech0(createClient(6379));
    // void ech0(redis.PING());
    return tedis;
  })().then(t => t);
}
main()
  .then(t => t.close())
  .catch(error => errorlog(error.message));

 */
