// tslint:disable-next-line: no-var-requires
const redeem = require('../');
const redeemToken = redeem.redeemToken;
const yourRefreshToken = 'qw9SYpGCldlPvwuOAOmHXJADrnKLDU9H0';

// inside of an async function or async IIFE
(async () => {
  const log = console.log;

  const { qtApi, credentials } = await redeemToken(yourRefreshToken);

  // Validate the server time as your hello world for this package
  const serverTime = qtApi.serverTime;
  log(serverTime);

  // inside an async function use await qt.get.<... some methode>
  const balances = await qtApi.account.getBalances();
  log(balances);
  log(credentials);

  // you can use a try/catch block to manage error instead:
})().catch(error => console.error(error.message));
