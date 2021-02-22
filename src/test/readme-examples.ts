/* 'require' call may be converted to an import. */
// import { redeemToken } from 'questrade-ts'
import { qtAPIv2_0 } from '..';
import { getMyToken } from '../resources/side-effects';
// const { redeemToken } = require('questrade-ts');

/* You will need to create your own API key: */
/* https://login.questrade.com/APIAccess/UserApps.aspx */
const yourRefreshToken = 'RocgqWp_USE_YOUR_OWN_TOKEN_M3BCd0';
void yourRefreshToken;

/* inside of an async function or async IIFE */
(async () => {
  const { log } = console;
  const { qtApi, credentials } = await qtAPIv2_0({ token: getMyToken });
  /* Validate the server time as your hello world for this package */
  const { serverTime } = qtApi;
  log(serverTime);

  /* inside an async function use await qt.get.<... some properties or methods> */
  const myBalances = await qtApi.myBalances();
  const balances = await qtApi.account.getBalances();

  log(myBalances);
  log(balances);

  log(credentials);

  /* you can use a try/catch block to manage error instead: */
})().catch(error => console.error(error.message));
