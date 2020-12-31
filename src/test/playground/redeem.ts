// tslint:disable-next-line: no-var-requires
import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';

// inside of an async function or async IIFE
(async () => {
  const echo = console.log;

  const { qtApi, credentials } = await redeemToken(getMyToken());

  // Validate the server time as your hello world for this package
  // const serverTime = qtApi.serverTime;
  // echo(serverTime);
  // inside an async function use await qt.get.<... some properties or methods>
  const myBalances = await qtApi.myBalances();
  const balances = await qtApi.account.getBalances();

  echo(myBalances);
  echo(balances);
  echo(await qtApi.account.getAllAccounts());
  void credentials;
  // echo(credentials);
  // you can use a try/catch block to manage error instead:
  echo('hello as a test');
})().catch(error => console.error(error.message));
