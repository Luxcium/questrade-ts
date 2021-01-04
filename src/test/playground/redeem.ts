/* eslint-disable unicorn/no-keyword-prefix */
// tslint:disable-next-line: no-var-requires
// import axios, { AxiosStatic } from 'axios';

import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';
import { /* axiosConsoleLogHashesProxyHandler, */ void0 } from '../../utils';

export const echo = console.log; // TODO: List the side effects

export const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
async function main() {
  // inside of an async function or async IIFE
  const { qtApi, credentials } = await redeemToken(
    getMyToken(),
    // axiosConsoleLogHashesProxyHandler
  );
  void0(credentials);
  void0(qtApi);
  return (async () => {
    echo(await qtApi.account.getServerTime());
  })().catch(error => console.error(error.message)); // TODO: List the side effects
}
main();
