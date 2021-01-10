import { redeemToken } from '../..';
import { echo, errorlog, getMyToken } from '../../resources/side-effects';
import { httpHashLoggerClientProxyHandler } from '../../resources/side-effects/proxies';
import { void0 } from '../../utils';

// const { echo, errorlog, getMyToken } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpHashLoggerClientProxyHandler,
  );
  void0(credentials);

  void0(qtApi);
  async function leadingPrime() {
    echo(await qtApi.account.getServerTime());
  }
  leadingPrime().catch(error => errorlog(error.message));
}

main().catch(error => errorlog(error.message));
