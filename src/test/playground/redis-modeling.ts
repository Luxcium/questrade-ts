import { Tedis } from 'tedis';

import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects/default-behaviour';
import {
  getSymboIdByStockSymbol,
  httpClientConsoleLogHashesProxyHandler,
  id0,
  void0,
} from '../../utils';

const { ech0, errorlog, getMyToken } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpClientConsoleLogHashesProxyHandler,
  );

  void0(credentials);
  void0(qtApi);
  return (async () => {
    const getSymbolId = getSymboIdByStockSymbol(qtApi);
    void ech0(await getSymbolId('AAPL'));
    const tedis = id0(new Tedis({ port: 6379 }));
    ech0(await tedis.keys('*'));
    tedis.close();
    // const redis = ech0(createClient(6379));
    // void ech0(redis.PING());
  })().catch(error => errorlog(error.message));
}
main();
