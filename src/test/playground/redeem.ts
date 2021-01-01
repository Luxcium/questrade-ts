// tslint:disable-next-line: no-var-requires
import { redeemToken } from '../..';
import { getMyToken } from '../../get-token';

// inside of an async function or async IIFE
(async () => {
  const echo = console.log;
  const parser = (obj: any) => JSON.parse(JSON.stringify(obj));
  void parser;
  const { qtApi, credentials } = await redeemToken(getMyToken());
  echo(credentials);
  echo(qtApi.serverTime);

  // Validate the server time as your hello world for this package

  // // inside an async function use await qt.get.<... some properties or methods>
  // echo(await qtApi.myBalances());
  // echo(await qtApi.account.getBalances());
  // echo(credentials);
  // await qtApi.market.getAllMarkets();
  // echo('accessToken  →  ', parser(credentials.accessToken));
  // echo('accountNumber  →  ', parser(credentials.accountNumber));
  // echo('accessToken  →  ', parser(credentials.accessToken));
  // echo('accountNumber  →  ', parser(credentials.accountNumber));
  // echo('apiServer  →  ', parser(credentials.apiServer));
  // echo('apiUrl  →  ', parser(credentials.apiUrl));
  // echo('apiVersion  →  ', parser(credentials.apiVersion));
  // echo('authUrl  →  ', parser(credentials.authUrl));
  // echo('expiresAt  →  ', parser(credentials.expiresAt));
  // echo('expiresAtRaw  →  ', parser(credentials.expiresAtRaw));
  // echo('expiresIn  →  ', parser(credentials.expiresIn));
  // echo('keyDir  →  ', parser(credentials.keyDir));
  // echo('keyFile  →  ', parser(credentials.keyFile));
  // echo('practice  →  ', parser(credentials.practice));
  // echo('tokenExpiration  →  ', parser(credentials.tokenExpiration));
  // echo('refreshToken  →  ', parser(credentials.refreshToken));
  // echo('seedToken  →  ', parser(credentials.seedToken));
  // echo('serverTime  →  ', parser(credentials.serverTime));
  // echo('serverTimeRaw  →  ', parser(credentials.serverTimeRaw));
  // echo('tokenType  →  ', parser(credentials.tokenType));
  // echo('remainingRequests  →  ', parser(credentials.remainingRequests));
  // echo('response_.headers  →  ', parser(credentials.response_?.headers));
  // echo('response_.status  →  ', parser(credentials.response_?.status));
  // echo('response_.statusText  →  ', parser(credentials.response_?.statusText));
  // echo('response_.data  →  ', parser('credentials.response_.data'));
  // echo('config_  →  ', parser(credentials.config_));
  // echo('urlHash64  →  ', parser(credentials.urlHash64));
  // echo('urlHashHex  →  ', parser(credentials.urlHashHex));
  // echo('urlTime  →  ', parser(credentials.urlTime));
  // echo('serverTime_  →  ', parser(credentials.serverTime_));
  // echo('expiresAt_  →  ', parser(credentials.expiresAt_));

  // you can use a try/catch block to manage error instead:
})().catch(error => console.error(error.message));
