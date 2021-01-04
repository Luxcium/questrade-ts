import { redeemToken } from '../..';
import { sideEffects } from '../../default-behaviour';
import { getMyToken } from '../../get-token';
import {
  axiosConsoleLogHashesProxyHandler,
  getSymboIdByStockSymbol,
  void0,
} from '../../utils';

const { echo, errorlog } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    axiosConsoleLogHashesProxyHandler,
  );

  void0(credentials);
  void0(qtApi);
  return (async () => {
    // void echo(await qtApi.account.getServerTime());
    const getSymbolId = getSymboIdByStockSymbol(qtApi);

    void echo(await getSymbolId('AAPL'));
  })().catch(error => errorlog(error.message));
}
main();
