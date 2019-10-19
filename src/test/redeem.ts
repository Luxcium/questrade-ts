// tslint:disable-next-line: no-var-requires
import { redeemToken } from '../';

const yourRefreshToken = 'qw9SYpGCldlPvwuOAOmHXJADrnKLDU9H0';

// inside of an async function or async IIFE
(async () => {
  const log = console.log;

  const { qtApi, credentials } = await redeemToken(yourRefreshToken);

  // Validate the server time as your hello world for this package
  const serverTime = qtApi.serverTime;
  log(serverTime);

  // inside an async function use await qt.get.<... some properties or methods>
  const myBalances = await qtApi.myBalances();
  const balances = await qtApi.account.getBalances();

  log(myBalances);
  log(balances);

  log(credentials);

  // you can use a try/catch block to manage error instead:
})().catch(error => console.error(error.message));
