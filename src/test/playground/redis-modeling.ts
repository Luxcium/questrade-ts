import { Tedis } from 'tedis';

import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects/default-behaviour';
import {
  axiosConsoleLogHashesProxyHandler,
  getSymboIdByStockSymbol,
  id0,
  void0,
} from '../../utils';
import { idx } from '../../utils/void0';

const { ech0, errorlog, getMyToken } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    axiosConsoleLogHashesProxyHandler,
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

const A = 'A';
const B = 'B';
const C = 'C';
const D = 'D';
const E = 'E';

void0(
  console.log('idx(1,2,3,4,5):', idx(1, 2, 3, 4, 5)),
  console.log('idx(A,B,C,D,E):', idx(A, B, C, D, E)),
);
