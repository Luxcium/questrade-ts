/* eslint-disable unicorn/no-keyword-prefix */

import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects/default-behaviour';
import { httpClientConsoleLogHashesProxyHandler, void0 } from '../../utils';

const { echo, errorlog, getMyToken } = sideEffects;

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    httpClientConsoleLogHashesProxyHandler,
  );
  void0(credentials);
  void0(qtApi);
  return (async () => {
    echo(await qtApi.account.getServerTime());
  })().catch(error => errorlog(error.message));
}
main();
