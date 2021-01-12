/* eslint-disable unicorn/no-keyword-prefix */

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
    redisClientProxyHandler(tedis),
    errorlog,
  );
  return (async function leadingPrime() {
    void0(await qtApi.account.getServerTime());
    // void0((await qtApi.search.stock('aapl'))[0]);
  })().catch(error => errorlog('in leadingPrime', error.message));
})()
  .then(async () => echo(await tedis.keys('*')))
  .finally(() => {
    tedis.close();
  })
  .catch(error => errorlog('in main', error.message));
