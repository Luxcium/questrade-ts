import { redeemToken } from '../..';
import { makeTedis, sideEffects, Tedis } from '../../resources/side-effects';
import { redisClientProxyHandler } from '../../resources/side-effects/proxies';
import { void0 } from '../../utils';

const { errorlog, ech0, getMyToken } = sideEffects;

async function mainFunction(tedis: Tedis) {
  const { qtApi } = await redeemToken(
    getMyToken(),
    redisClientProxyHandler(tedis, {
      debug: false,
      httpDataEndPointConnector: true,
      oAuthHttpCredentials: false,
    }),
    errorlog,
  );

  void qtApi;
  void ech0;

  void0(await qtApi.search.stock('couche tard'));

  return tedis;
}

async function main() {
  return mainFunction(makeTedis())
    .then(async (tedis: Tedis) => {
      return tedis.close();
    })
    .catch(error => errorlog('in main from redis-modeling', error.message));
}
// main();
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
