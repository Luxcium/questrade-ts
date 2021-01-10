import { redeemToken } from '../..';
import {
  ech0,
  errorlog,
  getMyToken,
  makeTedis,
} from '../../resources/side-effects';
import { httpHashLoggerClientProxyHandler } from '../../resources/side-effects/proxies';
import { getSymboIdByStockSymbol, id0, void0 } from '../../utils';

// const { ech0, errorlog, getMyToken, makeTedis } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpHashLoggerClientProxyHandler,
  );

  void0(credentials);
  void0(qtApi);
  return (async () => {
    const getSymbolId = getSymboIdByStockSymbol(qtApi);
    void ech0(await getSymbolId('AAPL'));
    const tedis = id0(makeTedis({ port: 6379 }));

    ech0(await tedis.keys('*'));
    tedis.close();
    // const redis = ech0(createClient(6379));
    // void ech0(redis.PING());
  })().catch(error => errorlog(error.message));
}
main();
