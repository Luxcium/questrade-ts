import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects';
import { redisClientProxyHandler } from '../../resources/side-effects/proxies';
import { void0 } from '../../utils';

const { echo, errorlog, getMyToken, makeTedis } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));

const tedis = makeTedis();
(async function main() {
  const { qtApi } = await redeemToken(
    getMyToken(),
    redisClientProxyHandler(tedis, true, false),
    errorlog,
  );
  return (async function leadingPrime() {
    void0(await qtApi.account.getServerTime());
    void0((await qtApi.search.stock('aapl'))[0]);
    return tedis;
  })().catch(error =>
    errorlog('in leadingPrime from redis-modeling', error.message),
  );
})()
  .then(async () => {
    echo(await tedis.keys('URL:*'));
    echo(await tedis.keys('URLDATA:*'));
    echo(await tedis.keys('HYPER:*'));
    echo((await tedis.keys('count:*')).sort());
    return void 0;
  })
  .finally(() => {
    tedis.close();
  })
  .catch(error => errorlog('in main from redis-modeling', error.message));

/*
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
