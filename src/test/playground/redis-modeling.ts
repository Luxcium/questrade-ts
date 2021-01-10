/* eslint-disable unicorn/no-keyword-prefix */

import { redeemToken } from '../..';
import {
  echo,
  errorlog,
  getMyToken,
  makeTedis,
} from '../../resources/side-effects';
import { httpRedisClientProxyHandler } from '../../resources/side-effects/proxies';

// const { echo, errorlog, getMyToken, makeTedis } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));

const tedis = makeTedis();
(async function main() {
  const { qtApi } = await redeemToken(
    getMyToken(),
    httpRedisClientProxyHandler(tedis),
  );
  return (async function leadingPrime() {
    echo(await qtApi.account.getServerTime());
    // echo((await qtApi.search.stock('aapl'))[0]);
    return tedis;
  })().catch(error => errorlog('in leadingPrime', error.message));
})()
  .then()
  .catch(error => errorlog('in main', error.message))
  .finally(() => tedis.close());
