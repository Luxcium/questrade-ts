/* eslint-disable unicorn/no-keyword-prefix */
// import axios, { AxiosStatic } from 'axios';

import { redeemToken } from '../..';
import { sideEffects } from '../../resources/side-effects/default-behaviour';
import { axiosConsoleLogHashesProxyHandler, void0 } from '../../utils';

const { echo, errorlog, getMyToken } = sideEffects;
Object.getOwnPropertyNames();
export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    axiosConsoleLogHashesProxyHandler,
  );
  void0(credentials);
  void0(qtApi);
  return (async () => {
    echo(await qtApi.account.getServerTime());
  })().catch(error => errorlog(error.message));
}
main();
